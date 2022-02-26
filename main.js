
//Require the discord.js modules
const { Client, Intents } = require("discord.js");
const { token } = require("./config.json");
//Creating a new client instance
const client = new Client({ intents: ["GUILDS", "GUILD_MESSAGES", "GUILD_VOICE_STATES"] });
const { MessageEmbed } = require("discord.js");

const ixchelEmbed = new MessageEmbed()
    .setColor("#FF9FEE")
    .setTitle("Darklord Ixchel")
    .setURL("https://www.db.yugioh-card.com/yugiohdb/card_search.action?ope=2&cid=12724&request_locale=en")
    .setDescription("Hath thou ever met a woman so beautious in thine pitiful life? If thou doth wish to even utter a mere yes, then thou art a blind bat.")
    .addField("\u200B", "\u200B")
    .setImage("https://storage.googleapis.com/ygoprodeck.com/pics_artgame/52840267.jpg");






//Our bot prefix
const prefix = "d!";







client.on("ready", () => {
    console.log("The Darklord hath descended.")
});

client.on("messageCreate", async message => {
    
    //If the message has no prefix, it simply just returns
    if (!message.content.startsWith(prefix) || message.author.bot) return;

    //The inputed command
    const args = message.content.slice(prefix.length).split(" ");
    let command = args.shift().toLowerCase();

    //The server will let us know what command it has read
    console.log("I have deemed the command to be: " + command);



    //First command: d!bother
    if (command === "bother") {
        message.channel.send("What doth thou want.");
    }

    //Send a picture of ixchel: d!waifu
    if (command === "waifu") {
        message.channel.send({ embeds: [ixchelEmbed]});
    }

    //Send a picture of darklord rebellion: d!fall
    if (command === "fall") {
        message.channel.send("You will regret that.")
        message.channel.send({files: ["Darklord/Pics/fallen.jpeg"]})
    }


        
    




});



client.login(token);