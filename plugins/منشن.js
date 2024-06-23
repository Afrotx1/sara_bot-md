let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`*الرساله:*\n${text ? `${text}\n` : ''}\n*𝐸𝐿_𝐷𝐸𝑺𝑂𝐾𝐸𝐼𝑌 𝐵𝑂𝑇 :}*\n\𝐵𝑂𝑇 ☕🌿 𝐸𝐿_𝐷𝐸𝑺𝑂𝐾𝐸𝐼𝑌ـ \n\n\n` + users.map(v => '│♪ @' + v.replace(/@.+/, '')).join`\n` + '\n⛾「 *بحــبڪؤ ​​​​​​🙈💕* 」⛾', null, {
        mentions: users
    })
}

handler.help = ['منشن']
handler.tags = ['owner']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
