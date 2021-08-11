module.exports = {
    name: "unmute",
    description: "Unmutes a user",
    execute(message, args) {
        const modRoleID = "874994374285611058";

        if (!message.member.roles.cache.has(modRoleID)) return message.reply("you don't have the permission to run this command! (You need the moderator role)");

        const target = message.mentions.users.first();
        if (!target) return message.reply("please specify a user to unmute");

        let muteRole = message.guild.roles.cache.find(role => role.name === "Muted");

        let memberTarget = message.guild.members.cache.get(target.id);

        memberTarget.roles.remove(muteRole.id);

        message.reply("operation complete. Unmuted " + memberTarget.user);
    }
}