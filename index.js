const Discord = require('discord.js');
const { MessageEmbed } = require('discord.js');
const client = new Discord.Client();

var prefix = "k?"

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);

  let status = [
    "New!",
    "0.1!",
    "k?help",
    ]
    
    setInterval(function(){
    let stats = status[Math.floor(Math.random() * status.length)];
    client.user.setActivity(stats,[type = "WATCHING"]);
    }, 5000)

});

client.on('message', msg => {
    if (msg.content === "yo") {
        msg.react(":wink:")
    }

    if (msg.content === prefix + 'user-info') {
        const userEmbed = new MessageEmbed()
        userEmbed.setColor('da1616');
        userEmbed.setTitle('Infos De Ton Utilisateur');
        userEmbed.addField(name='Nom de ton utilisateur:',value=`${msg.author.username}`, inline=true);
        userEmbed.addField(name='ID de ton utilisateur:',value=`${msg.author.id}`, inline=true);
        
        msg.channel.send(userEmbed);
        }
        
        if (msg.content === prefix + 'server-info') {
        const infoEmbed = new MessageEmbed()
        infoEmbed.setColor('da1616');
        infoEmbed.setTitle('Infos Du Serveur');
        infoEmbed.addField(name='Nom du serveur:',value=`${msg.guild.name}`, inline=true);
        infoEmbed.addField(name='Nombre de membres:',value=`${msg.guild.memberCount}`, inline=true);
        
        msg.channel.send(infoEmbed);
        }

        if (msg.content.startsWith(prefix + "say")){
            if (msg.member.hasPermission("SEND_MESSAGES"));
            let botmessage = msg.content.split("").slice(5).join("")
            if (!botmessage[0]) return msg.channel.send("❌ Vous n'avez pas entre de texte ❌");
            msg.channel.send(botmessage);
            msg.delete();
          };

  if (msg.content === prefix + "help") {
  const helpEmbed = new MessageEmbed()
  helpEmbed.setColor('da1616');
  helpEmbed.setTitle('Commandes');
  helpEmbed.setDescription('Prefix: d!');
  helpEmbed.addField(name='user-info', value='Donne des infos sur ton compte', inline=true);
  helpEmbed.addField(name='server-info', value='Donne des infos sur le serveur auquel tu exécutes cette commande', inline=true);
  helpEmbed.setFooter('KingCraft Bot');

    msg.channel.send(helpEmbed);
  }
});

client.login('NTk5NjcxMTQ1NzA0MzI1MTYy.XuODRQ.UwaTHyfsRry4aJztx_icvTY121s');