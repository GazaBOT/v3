let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • XL [087750016230]
│ • Telkomsel [081216984044]
╰────
╭─「 Hubungi 」
│ > Ingin donasi? Wa.me/6281216984044
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['info']
handler.command = /^dona(te|si)$/i

module.exports = handler
