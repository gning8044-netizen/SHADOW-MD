const settings = require("../settings");

async function aliveCommand(sock, chatId, message) {
    try {
        const message1 = `✨ *DEV SHADOW MD EST EN LIGNE!* ✨\n\n` +
                       `💎 *Version:* ${settings.version || '1.1.5'}\n` +
                       `👑 *Owner:* DEV-SHADOW-TECH\n` +
                       `🌍 *Status:* Online & Ready\n` +
                       `📂 *GitHub:* https://github.com/DEV SHADOW TECH221/DEV-SHADOW\n\n` +
                       `🌟 *Features:*\n` +
                       `• Group Management\n` +
                       `• AI & Chat (GPT/Gemini)\n` +
                       `• Media Downloader\n` +
                       `• Fun & Games\n\n` +
                       `Type *.menu* for full command list\n\n` +
                       `🚀 *Powered by DEV SHADOW TECH*`;

        await sock.sendMessage(chatId, {
            text: message1,
            contextInfo: {
                forwardingScore: 1,
                isForwarded: true,
                externalAdReply: {
                    title: 'DEV-SHADOW-TECH OFFICIAL',
                    body: 'Subscribe to my YouTube Channel',
                    thumbnailUrl: 'https://github.com/DEV-SHADOW.png',
                    sourceUrl: 'https://youtube.com/@saycotom?si=7QiSIta2cfsdCbtW',
                    mediaType: 1,
                    renderLargerThumbnail: true
                }
            }
        }, { quoted: message });
    } catch (error) {
        console.error('Error in alive command:', error);
        await sock.sendMessage(chatId, { text: 'Bot is alive and running!' }, { quoted: message });
    }
}

module.exports = aliveCommand;
