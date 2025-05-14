const handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
  if (!(isAdmin || isOwner)) {
    global.dfail('admin', m, conn);
    throw false;
  }
  const encabezado = '𝘽𝙪𝙚𝙣𝙤𝙨 𝙙𝙞𝙖𝙨, 𝙩𝙖𝙧𝙙𝙚𝙨,𝙣𝙤𝙘𝙝𝙚𝙨 𝙡𝙞𝙙𝙚𝙧𝙚𝙨 𝙙𝙚 𝙚𝙦𝙪𝙞𝙥𝙤𝙨, 𝙙𝙚𝙨𝙥𝙞𝙚𝙧𝙩𝙚𝙣🌤\n\n';
  const intro = ' ── 𝙀𝙏𝙄𝙌𝙐𝙀𝙏𝘼𝙎: \n';
  let etiquetas = '';
  for (const mem of participants) {
    etiquetas += `🩶🎙 @${mem.id.split('@')[0]}\n`;
  }
  const pie = '└𝙄𝙜:𝙣𝙞𝙠𝙠𝙞𝟯𝟬.𝙛𝙛';
  const mensaje = encabezado + intro + etiquetas + pie;
  await conn.sendMessage(m.chat, {
    text: mensaje,
    mentions: participants.map((a) => a.id)
  });
};
handler.help = ['tagall <mensaje>', 'invocar <mensaje>'];
handler.tags = ['group'];
handler.command = /^(tagall|invocar|marcar|todos|invocación|ta)$/i;
handler.admin = true;
handler.group = true;

export default handler;
