exports.run = function(Client, message, args){
    const MarkovChain = require('markovchain');
	const fs = require('fs');
	const botwords = new MarkovChain(fs.readFileSync('./words.txt', 'utf8'));
    //message.channel.send(`${botwords.start("yo").end(7).process()}`);
    console.log(botwords.start('yo').end(5).process())
}