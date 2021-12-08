const Discord = require('discord.js');
const noblox = require('noblox.js');
const Trelloo = require('trello');
const client = new Discord.Client();
const config = require('./config.json')

client.on('ready', () => {
client.user.setActivity(client.guilds.length + ' guild(s)!', { type: 'WATCHING' });
    console.log('Logged in...');
})

client.on('message', async (msg) =>{
const args = msg.content.slice(1).trim().split(/ +/g);
const command = args[0].toLowerCase()
if(command === 'verify'){
msg.channel.send('Welcome! To log into your ROBLOX profile please enter your ROBLOX name!')
let filter = m => m.author.id === message.author.id 
msg.channel.awaitMessages(filter, { 
max: 1, 
time: 30000, 
errors: ['time'] 
}) 
.then(msg => {
msg = msg.first()
console.log(msg.content)
if(msg.content === 'devAkaan'){
msg.channel.send('Got you!')
}
})


} 
});

client.login('OTE4MTczMTQxODkxNzAyODA0.YbDZXw.8ib82WpwgPXP6uBjotLAcQ5xkT4')
