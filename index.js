const Discord = require ('discord.js');
const client = new Discord.Client();
const { prefix, token } = require ('./config.json');
const fs = require ('fs');
client.commands = new Discord.Collection();

// fs.readdir("./commands/", (err, files) =>{
//     if (err) console.log(err);
//     let jsfile = files.filter(f => f.split(".").pop() === "js")
//     if(jsfile.length <= 0){
//         console.log("Couldn't find commands.")
//     }
// jsfile.forEach((f, i) =>{
//     let props = require(`./commands/${f}`);
//     console.log(`${f} loaded!`);
//     client.commands.set(props.help.name, props);
// })
// })

client.on('ready', () => {
    console.log('Bot is online!');
    client.user.setActivity(`${prefix} commands`, {type: 'PLAYING'}).catch(console.error);
});

client.on('message', message => {
    if(message.content === (`${prefix}`)){
        message.channel.send('Incorrect usage! Please use ``!s commands``')
    }
});

client.on('message', message =>{
    if(message.content.startsWith(`${prefix} bitcoin`)){
        message.delete(100)
        message.author.send("PM @Shelly1011 for more information on his PayPal to Bitcoin exchange!")
    }
});

client.on('message', message =>{
    if(message.content.startsWith(`${prefix} middleman`)){
        message.delete(100)
        message.author.send("A middleman has been notified, please be patient.")
        user = message.author.id
        client.channels.get("589856615956480001").send("<@" + `${user}>` + " needs a middleman!")
        }
    });

client.on('message', message =>{
if(message.content.startsWith(`${prefix} store`)){
    message.delete(100)
        message.channel.send("https://shoppy.gg/@TeeWizz")
    }
});

client.on('message', message =>{
    if(message.content.startsWith(`${prefix} commands`)){
        message.channel.send({embed:{
            "title": "Commands",
            "description": "Below is a list of all the current commands. ```\n!s store\n!s bitcoin\n!s prices\n!s middleman```",
            "color": 0x800080,
            "footer": {
              "text": "- Shelly & Escrow"
            },
            "thumbnail": {
              "url": "https://cdn.discordapp.com/attachments/588198314105765907/588199946830872576/lol.png"
            }
        }})
    }
})

client.on('message', message =>{
    if(message.content.startsWith(`${prefix} prices`)){
        message.channel.send({embed:{
            "title": "Prices",
            "description": "Below is all of our prices. ```\n\nSpotify Premium: €0.07 each (25 minimum) Bulk: €0.01 each (500 minimum)\n\nUpgrade Free to Premium: €1.50 each (1 minimum)\n\nCountry Specific Premium: €0.13 each (25 minimum) Bulk: €0.08 each (200 minimum)\n\nFamily Owner: €0.13 each (25 minimum) Bulk: €0.08 each (200 minimum)\n\nFamily Owner + Country Specific: €0.20 each (15 minimum) Bulk: N/A\n\nPremium + HULU: €0.09 each (25 minimum) Bulk: N/A\n\nNon Premium: €1 for 1000 (5000 minimum) Bulk: N/A\n\nNetflix: €2 (1 minimum) Bulk: N/A\n\nNordVPN: €1 for 1 year (1 minimum) Bulk: N/A```",
            "color": 0x00ffff,
            "footer": {
              "text": "- Shelly & Escrow"
            },
            "thumbnail": {
              "url": "https://cdn.discordapp.com/attachments/588198314105765907/588199946830872576/lol.png"
            }
        }})
    }
})


client.login(token);