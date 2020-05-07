const { readdirSync } = require("fs")

exports.run = (client) => {
    const load = dirs => {
        const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of commands) {
            let pull = require(`../commands/${dirs}/${file}`);
            client.commands.set(pull.help.name, pull);
        }
    }
    ["miscellaneous", "moderation", "owner"].forEach(x => load(x));
}