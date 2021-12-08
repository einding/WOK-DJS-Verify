const Discord = require('discord.js');
const noblox = require('noblox.js');
const Trelloo = require('trello');
const client = new Discord.Client();
const config = require('./config.json')

client.on('ready', () => {
client.user.setActivity(client.guilds.length + 'guild(s)!', { type: 'WATCHING' });
    console.log('Logged in...');
})

client.on('message', (msg) =>{
const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);

});

client.login('OTE4MTczMTQxODkxNzAyODA0.YbDZXw.8ib82WpwgPXP6uBjotLAcQ5xkT4')
