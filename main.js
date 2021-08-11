const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();

require("dotenv").config();

const prefix = "!";

client.commands = new Discord.Collection();

const commandFiles = fs.readdirSync("./commands/").filter(file => file.endsWith(".js"));
for (const file of commandFiles) {
    const command = require(`./commands/${file}`);

    client.commands.set(command.name, command);
}

client.on("ready", () => {
    console.log(`Logged in as ${client.user.tag}!`);

    let Statuses = [prefix + "help for commands"];
    let StatusNumber = 0;
    function changeStatus() {
        if (StatusNumber >= Statuses.length) StatusNumber = 0;
        client.user.setActivity({
            name: Statuses[StatusNumber],
            type: "PLAYING"
        });
        StatusNumber++;
    }

    changeStatus();
    setInterval(changeStatus, 5000);
});

client.on("message", message => {
    const args = message.content.slice(prefix.length).split(/ +/);
    const command = args.shift().toLowerCase();

    // commands
    if (command === "ping") client.commands.get("ping").execute(message, args);
    if (command === "mute") client.commands.get("mute").execute(message, args);
    if (command === "unmute") client.commands.get("unmute").execute(message, args);
    if (command === "kick") client.commands.get("kick").execute(message, args, Discord);
    if (command === "ban") client.commands.get("ban").execute(message, args, Discord);
    if (command === "help") client.commands.get("help").execute(message, args, Discord, client.commands);
});

client.login(process.env.TOKEN);
