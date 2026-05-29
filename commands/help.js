const settings = require('../settings');
const fs = require('fs');
const path = require('path');

async function helpCommand(sock, chatId, message) {
    const time = new Date().toLocaleTimeString('en-US', { hour12: true, timeZone: 'Asia/Dhaka' });
    const date = new Date().toLocaleDateString('en-GB', { timeZone: 'Asia/Dhaka' });
    const pushname = message.pushName || 'User';

    const helpMessage = `🗿 *ᴄᴏᴍᴍᴀɴᴅᴇ ᴍᴇɴᴜ* ⚰️
┠───────────────
┃ 🗿 *ʙᴏᴛ:* ${settings.botName || '𝐃𝐄𝐕 𝐒𝐇𝐀𝐃𝐎𝐖 𝐌𝐃 𝐁𝐎𝐓'}
┃ 👑 ᴏᴡɴᴇʀ: *${settings.botOwner || '𝐃𝐄𝐕 𝐒𝐇𝐀𝐃𝐎𝐖221🇸🇳'}*
┃ 🌍 Prefix: *${settings.prefix || '.'}*
┃ 🧩 Version: ${settings.version || '1.1.5'}
┃ 🕒 Time: ${time}
┃ 📅 Date: ${date}
┃ 🌐 Timezone: Asia/Dhaka
┃ 📜 𝐓𝐨𝐭𝐚𝐥 𝐂𝐨𝐦𝐦𝐚𝐧𝐝𝐞𝐬:165+
┠───────────────
   ★ 𝐒𝐇𝐀𝐃𝐎𝐖 𝐀𝐃𝐌𝐈𝐍
   ┝ .ban
   ┝ .kick
   ┝ .kickall
   ┝ .fuck-off
   ┝ .promote
   ┝ .demote
   ┝ .mute
   ┝ .unmute
   ┝ .delete
   ┝ .warn
   ┝ .warnings
   ┝ .antispam
   ┝ .antisticker
   ┝ .antilink
   ┝ .antibadword
   ┝ .tagall
   ┝ .hidetag
   ┝ .tag
   ┝ .welcome
   ┝ .goodbye
   ┝ .chatbot
   ┝ .setgpp
   ┝ .setgname
   ┝ .setgdesc
   ┝ .resetlink
   ┝ .groupinfo
   ┝ .leave
   ┝ .poll
   ┝ .adminlist
   ┝ .groupsetting
   ┝ .antiviewonce
   ┝ .antiforeign

   ⁂ 𝐒𝐇𝐀𝐃𝐎𝐖 𝐀𝐈 𝐇𝐔𝐁
   ┝ .bot
   ┝ .gpt
   ┝ .gemini
   ┝ .imagine
   ┝ .flux
   ┝ .sora
   ┝ .remini
   ┝ .bingai
   ┝ .blackbox
   ┝ .claude
   ┝ .aiwriter
   ┝ .aidetect
   ┝ .codeai
   ┝ .brainly
   ┝ .wolfram
   ┝ .aiphoto
   ┝ .deepseek

   ● 𝐒𝐇𝐀𝐃𝐎𝐖 𝐃𝐎𝐖𝐋𝐎𝐀𝐃..
   ┝ .play
   ┝ .song
   ┝ .video
   ┝ .spotify
   ┝ .ytmp4
   ┝ .ytmp3
   ┝ .tiktok
   ┝ .facebook
   ┝ .instagram
   ┝ .twitter
   ┝ .gdrive
   ┝ .mediafire
   ┝ .mega
   ┝ .scloud
   ┝ .gitclone
   ┝ .pinterestdl
   ┝ .threads
   ┝ .snapchat
   ┝ .apkdl
   ┝ .mediafiredl

   ❃ 𝐒𝐇𝐀𝐃𝐎𝐖 & 𝐒𝐓𝐈𝐂𝐊𝐄𝐑
   ┝ .sticker
   ┝ .simage
   ┝ .blur
   ┝ .removebg
   ┝ .emojimix
   ┝ .crop
   ┝ .take
   ┝ .meme
   ┝ .tgsticker
   ┝ .wallpaper
   ┝ .imgsearch
   ┝ .pinterest
   ┝ .qrcode
   ┝ .attp
   ┝ .ttp
   ┝ .wasticker

   ✿ 𝐒𝐇𝐀𝐃𝐎𝐖 & 𝐆𝐀𝐌𝐄𝐒
   ┝ .tictactoe
   ┝ .hangman
   ┝ .trivia
   ┝ .truth
   ┝ .dare
   ┝ .flirt
   ┝ .ship
   ┝ .simp
   ┝ .character
   ┝ .insult
   ┝ .compliment
   ┝ .shayari
   ┝ .joke
   ┝ .quote
   ┝ .fact
   ┝ .8ball
   ┝ .lines
   ┝ .riddle
   ┝ .casino
   ┝ .dice

   ❂ 𝐒𝐇𝐀𝐃𝐎𝐖 𝐌𝐀𝐆𝐈𝐂
   ┝ .neon
   ┝ .glitch
   ┝ .matrix
   ┝ .hacker
   ┝ .fire
   ┝ .thunder
   ┝ .metallic
   ┝ .blackpink
   ┝ .ice
   ┝ .snow
   ┝ .devil
   ┝ .light
   ┝ .purple
   ┝ .leaves
   ┝ .arena
   ┝ .sand
   ┝ .glass
   ┝ .magma
   ┝ .graffiti
   ┝ .holographic

   ✴︎ 𝐒𝐇𝐀𝐃𝐎𝐖 𝐖𝐎𝐑𝐋𝐃
   ┝ .waifu
   ┝ .neko
   ┝ .shinobu
   ┝ .megumin
   ┝ .kiss
   ┝ .hug
   ┝ .pat
   ┝ .slap
   ┝ .kill
   ┝ .cry
   ┝ .dance
   ┝ .poke
   ┝ .bully
   ┝ .animequote
   ┝ .handhold
   ┝ .bite
   ┝ .glowing

   ● 𝐒𝐇𝐀𝐃𝐎𝐖 𝐒𝐘𝐒𝐓𝐄𝐌𝐄
   ┝ .mode
   ┝ .update
   ┝ .settings
   ┝ .autoread
   ┝ .autostatus
   ┝ .anticall
   ┝ .pmblocker
   ┝ .clearsession
   ┝ .cleartmp
   ┝ .setpp
   ┝ .antidelete
   ┝ .autotyping
   ┝ .autoreact
   ┝ .botstatus
   ┝ .join
   ┝ .out

   ✰ 𝐒𝐇𝐀𝐃𝐎𝐖 𝐃𝐀𝐓𝐀
   ┝ .info
   ┝ .repo
   ┝ .sc
   ┝ .github
   ┝ .owner
   ┝ .ping
   ┝ .alive
   ┝ .weather
   ┝ .news
   ┝ .lyrics
   ┝ .runtime
   ┝ .ss
   ┝ .jid
   ┝ .url
   ┝ .trt
   ┝ .tts
   ┝ .calc
   ┝ .time
   ┝ .dictionary
   ┝ .wikipedia
   ┝ .currency
   ┝ .covid
   ┝ .iplookup
   ┝ .passed
   ┝ .jail
   ┝ .wasted
   ┝ .triggered
   ┝ .tweet
   ┝ .comrade
   ┝ .horny
   ┝ .lgbt
   ┝ .heart
   ┝ .circle
   ┝ .ytcomment
   ┝ .speedtest
   ┝ .uptime
   ┝ .cpuinfo
   ┝ .diskusage
   ┕━━━━━━━━━━━━━━━━━━━━┙

   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
      *ᴘᴏᴡᴇʀᴇᴅ ʙʏ 𝐃𝐄𝐕 𝐒𝐇𝐀𝐃𝐎𝐖 𝐓𝐄𝐂𝐇221🇸🇳*
     _𝐁𝐎𝐑𝐎𝐌𝐄 𝐌𝐁𝐎𝐔𝐑 • 𝐒𝐇𝐀𝐃𝐎𝐖 2026_`;

    try {
        const myPic = 'https://files.catbox.moe/9evtz2.jpeg';
        await sock.sendMessage(chatId, { 
            image: { url: myPic }, 
            caption: helpMessage,
            }, { quoted: message });
    } catch (e) {
        await sock.sendMessage(chatId, { text: helpMessage });
    }
}

module.exports = helpCommand;
