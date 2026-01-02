
const gifFrames = require('gif-frames');
const { Jimp } = require('jimp');
const fs = require('fs');

async function process() {
    try {
        const frameData = await gifFrames({ url: 'public/assets/character_animation.gif', frames: 'all', outputType: 'png', cumulative: true });

        if (!fs.existsSync('public/assets/transform_new')) {
            fs.mkdirSync('public/assets/transform_new');
        }

        console.log(`Processing ${frameData.length} frames.`);

        const streamToBuffer = (stream) => {
            return new Promise((resolve, reject) => {
                const chunks = [];
                stream.on('data', chunk => chunks.push(chunk));
                stream.on('end', () => resolve(Buffer.concat(chunks)));
                stream.on('error', reject);
            });
        };

        for (let i = 0; i < frameData.length; i++) {
            const frame = frameData[i];
            const buffer = await streamToBuffer(frame.getImage());
            const jimpImage = await Jimp.read(buffer);

            const w = jimpImage.bitmap.width;
            const h = jimpImage.bitmap.height;

            if (i === 0) console.log(`Original Size: ${w}x${h}`);

            // No crop for now, trusting the user provided a clean GIF or we center it.
            await jimpImage.write(`public/assets/transform_new/frame_${i}.png`);
        }
        console.log("Done.");
    } catch (e) {
        console.error(e);
    }
}

process();
