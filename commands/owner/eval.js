exports.run = async (client, message, args) => {

    if (client.owner !== message.author.id) return;

    const code = args.join(" ");

    client.clean = async (client, text) => {

        if (text && text.constructor.name == "Promise")
            text = await text;

        if (typeof text !== "string")
            text = require("util").inspect(text, {depth: 1});
    
        text = text
            .replace(/`/g, "`" + String.fromCharCode(8203))
            .replace(/@/g, "@" + String.fromCharCode(8203))
            .replace(client.token, "mfa.VkO_2G4Qv3T--NO--lWetW_tjND--TOKEN--QFTm6YGtzq9PH--4U--tG0");
    
        return text;
        
    }

    try {

        const evaled = eval(code);
        const clean = await client.clean(client, evaled);

        message.channel.send(`\`\`\`js\n${clean}\n\`\`\``);

    } catch (err) {

        message.channel.send(`\`ERROR\` \`\`\`xl\n${await client.clean(client, err)}\n\`\`\``);

    }

}
  
exports.help = {
    name: "eval",
    category: "System",
    description: "Evaluates arbitrary javascript.",
    usage: "eval [...code]"
}