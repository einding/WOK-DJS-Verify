module.exports = { 
name: 'settings', 
// any other details you might like, such as: 
description: 'See all the commands!', 
execute (client, msg, args) { 
msg.channel.send('**Settings** \nPlease select one of the options below and send it in this chat. \n**NICKNAME**\n**LINKS**')
let filter = m => m.author.id === msg.author.id
msg.channel.awaitMessages(filter, { 
max: 1, 
time: 300000, 
errors: ['time']
}) 
.then(messagee => {
messagee = messagee.first()
if(messagee.content.toLowerCase() === 'nickname'){
msg.channel.send('Alright! Please enter your nickname options. \nAdd ``RBLXN`` for the Roblox-Name, ``RBLXI`` for the Roblox-Id, ``DT`` for the Discord-Tag or just write something beautiful!')
let filter = m => m.author.id === msg.author.id
msg.channel.awaitMessages(filter, { 
max: 1, 
time: 300000, 
errors: ['time']
}) 
.then(message => {
message = message.first()
const args = message.content.trim().split(/ +/g);
let SettingsC = ''
for (let i = 0; i < args.length; i++){
if(i !== 0){
SettingsC = SettingsC + '%' + args[i]
}else{
SettingsC = SettingsC + args[i]
}
}
console.log(SettingsC)
async function settingss () {
const Datastore = client.guilds.cache.find(g => g.id === '918046883459522560')
console.log(Datastore.name)
const Channel = Datastore.channels.cache.find(c => c.id === '918385244695064647')
console.log(Channel.name)
let mesage = ''
for (let i = 0; i < Channel.messages.length; i++){
console.log(i)
const args = Channel.messages[i].content.split('$');
if(args[0] === msg.guild.id){
mesage = args[0]
}
}
console.log(mesage)
let aftersettings = args[1] + '$' + SettingsC + '$' + args[3]
await Channel.messages.fetch(mesage).edit(aftersettings)
}
settingss()
})
}
})
}, 
};
