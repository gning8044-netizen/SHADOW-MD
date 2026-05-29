const os = require('os');

async function infoCommand(sock, chatId, message) {
    try {
        const uptimeSeconds = process.uptime();
        const uptime = new Date(uptimeSeconds * 1000).toISOString().substr(11, 8);

        const infoMessage = `
--------------------------------------------
➥ 𝐇𝐞𝐲 𝐌𝐫/𝐦𝐢𝐬𝐬 
╭────《  𝐌𝐀 𝐕𝐈𝐄😔 》────⊷
│ ╭────────✧❁✧────────◆
│ │ 🌸 𝐍𝐀𝐌𝐄 :- 𝐃𝐄𝐕-𝐒𝐇𝐀𝐃𝐎𝐖-𝐓𝐄𝐂𝐇
│ │ 🏡 𝐅𝐑𝐎𝐌 :- 𝐒𝐄𝐍𝐄𝐆𝐀𝐋🇸🇳 
│ │ 📘 𝐂𝐋𝐀SS𝐒 :- 𝐒𝐄𝐂𝐎𝐍𝐃𝐄 
│ │ 💖 𝐑𝐋𝐒 :- 𝐉𝐄 𝐒𝐔𝐈𝐒 𝐏𝐀𝐒 𝐄𝐍 𝐂𝐎𝐔𝐏𝐋𝐄
│ │ 🎯 𝐇𝐎𝐁𝐁𝐘 :- 𝐂𝐄𝐋𝐈𝐁𝐀𝐓𝐀𝐈𝐑𝐄 
│ │ ☎️ 𝐍𝐔𝐌𝐁𝐄𝐑 :- 221767833987
│ │ ..𝐃𝐄𝐕 𝐒𝐇𝐀𝐃𝐎𝐖 𝐁𝐎𝐑𝐎𝐌𝐄 𝐌𝐁𝐎𝐔𝐑..
│ ╰────────✧❁✧────────◆
╰══════════════════⊷
--------------------------------------------

🖥️ *Server Info:*
• Platform       : ${os.platform()}
• CPU            : ${os.cpus()[0].model.split(' ')[0]}
• Node.js Version: ${process.version}
• Uptime         : ${uptime}
• Total Memory   : ${(os.totalmem() / (1024 ** 3)).toFixed(2)} GB
• Free Memory    : ${(os.freemem() / (1024 ** 3)).toFixed(2)} GB

   *Powered by DEV SHADOW TECH*`;

        const imageUrl = "https://files.catbox.moe/2531iu.jpeg";

        await sock.sendMessage(chatId, { 
            image: { url: imageUrl }, 
            caption: infoMessage 
        }, { quoted: message });

    } catch (error) {
        console.error('Error in info command:', error);
        await sock.sendMessage(chatId, { text: '❌ An error occurred while fetching info.' });
    }
}

module.exports = infoCommand;
