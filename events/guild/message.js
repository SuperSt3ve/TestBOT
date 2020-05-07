exports.run = async (client, message) => {

    if (message.author.bot || message.channel.type === "dm") return;
    if (message.content.indexOf(client.prefix) !== 0) return;
    if (message.guild && !message.member) await message.guild.fetchMember(message.author);

    let args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    let command = args.shift().toLowerCase();
    let cmd = client.commands.get(command);

    if (!cmd) return;

    cmd.run(client, message, args);

}