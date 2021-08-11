const ms = require('ms');

module.exports = {
    name: "mute",
    description: "Mutes a user",
    execute(message, args) {
        const modRoleID = "874994374285611058";

        if (!message.member.roles.cache.has(modRoleID)) return message.reply("you don't have the permission to run this command! (You need the moderator role)");

        const target = message.mentions.users.first();
        if (!target) return message.reply("please specify a user to mute");

        let muteRole = message.guild.roles.cache.find(role => role.name === "Muted");

        let memberTarget = message.guild.members.cache.get(target.id);

        if (!args[1]) {
            memberTarget.roles.add(muteRole.id);
            message.channel.send(`<@${memberTarget.user.id}> has been muted`);
            return;
        }
        memberTarget.roles.add(muteRole.id);
        message.channel.send(`<@${memberTarget.user.id}> has been muted for ${ms(ms(args[1]))}`);

        setTimeout(function() {
            memberTarget.roles.remove(muteRole.id);
        }, ms(args[1]));
    }
}