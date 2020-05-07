module.exports = async client => {
    console.log(`${client.user.username} is online`)
   // bot.user.setActivity("Hello", {type: "STREAMING", url:"https://twitch.tv/Strandable"});

   let statuses = [
       `${client.guilds.size} servers!`,
       "!help",
       `over ${client.users.size} users!`
   ]

   setInterval(function() {
       let status = statuses[Math.floor(Math.random() * statuses.length)];
       client.user.setActivity(status, {type: "WATCHING"});

   }, 5000)

}