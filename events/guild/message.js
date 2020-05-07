exports.run = (client, message) => { 
    if(message.author.bot || message.channel.type === "dm") return;

    let args = message.content.slice(client.prefix.length).trim().split(/ +/g);
    let cmd = args.shift().toLowerCase();

    if(!message.content.startsWith(client.prefix)) return;
    let commandfile = client.commands.get(cmd);
    if(commandfile) commandfile.run(client, message, args);
}