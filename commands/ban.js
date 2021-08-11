module.exports = {
    name: "ban",
    description: "Bans a user",
    execute(message, args, Discord) {
        const modRoleID = `874994374285611058`;

        const member = message.mentions.users.first();

        if (!message.member.roles.cache.has(modRoleID)) return message.reply("you don't have the permission to run this command! (You need the moderator role)");
        if (!member) return message.reply("you did not specify a user to ban!");

        const memberTarget = message.guild.members.cache.get(member.id);

        memberTarget.ban(args[1]);
        memberTarget.send(new Discord.MessageEmbed()
            .setTitle("You have been ban from Corruption's Server")
            .addField("Reason", args[1])
            .addField("Kicked by", message.author)
            .addField("Duration", "permanent")
        );
    }
}