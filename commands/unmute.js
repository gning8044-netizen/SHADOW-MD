async function unmuteCommand(sock, chatId) {
    await sock.groupSettingUpdate(chatId, 'not_announcement'); // Unmute the group
    await sock.sendMessage(chatId, { text: 'le groupe est fermé allez vous lover.' });
}

module.exports = unmuteCommand;
