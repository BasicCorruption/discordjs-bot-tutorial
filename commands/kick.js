module.exports = {
    name: "kick",
    description: "Kicks a user",
    execute(message, args, Discord) {
        const modRoleID = `874994374285611058`;

        const member = message.mentions.users.first();

        if (!message.member.roles.cache.has(modRoleID)) return message.reply("you don't have the permission to run this command! (You need the moderator role)");
        if (!member) return message.reply("you did not specify a user to kick!");

        const memberTarget = message.guild.members.cache.get(member.id);

        memberTarget.kick(args[1]);
        memberTarget.send(new Discord.MessageEmbed()
            .setTitle("You have been kicked from Corruption's Server")
            .setDescription("This is not a ban. You can rejoin the server with this link: https://discord.gg/server")
            .addField("Reason", args[1])
            .addField("Kicked by", message.author)
        );
    }
}