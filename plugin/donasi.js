let handler = async m => m.reply(`
╭─「 Donasi • Pulsa 」
│ • SUBSCRIBE *NSR STORY*
│ • FOLLOW *NSRSTORY
│ 
│ 
│ > Ingin donasi? Wa.me/6285893123964
╰────
`.trim()) // Tambah sendiri kalo mau
handler.help = ['donasi']
handler.tags = ['about']
handler.command = /^dona(te|si)$/i

module.exports = handler
