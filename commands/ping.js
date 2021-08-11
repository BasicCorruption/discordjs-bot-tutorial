module.exports = {
    name: "ping",
    description: "Tests the bot",
    execute(message, args) {
        message.reply("pong");
    }
}