let handler  = async (m, { conn, usedPrefix: _p }) => {
  conn.reply(m.chat, `
╠═〘 INFO BOT 〙 ═
╠➥ Dibuat dengan bahasa javascript via NodeJs
╠➥ Rec: NSR STORY
╠➥ Script: @Syahri
║
╠➥ Github: https://github.com/syahricogan/syahriganz
╠➥ Instagram: @nsrstoty
╠➥ YouTube: NSR STORY
║
╠═〘 Thanks To 〙 ═
╠➥ Nurotomo
╠➥ MfarelS
╠➥ ST4RZ
╠➥ Dan kawan yang lain :)
║
╠═〘  *REQUEST FITUR* 〙 ═
║
║>Request? Wa.me/6288235435804
║
╠═〘  *SYAHRI-BOT*  〙 ═
`.trim(), m)
}
handler.help = ['info']
handler.tags = ['about']
handler.command = /^(info)$/i
handler.owner = false
handler.mods = false
handler.premium = false
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

module.exports = handler

