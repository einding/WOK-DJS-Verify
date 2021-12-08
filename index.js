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
let filter = m => m.author.id === msg.author.id 
msg.channel.awaitMessages(filter, { 
max: 1, 
time: 30000, 
errors: ['time'] 
}) 
.then(message => {
message = message.first()
console.log(message.content)
message.channel.send('Searching...')

async function startApp () { 
const currentUser = await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_AE1377E13AF9C993AE685733B7EE6EFB632FE255240EDE89CA9178D4882678CDDB996C0ECB0913AE9218022C5E14C9CBADC2FC35F9B66A7D84C3C27C17E095B751B02A680D7066E1F45DC47659C844275ECC33C8C5F7EF9A06BC6149A088E4C4BD4743FD371F88967BB30FF15F88DE1EBC086DFCC29D3AFA7E676EAFC61F907C32A26B7F1B451A0F55770B380FD436ECC6E30A5517011F7CC6B31F459521A3E281C96810438E2C0ED25C73A7353B7E47F165AE200F2DA74E794F3BC80A2C63AC5BD207B5E0CC9FA0E1E7C45B615E33F7938394CC46BAA880B055961271226BBE0CB8202CA485EABBB77D3382E0197A5B525F8D87F308087969AD1998EC02A17459AD3C17610483086A80AE12846CA430B3FF46176A3D27DBDD75DA780A620CC88D9FB4D5F4A5942FA7FEB9AB87C5A05123AD13CDC06AF43979BBE82A2B25D0C1E5AEE08F7809107CBA4A601697810120DCB5E76A') 
console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
let UserId = await noblox.getIdFromUsername(message.content)
.catch(collected => { 
message.channel.send('User not found!'); 
return
});
let UserName = await noblox.getUsernameFromId(UserId)
const random1 = Math.floor(Math.random(5, 7) * 7)
console.log(random1)
let EndNumber = ''
for (let i = 1; i < random1; i++){
const random = Math.floor(Math.random() * 9)
EndNumber = Endnumber + random
}

let blurb = await noblox.getBlurb({userId: UserId})

message.channel.send('Hello! To verify yourself change... ', {files: ["https://media.discordapp.net/attachments/848206920179515412/918218469642747945/Screenshot_20211208-201204_Chrome.jpg"])
}
startApp()
})


} 
});

client.login('OTE4MTczMTQxODkxNzAyODA0.YbDZXw.8ib82WpwgPXP6uBjotLAcQ5xkT4')
