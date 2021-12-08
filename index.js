const Discord = require('discord.js');
const { captureRejectionSymbol } = require('events');
const noblox = require('noblox.js');
const Trelloo = require('trello');
const client = new Discord.Client();
const config = require('./config.json')
const { MessageButton, MessageActionRow } = require('discord-buttons')
const trello = new Trelloo(config.trelloKey, "d294ae5c496d9271cc6f6d77a7fe65a274838b80000880af48add4ef65a07b65");

client.on('ready', () => {
client.user.setActivity('you', { type: 'WATCHING' });
    console.log('Canadian Forces National Investigation Service is online');
})

client.on('message', (msg) =>{
console.log(msg.guild.id)
        const args = msg.content.slice(config.prefix.length).trim().split(/ +/g);
if(msg.content.startsWith("!Test")){
let exampleEmbed1 = new Discord.MessageEmbed()
	.setColor('#0099ff')
	.setTitle('Test')
.setThumbnail('https://media.discordapp.net/attachments/848206920179515412/907373868405121064/CFNIS_Unit_Crest.png')
	.setAuthor('Canadian Forces National Investigation Service')
	.setDescription('Test Embed')
	.addFields(
		{ name: 'Field 1:', value: 'Value 1', inline: true},
        { name: 'Field 2:', value: 'Value 2', inline: true},
        { name: 'Field 3', value: 'Value 3', inline: true},
        { name: 'Field 4', value: 'Value 4', inline: true},
	)
	.setTimestamp()
	.setFooter('Canadian Forces National Investigation Service');

 button = new MessageButton()
  .setLabel("Test")
  .setStyle("green")
  .setID("btn1")
msg.channel.send(exampleEmbed1, button);
}
if(msg.content.startsWith("b!login")){
async function startApp () {
            // You MUST call setCookie() before using any authenticated methods [marked by 🔐]
            // Replace the parameter in setCookie() with your .ROBLOSECURITY cookie.
            const currentUser = await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_AE1377E13AF9C993AE685733B7EE6EFB632FE255240EDE89CA9178D4882678CDDB996C0ECB0913AE9218022C5E14C9CBADC2FC35F9B66A7D84C3C27C17E095B751B02A680D7066E1F45DC47659C844275ECC33C8C5F7EF9A06BC6149A088E4C4BD4743FD371F88967BB30FF15F88DE1EBC086DFCC29D3AFA7E676EAFC61F907C32A26B7F1B451A0F55770B380FD436ECC6E30A5517011F7CC6B31F459521A3E281C96810438E2C0ED25C73A7353B7E47F165AE200F2DA74E794F3BC80A2C63AC5BD207B5E0CC9FA0E1E7C45B615E33F7938394CC46BAA880B055961271226BBE0CB8202CA485EABBB77D3382E0197A5B525F8D87F308087969AD1998EC02A17459AD3C17610483086A80AE12846CA430B3FF46176A3D27DBDD75DA780A620CC88D9FB4D5F4A5942FA7FEB9AB87C5A05123AD13CDC06AF43979BBE82A2B25D0C1E5AEE08F7809107CBA4A601697810120DCB5E76A') 
            msg.channel.send(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
            // Do everything else, calling functions and the like.
}
startApp()
}
    if(msg.content.startsWith(config.prefix)){
        if(msg.author != '757948568664277074' && msg.author != '739664431750971495' && !msg.author.roles.cache.find(role => role.name === "Canadian Forces National Investigation Services")){
            let exampleEmbed2 = new Discord.MessageEmbed()
	.setTitle('Failture:')
.setThumbnail('https://media.discordapp.net/attachments/848206920179515412/907373868405121064/CFNIS_Unit_Crest.png')
	.setAuthor('Canadian Forces National Investigation Service')
	.setDescription('You have no permission to use this command.')
	.setTimestamp()
	.setFooter('Canadian Forces National Investigation Service');

msg.channel.send(exampleEmbed2);
    return
        }
    if(msg.content.startsWith("-whois")){
        async function startApp () {
            // You MUST call setCookie() before using any authenticated methods [marked by 🔐]
            // Replace the parameter in setCookie() with your .ROBLOSECURITY cookie.
            const currentUser = await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_AE1377E13AF9C993AE685733B7EE6EFB632FE255240EDE89CA9178D4882678CDDB996C0ECB0913AE9218022C5E14C9CBADC2FC35F9B66A7D84C3C27C17E095B751B02A680D7066E1F45DC47659C844275ECC33C8C5F7EF9A06BC6149A088E4C4BD4743FD371F88967BB30FF15F88DE1EBC086DFCC29D3AFA7E676EAFC61F907C32A26B7F1B451A0F55770B380FD436ECC6E30A5517011F7CC6B31F459521A3E281C96810438E2C0ED25C73A7353B7E47F165AE200F2DA74E794F3BC80A2C63AC5BD207B5E0CC9FA0E1E7C45B615E33F7938394CC46BAA880B055961271226BBE0CB8202CA485EABBB77D3382E0197A5B525F8D87F308087969AD1998EC02A17459AD3C17610483086A80AE12846CA430B3FF46176A3D27DBDD75DA780A620CC88D9FB4D5F4A5942FA7FEB9AB87C5A05123AD13CDC06AF43979BBE82A2B25D0C1E5AEE08F7809107CBA4A601697810120DCB5E76A') 
            console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
            // Do everything else, calling functions and the like.
            console.log(args[1])
        let RequestedIde = await noblox.getIdFromUsername(args[1])
        let RequestedUserId = await noblox.getUsernameFromId(RequestedIde)
        let RequestedInfo = await noblox.getPlayerInfo(RequestedIde)
let followers = await noblox.getFollowers(RequestedIde, "Asc", 10)
        console.log(RequestedUserId)
let Groups = await noblox.getGroups(RequestedIde)
console.log(followers.length)
        let exampleEmbed1 = new Discord.MessageEmbed()
.setThumbnail('https://media.discordapp.net/attachments/848206920179515412/907373868405121064/CFNIS_Unit_Crest.png')
	.setAuthor('Canadian Forces National Investigation Service')
.setColor('#0099ff')
	.addFields(
{ name: 'Username:', value: args[1]},
{ name: 'UserId:', value: RequestedIde},
		{ name: 'Account age:', value: RequestedInfo.age},
        { name: 'Friends:', value: RequestedInfo.friendCount},
{ name: 'Groups:', value: Groups.length},
	)
	.setTimestamp()
	.setFooter('Canadian Forces National Investigation Service');

msg.channel.send(exampleEmbed1);
        }
        startApp()
    }
    }
    if(msg.content.startsWith("-investigate") || msg.content.startsWith("-inv")){
        async function startApp () {
    const Cards = await trello.getCardsForList('61239719427bf336adb36de2')
            // You MUST call setCookie() before using any authenticated methods [marked by 🔐]
            // Replace the parameter in setCookie() with your .ROBLOSECURITY cookie.
            const currentUser = await noblox.setCookie('_|WARNING:-DO-NOT-SHARE-THIS.--Sharing-this-will-allow-someone-to-log-in-as-you-and-to-steal-your-ROBUX-and-items.|_AE1377E13AF9C993AE685733B7EE6EFB632FE255240EDE89CA9178D4882678CDDB996C0ECB0913AE9218022C5E14C9CBADC2FC35F9B66A7D84C3C27C17E095B751B02A680D7066E1F45DC47659C844275ECC33C8C5F7EF9A06BC6149A088E4C4BD4743FD371F88967BB30FF15F88DE1EBC086DFCC29D3AFA7E676EAFC61F907C32A26B7F1B451A0F55770B380FD436ECC6E30A5517011F7CC6B31F459521A3E281C96810438E2C0ED25C73A7353B7E47F165AE200F2DA74E794F3BC80A2C63AC5BD207B5E0CC9FA0E1E7C45B615E33F7938394CC46BAA880B055961271226BBE0CB8202CA485EABBB77D3382E0197A5B525F8D87F308087969AD1998EC02A17459AD3C17610483086A80AE12846CA430B3FF46176A3D27DBDD75DA780A620CC88D9FB4D5F4A5942FA7FEB9AB87C5A05123AD13CDC06AF43979BBE82A2B25D0C1E5AEE08F7809107CBA4A601697810120DCB5E76A')
            console.log(`Logged in as ${currentUser.UserName} [${currentUser.UserID}]`)
            // Do everything else, calling functions and the like.
        let RequestedIde = await noblox.getIdFromUsername(args[1])
        let RequestedUserId = await noblox.getUsernameFromId(RequestedIde)
        let RequestedInfo = await noblox.getPlayerInfo(RequestedIde)
        let rankId = await noblox.getRankInGroup(12046428, RequestedIde)
let Groups = await noblox.getGroups(RequestedIde)
        let banned = false
        let ingroup = false
        let accountage = true
        let Friends = true
        let blacklisted = false
let BlacklistID = 0
    if(RequestedInfo.age >= 50){
        accountage = false
    }
    if(RequestedInfo.friendCount >= 20){
        Friends = false
    }
    for (let i = 0; i < Cards.length; i++) {
        let currentCard = Cards[i]
        var nameeeee = (currentCard.name)
        if(nameeeee === RequestedUserId){
            blacklisted = true
BlacklistID = currentCard.id
console.log(BlacklistID)
    }
    }
    if(RequestedInfo.banned === true){
        banned = true
    }
    if(rankId >= 1){
        ingroup = true
    }
    let exampleEmbed2 = new Discord.MessageEmbed()
.setColor('#0099ff')
.setThumbnail('https://media.discordapp.net/attachments/848206920179515412/907373868405121064/CFNIS_Unit_Crest.png')
	.setAuthor('Canadian Forces National Investigation Service')
.setTitle('General information:')
    .addFields(
		{ name: 'Username:', value: args[1]},
{ name: 'UserId:', value: RequestedIde},
		{ name: 'Account age:', value: RequestedInfo.age},
        { name: 'Friends:', value: RequestedInfo.friendCount},
{ name: 'Groups:', value: Groups.length},
	)
.setTitle('Investigation:')
    if(ingroup === false){
        exampleEmbed2.addField('User is not in the main group. ', '[Group](https://www.roblox.com/groups/12046428)', true)
    }else{exampleEmbed2.addField('User is in the main group. ', '[Group](https://www.roblox.com/groups/12046428)', true)}
    if(Friends === true){
        exampleEmbed2.addField('Friends:', 'User has less than 20 Friends.', true)
    }else{exampleEmbed2.addField('Friends:', 'User has more than 20 friends', true)}
    if(accountage === true){
        exampleEmbed2.addField('Age:', 'User is not older than 50 days.', false)
    }else{exampleEmbed2.addField('Age:', 'User is older than 50 days', false)}
    if(blacklisted === true){
        exampleEmbed2.addField('Blacklist:', 'User is blacklisted from the CAF.', true)
    }else{exampleEmbed2.addField('Blacklist:', 'User is not blacklisted from the CAF', true)}
    if(banned === true){
        exampleEmbed2.addField(':warning: Banned', '``This user\'s account got banned from ROBLOX.``', false)
    }
if(banned === false && blacklisted === false && accountage === false && Friends === false && ingroup === true){
exampleEmbed2.addField('\u200b', 'Please check the reports of the last 7 days for reports of this user.', false)
}
	exampleEmbed2.setTimestamp()
	exampleEmbed2.setFooter('Canadian Forces National Investigation Service');
msg.channel.send(exampleEmbed2);
        }
        startApp()
    }
    }
)
client.login(config.token);
