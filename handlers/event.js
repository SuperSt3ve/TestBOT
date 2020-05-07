const { readdirSync } = require("fs");

exports.run = async (client) => {

    const load = dirs => {

        const events = readdirSync(`./events/${dirs}/`).filter(d => d.endsWith('.js'));

        for (let file of events) {
            const event = require(`../events/${dirs}/${file}`);
            let event_name = file.split(".")[0];

            client.on(event_name, event.run.bind(null, client));
        }

    }

    ["client", "guild"].forEach(x => load(x));

}