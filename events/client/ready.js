exports.run = async (client) => {

    console.log(`${client.user.tag}, serving ${client.users.cache.size} users in ${client.guilds.cache.size} servers.`, "Ready");

    client.user.setActivity(`${client.prefix}help`, {type: "Watching"});

}