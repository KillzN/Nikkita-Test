import fetch from 'node-fetch';

let handler = async (m, { conn, text }) => {
    if (!text) throw 'Por favor, proporciona el nombre de un Pokémon para buscar.';

    const url = `https://some-random-api.com/pokemon/pokedex?pokemon=${encodeURIComponent(text)}`;

    const response = await fetch(url);
    const json = await response.json();

    if (!response.ok || !json.name) {
        throw `¡Oops! Parece que hubo un error al buscar el Pokémon. Por favor, inténtalo de nuevo más tarde.`;
    }

    const message = `
*Pokedex - Información de ${json.name}*

*Nombre:* ${json.name}
*ID:* ${json.id}
*Tipo:* ${json.type}
*Habilidades:* ${json.abilities.join(', ')}
*Tamaño:* ${json.height}
*Peso:* ${json.weight}

📖 *Descripción:*
${json.description}

🔍 ¡Encuentra más detalles sobre este Pokémon en la Pokedex! 🔍

🔗 [Pokedex](https://www.pokemon.com/es/pokedex/${json.name.toLowerCase()})
    `;

    // Enviar mensaje como texto simple
    await conn.sendMessage(m.chat, { text: message }, { quoted: m });
};

handler.help = ['pokedex <pokemon>'];
handler.tags = ['anime', 'fun'];
handler.command = ['pokedex', 'pokédex']

export default handler;
