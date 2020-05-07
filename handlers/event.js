const { readdirSync } = require("fs");

exports.run = (client) => {
    const load = dirs => {
        const events = readdirSync(`./events/${dirs}/`).filter(d => d.endsWith('.js'));
        for (let file of events) {
            const evt = require(`../events/${dirs}/${file}`);
            let event_name = file.split(".")[0];
            client.on(event_name, evt.run.bind(null, client));
        }
    }
    ["client", "guild"].forEach(x => load(x));
}