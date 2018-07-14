exports.run = function(Client, message, args){
  const MarkovChain = require('markovchain');
	const fs = require('fs');
	const pickuplines = new MarkovChain(fs.readFileSync('./Words.txt', 'utf8'));
	message.channel.send(`${pickuplines.start("Hey").end("lol").process()}`);


}