const { Client, Collection } = require("discord.js");
const { token, prefix } = require("./config.json");
const client = new Client();
client.events = new Collection();
client.commands = new Collection();
client.prefix = prefix;
["command", "event"].forEach(x => require(`./handlers/${x}`).run(client));
client.login(token).catch(console.error);
