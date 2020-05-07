const { Client } = require("discord.js");
const { token } = require("./config.json")
client = new Client;

client.on("ready", () => {
    console.log("Online");
});

client.login(token);
