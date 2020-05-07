const { Client, Collection } = require("discord.js");
const { token, prefix, owner } = require("./config.json");
const client = new Client();
client.events = new Collection();
client.commands = new Collection();
client.prefix = prefix;
client.owner = owner;
["command", "event"].forEach(x => require(`./handlers/${x}`).run(client));
client.login(token).catch(console.error);