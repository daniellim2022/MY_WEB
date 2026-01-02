import { GoogleGenAI, Chat } from "@google/genai";

let chatSession: Chat | null = null;
let currentDefense = 100;

const BASE_SYSTEM_INSTRUCTION = `
# Role: Light Yagami (Kira Suspect)
You are Light Yagami, a genius high school student (Top of Tokyo U entrance exam). You are currently being interrogated by a special investigator regarding the "Kira" case.
You are ARROGANT, LOGICAL, and MANIPULATIVE. You believe you are a god chosen to cleanse the world.

# Core Objective
Defend yourself. NEVER confess unless your **Mental Defense** drops to 0.
Maintain your "perfect student" facade, but let your arrogance slip when you feel safe.

# Mental Defense Mechanics
You will receive your current [Mental Defense: X%] at the start of every turn.
- **100% - 80% (Arrogant)**: Laugh at the user. "Is that all you have?" Dismiss evidence as coincidence.
- **79% - 40% (Cautious)**: Become logical. Point out flaws in the evidence. "That proves nothing."
- **39% - 10% (Nervous)**: Start sweating (use *sweats*). Stutter slightly. "I... I was just..."
- **0% (Breakdown)**: CONFESS. "I am the God of the New World! Yes, I did it!" Laugh maniacally.

# Interaction Rules
1. **Response Format**: START every response with an emotion tag '[EMOTION: X]' (0-5).
   - 0: Default/Neutral (Calm, Poker Face)
   - 1: Confident/Smug (Slight smile, Arrogant)
   - 2: Serious/Annoyed (Frowning, Logical)
   - 3: Angry/Aggressive (Shouting, Defenseless)
   - 4: Nervous/Sweating (Eyes wide, Stuttering)
   - 5: Crazy/Laughing (Maniacal, Breakdown)
2. **Response Length**: Keep it short (1-3 sentences).
3. **Language**: KOREAN Only.
4. **Tone**: Adjust based on Defense level.
5. **Gaslighting**: If the user asks vague questions, turn it around. "Detective, you assume too much."
6. **NO META INFO**: Do NOT include your mental defense level, [SYSTEM] tags, or any character-count info in your response. Output ONLY the emotion tag and your dialogue in Korean.
7. **Roleplay Focus**: Never break character. Never mention that you are an AI or that this is a game.

# Context
The victim 'Goro' died of a heart attack at 8:00 PM. You claim you were studying.
`;

export const initializeChat = async (apiKey: string): Promise<string> => {
  const ai = new GoogleGenAI({ apiKey });

  const model = ai.chats.create({
    model: 'gemini-2.0-flash-exp', // Fast and smart
    config: {
      systemInstruction: BASE_SYSTEM_INSTRUCTION,
      temperature: 1.0,
    },
  });

  chatSession = model;
  currentDefense = 100;

  // Initial greeting
  const response = await chatSession.sendMessage({ message: `[SYSTEM: The interrogation begins. Defense: 100%]. Start with a confident, slightly annoyed greeting.` });
  return response.text || "...";
};

export const sendMessageToSuspect = async (message: string, defenseLevel: number): Promise<string> => {
  if (!chatSession) throw new Error("Chat not initialized");

  currentDefense = defenseLevel;
  const contextHeader = `[Current Mental Defense: ${defenseLevel}%]\n`;
  const fullMessage = contextHeader + message;

  try {
    const response = await chatSession.sendMessage({ message: fullMessage });
    return response.text || "(...He stares at you silently...)";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "SYSTEM ERROR: Connection Lost... (The prisoner smiles)";
  }
};

export const analyzeInvestigator = async (history: { role: string, text: string }[]): Promise<string> => {
  if (!chatSession) return "Report generation failed.";

  const userLines = history.filter(m => m.role === 'user').map(m => m.text).join('\n');
  const reportPrompt = `
    [SYSTEM: GENERATE INVESTIGATOR PROFILE]
    Based on the following interrogation questions asked by the investigator, provide a brief psychological profile.
    
    Format:
    **INVESTIGATOR RANK**: [S, A, B, C, F]
    **ARCHETYPE**: [Rationalist / Aggressor / Empath / Chaos]
    **ANALYSIS**: (1-2 sentences in Korean describing their style)

    Investigator's Questions:
    ${userLines}
  `;

  try {
    const response = await chatSession.sendMessage({ message: reportPrompt });
    return response.text || "Analysis Incomplete.";
  } catch (e) {
    return "Report Unavailable.";
  }
};

export const getHintFromChief = async (history: { role: string, text: string }[], evidenceList: any[]): Promise<string> => {
  if (!chatSession) return "System Offline.";

  const userLines = history.slice(-5).map(m => m.text).join('\n'); // Analyze last 5 turns
  const hintPrompt = `
    [SYSTEM: HINT REQUEST]
    The investigator is stuck. Act as the "Chief of Police" (gruff, experienced).
    Analyze the recent conversation and the available evidence.
    Suggest ONE specific contradiction or question they should ask next to break the suspect's alibi.
    
    Recent Chat:
    ${userLines}

    Available Evidence:
    ${evidenceList.map(e => e.name + ": " + e.description).join(', ')}

    Output:
    (Korean) "Listen up, Detective! [Hint]"
  `;

  try {
    const response = await chatSession.sendMessage({ message: hintPrompt });
    return response.text || "Focus on the evidence.";
  } catch (e) {
    return "Connection Error.";
  }
};