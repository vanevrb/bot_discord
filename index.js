const Discord = require("discord.js");
const config = require("./config.json");
const userManager = require("discord.js");

const client = new Discord.Client();
// const user=new Discord.ClientUser();
const prefix = "!";
client.on("message", function (message) {
    const guildTag = message.channel.type === 'text' ? `[${message.guild.name}]` : '[DM]';
    const guildMember = message.member.type === 'text' ? `[${message.guild.user}]` : `[${message.guild.user}]`;
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    const commandBody = message.content.slice(prefix.length);
    const args = commandBody.split(' ');
    const command = args.shift().toLowerCase();
    if (command === "dame") {
        const timeTaken = Date.now() - message.createdTimestamp;
        message.reply(`!dame es un comando de pruebas de latencia ${timeTaken}ms que creo lachica001.`);
    } else if (command === "sum") {
        const numArgs = args.map(x => parseFloat(x));
        const sum = numArgs.reduce((counter, x) => counter += x);
        message.reply(`el resultado de la suma es ${sum}!`);
        
    }
    // else if (command.content === "help") {
    //     const timeTaken = Date.now() - message.createdTimestamp;
    //     message.reply(`a continuacion los comandos creados son: bienvenida`);                
    // }     
    else if (command === "a") {
        const timeTaken = Date.now() - message.createdTimestamp;
        const username = message.name;
        // const User  = new Discord.User(client, 'help');

        // message.reply(`help`+User);                
        message.reply(`bienvenid@ ` +message.member.username+` a ${guildMember} `);
    }
    else if (command === "emancipate") {
        const timeTaken = Date.now() - message.createdTimestamp;
        const username = message.name;
            
        message.reply(`Ya es hora de buscar un rumbo en tu vida`);
    }
    else if (command === "bienvenida") {
        const timeTaken = Date.now() - message.createdTimestamp;
        const username = message.name;
            
        message.reply(`bienvenid@ ` +message.author.username+` a ${guildTag} `);
    }
    else if (command === "adios") {
        const timeTaken = Date.now() - message.createdTimestamp;
        const username = message.name;
            
        message.reply(`chao gracias por venir ` +message.author.username);
    }
    // var user = userManager.GetCurrentUser();
// message.reply(`Connected to user {0}`, user.Id);
    //  else if (command === 'hola') {
    //     // We can create embeds using the MessageEmbed constructor
    //     // Read more about all that you can do with the constructor
    //     // over at https://discord.js.org/#/docs/main/master/class/MessageEmbed
    //     const embed = new MessageEmbed()
    //         // Set the title of the field
    //         .setTitle('Porque me mencionas?')
    //         // Set the color of the embed
    //         .setColor(0xff0000)
    //         // Set the main content of the embed
    //         .setDescription('att:lachica001');
    //     // Send the embed to the same channel as the message
    //     message.channel.send(embed);
    // }
});




client.login(config.BOT_TOKEN);