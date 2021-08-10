const Discord = require('discord.js');
const fs = require('fs');

const client = new Discord.Client();

require("dotenv").config();

const prefix = "!";

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
    if (command === "ping") message.reply("pong");
});

client.login(process.env.TOKEN);
