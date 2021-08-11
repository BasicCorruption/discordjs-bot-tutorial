module.exports = {
    name: "help",
    description: "lists all of the bot's commands",
    execute(message, args, Discord, commands) {
        message.reply(new Discord.MessageEmbed()
            .setTitle("Commands")
            .setColor("#9955ff")
            .addField("Ping", commands.get("ping").description)
            .addField("Help", commands.get("help").description)
            .addField("Kick", commands.get("kick").description)
            .addField("Ban", commands.get("ban").description)
            .addField("Mute", commands.get("mute").description)
            .addField("Unmute", commands.get("unmute").description)
        );
    }
}