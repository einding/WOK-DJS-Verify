module.exports = { 
name: 'settings', 
// any other details you might like, such as: 
description: 'See all the commands!', 
execute(client, message, args, prefix) { 
// the actual function 
message.channel.send('settings')
}, 
};
