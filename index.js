const Discord = require('discord.js-selfbot-v13');
const client = new Discord.Client({
  readyStatus: false,
  checkUpdate: false
});

const keepAlive = require('./server.js');
keepAlive();

function formatTime() { //Credits to himika#0001 and never#0001
  const date = new Date();
  const options = {
    timeZone: 'America/New_York', //https://www.zeitverschiebung.net/en/ and find your city and enter here
    hour12: true,
    hour: 'numeric',
    minute: 'numeric'
  };
  return new Intl.DateTimeFormat('en-US', options).format(date);
}

client.on('ready', async () => {
  console.clear();
  console.log(`${client.user.tag} - rich presence started!`);

  const r = new Discord.RichPresence()
    .setApplicationId('1201205173083705475')
    .setType('STREAMING')
    .setURL('https://bit.ly/RK-Community') //Must be a youtube video link 
    .setState('No RisK No Fun')
    .setName('No RisK No Fun')
    .setDetails(`No RisK No Fun`)
    .setStartTimestamp(Date.now())
 .setAssetsLargeImage('https://media.discordapp.net/attachments/918979504620306502/1246810250724642867/discord_fake_avatar_decorations_1714175804418.gif?ex=665dbe08&is=665c6c88&hm=b56bf0be4c12d5ac8847c6fc56b0838d2252d1d13083cd18e41de93e91738f0e&=') //You can put links in tenor or discord and etc.
    .setAssetsLargeText('No RisK No Fun') //Text when you hover the Large image
    .setAssetsSmallImage('https://cdn.discordapp.com/emojis/1170476519135645766.gif?size=96&quality=lossless') //You can put links in tenor or discord and etc.
    .setAssetsSmallText('No RisK No Fun') //Text when you hover the Small image


  client.user.setActivity(r);
  client.user.setPresence({ status: "idle" }); //dnd, online, idle, offline

  let prevTime = null;
  setInterval(() => {
    const newTime = formatTime();
    if (newTime !== prevTime) {
      const newDetails = `RK-Community`;
      r.setDetails(newDetails);
      client.user.setActivity(r);
      prevTime = newTime;
    }
  }, 1000); // Update every second
});

const mySecret = process.env['TOKEN'];
client.login(mySecret);
