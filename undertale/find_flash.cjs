
const { Jimp } = require('jimp');
const fs = require('fs');

async function findFlash() {
    let brightestFrame = -1;
    let maxBrightness = -1;

    for (let i = 0; i < 49; i++) {
        try {
            const image = await Jimp.read(`public/assets/transform_new/frame_${i}.png`);
            let totalBrightness = 0;
            image.scan(0, 0, image.bitmap.width, image.bitmap.height, function (x, y, idx) {
                const r = this.bitmap.data[idx + 0];
                const g = this.bitmap.data[idx + 1];
                const b = this.bitmap.data[idx + 2];
                totalBrightness += (r + g + b) / 3;
            });
            const avgBrightness = totalBrightness / (image.bitmap.width * image.bitmap.height);
            if (avgBrightness > 200) {
                console.log(`Frame ${i}: ${avgBrightness}`);
            }
            if (avgBrightness > maxBrightness) {
                maxBrightness = avgBrightness;
                brightestFrame = i;
            }
        } catch (e) {
            // skip missing frames
        }
    }
    console.log(`Brightest Frame: ${brightestFrame} (Brightness: ${maxBrightness})`);
}

findFlash();
