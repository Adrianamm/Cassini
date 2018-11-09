const Discord = require('discord.js');
const client = new Discord.Client();
const logger = require('heroku-logger');
//const settings = require('./settings.json');
require('dotenv').config()
require('./util/eventLoader')(client);

/*lmao what the fuck is this. commenting out because I don't know what this does */
const log = message => {
  //console.log(`[${moment().format('YYYY-MM-DD HH:mm:ss')}] ${message}`);
};


var reload = (message, cmd) => {
	delete require.cache[require.resolve('./commands/' + cmd)];
	try {
		let cmdFile = require('./commands/' + cmd);
	} catch (err) {
		message.channel.sendMessage(`Problem loading ${cmd}: ${err}`).then(
			response => response.delete(1000).catch(error => console.log(error.stack))
		).catch(error => console.log(error.stack));
	}
	message.channel.sendMessage(`${cmd} reload was a success!`).then(
		response => response.delete(1000).catch(error => console.log(error.stack))
	).catch(error => console.log(error.stack));
};
exports.reload = reload;

client.on("ready", () => {
  client.user.setGame(`prefix: * `);
});

client.login(process.env.token);

  



client.login(process.env.token);

/*

 ________
< hello! >
 --------
\                             .       .
 \                           / `.   .' " 
  \                  .---.  <    > <    >  .---.
   \                 |    \  \ - ~ ~ - /  /    |
         _____          ..-~             ~-..-~
        |     |   \~~~\.'                    `./~~~/
       ---------   \__/                        \__/
      .'  O    \     /               /       \  " 
     (_____,    `._.'               |         }  \/~~~/
      `----.          /       }     |        /    \__/
            `-.      |       /      |       /      `. ,~~|
                ~-.__|      /_ - ~ ^|      /- _      `..-'   
                     |     /        |     /     ~-.     `-. _  _  _
                     |_____|        |_____|         ~ - . _ _ _ _ _>


*/