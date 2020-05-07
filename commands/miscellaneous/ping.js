exports.run = (client, message) => {

    message.channel.send("Pong!");

}

exports.help = {
    name: "ping",
    category: "Miscellaneous",
    description: "API and Client ping.",
    usage: "ping"
}