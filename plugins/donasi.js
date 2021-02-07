let handler = async m => m.reply(`
╭─「 Donasi • Dana & Gopay 」
│ • Gopay [082273624493]
│ • Dana [082273624493]
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
