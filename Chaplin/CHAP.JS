import { token } from 'config.js';
const Discord = require("discord.js");
const client = new Discord.Client(); 

client.login(token);
client.on("message", (message)){ // EventEmitter
let channel = message.guild.channels.cache.get(channelid); //need to find still
	if(message.content == "!ping"){ // Check if message is "!ping"
			message.channel.send("Pinging ...") // Placeholder for pinging ... 
			.then((msg) => { // Resolve promise
				msg.edit("Ping: " + (Date.now() - msg.createdTimestamp)) // Edits message with current timestamp minus timestamp of message
			});
	}
    if(message.member.roles.has("chaplin")){ // Check if member has role
	    message.member.ban("Chappiediapper#4818"); // Send "Hi" if they do
    }
    async function userMessages(guildID, userID){
    client.guilds.cache.get(guildID).channels.cache.forEach(ch => {
        if (ch.type === 'text'){
            ch.messages.fetch({
                limit: 100
            }).then(messages => {
                const msgs = messages.filter(m => m.author.id === userID)
                msgs.forEach(m => {
                    console.log(`${m.content} - ${m.channel.name}`)
                    const Chapchannel = <client>.channels.cache.get('<id>');
                    Chapchannel.send('<content>');
                })
            })
        } else {
            return;
        }
    })
}
}