exports.run = function(Client, message, args) {
	
		var Facts = [
		  'If every horse was an Oxgyen atom, we would all die',
		  'Donkey backwards spells Donkey',
		  'Adriana is a good mentor',
		  'Eggs bounce when you throw them',
		  'Glass is unbreakable',
		  'NASA has it own death star built into it',
		  'NASA stands for Not A Sassy Avocado',
		  'Carrots are explosive when put into a microwave for 20 seconds',
		  'Hummingbirds are fake',
		  '2+2 is 9',
		  'Staring at the sun is good for you',
		  'Sunblock does not work',
		  'The moon is made out of cheese',
		  'tidepods are good for you',
		  'Once a year all of Wikipedia is printed off and placed in a vault in Norway.',
		  'North Dakota is actually west of South Dakota, Russians have put chemicals in the water to make you think it’s actually North',
		  'if your phone is about to die just connect 2 batteries together'
		]
		var Fact = Math.floor(Math.random()*Facts.length);
		message.channel.send(`${Facts[Fact]}`)
	  
};