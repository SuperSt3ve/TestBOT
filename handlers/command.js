const { readdirSync } = require("fs")

exports.run = async (client) => {
    
    const load = dirs => {
        
        const commands = readdirSync(`./commands/${dirs}/`).filter(d => d.endsWith('.js'));
        
        for (let file of commands) {
            let command = require(`../commands/${dirs}/${file}`);

            client.commands.set(command.help.name, command);
        }

    }

    ["miscellaneous", "moderation", "owner"].forEach(x => load(x));

}
