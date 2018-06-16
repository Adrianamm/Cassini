const Discord = require('discord.js');
const Client = new Discord.Client();
const settings = require('./settings.json');
const fs = require("fs");


//const schedule = require('node-schedule');
Client.on("ready", () => {
   Client.user.setGame("*I am broken")
    Client.user.setGame("Exploring Space")
     console.log("I am ready!");
   });


var prefix = "*";

//ping the  bot 
Client.on("message", message => {
  //if(!message.content.startsWith(prefix)) return; 
  let args = message.content.split(' ').slice(1);
  var argresult = args.join(' ');
  if(message.author.bot) return; 

  if(message.content.startsWith(prefix + "ping")) {
    message.channel.send('pong beep boop');
  //message.channel.send('Pong!' \ '${Date.now() - message.createdTimestamp' ms\'');


  if (message.content.startsWith("owo" || "Owo" || "owO" || "OwO" || "OWO" || "0W0" || "0w0")) {
    message.channel.send("What's this?");
  }
}  else

if(message.content.startsWith(prefix + "setgame")){
  let modRole = message.guild.roles.find("name", "Owner")
  if(message.member.roles.has(modRole.id)){
    Client.user.setGame(argresult);
  }else {
     message.channel.send("You can't do this");
  }
}

if (message.content.startsWith("owo" || "Owo" || "owO" || "OwO" || "OWO" || "0W0" || "0w0")) {
  message.channel.send("What's this?");
}


/*
if (message.content.startsWith(prefix + "say")){
  message.channel.send(args.join(" "));
 message.delete(); 
}
*/

if(message.author.bot) return; 
if(!message.content.startsWith(prefix)) return;
  
  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);
  


 if (message.content.startsWith(prefix + 'Dog') || message.content.startsWith(prefix + 'dog')) {
    message.channel.send("", {files: ["https://68.media.tumblr.com/0a51a580a4da096df6a705bb8f49c8ec/tumblr_ny67j0KPTf1txvwmco1_250.png"]});
  }


  //if(message.content.startsWith(prefix + "github")){
   // message.channel.send("Check out my github here: https://github.com/Adrianamm/Cassini")
  //}

  if(message.content.startsWith(prefix + "FakeFacts")){
    var Facts = [
      'If every horse was an Oxgyen atom, we would all die',
      'Donkey backwards spells Donkey',
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
      'tiepods are good for you'
    ]
    var Fact = Math.floor(Math.random()*Facts.length);
    message.channel.send(`${Facts[Fact]}`)
  }


  if(message.content.startsWith(prefix + "MemeSong") || message.content.startsWith(prefix + "memesong")){
    var Array = [
      'https://youtu.be/RxbqKU4j1fU',
      'https://youtu.be/Je_8A5hurSY',
      'https://youtu.be/zPqYVBFtBkw',
      'https://youtu.be/vcaPiiFZu2o',
      'https://youtu.be/u_ZtiOWdVHU',
      'https://youtu.be/lYbGEfoOUbs',
      'https://youtu.be/3H2hWgVbblw',
      'https://youtu.be/nDN7M0J3HXc',
      'https://youtu.be/ZZ5LpwO-An4',
      'https://youtu.be/Byt2D_8acz0'
    ];
    var Meme = Math.floor(Math.random()*Array.length);
    message.channel.send(`${Array[Meme]}`)
  }

  if(message.content.startsWith(prefix + "words")){
    var Array = [
      'this',
      'Dean Kamen',
      'the',
      'power',
      'cube',
      'water',
      'not',
      'a',
      'gamepiece',
      'help',
      'this isnt a robot',
      'Woodie Flowers',
      'Recycle Rush',
      'no',
      'and',
      'dozer',
      'ROBOT',
      'yes',
      'Owo'
    
    ];
    var a = Math.floor(Math.random()*Array.length);
    var b = Math.floor(Math.random()*Array.length);
    var c = Math.floor(Math.random()*Array.length);
    var d = Math.floor(Math.random()*Array.length);
    var e = Math.floor(Math.random()*Array.length);
  if (a == b || a == c && a == a || a == d || a == e){
    var a = Math.floor(Math.random()*Array.length);
  }
  if ( b == a || b == c || b == b || b == d || b == e){
    var b = Math.floor(Math.random()*Array.length);
  }
  if( c == a || c == b || c== c || c == d || c == e ){
    var c = Math.floor(Math.random()*Array.length);
  }
  if (d == a || d == b || d == c || d == d || d == e){
    var d = Math.floor(Math.random()*Array.length);
  }
  if (e == a || e == b || e == c || e == d || e == e){
    var e = Math.floor(Math.random()*Array.length);
  }
  if(e == 'that' || e == 'not'|| e == 'this' || e == 'the' || e == 'and'){
    var e = Math.floor(Math.random()*Array.length);
  }
   else{
  
    message.channel.send(`${Array[a]}` + ` ${Array[b]}` + ` ${Array[c]}` + ` ${Array[d]}` + ` ${Array[e]}`);
  
  }
 
   
  }

  if (message.content.startsWith(prefix + 'hug')){
    if (!message.mentions.users.array()[0]) {
      message.channel.send(`*hugs* ***${message.author.username}***`)
    } else {
      let huggee = message.mentions.users.array()[0];
      message.channel.send(`*hugs* ***${huggee.username}***`);
  };
  }
  

  if(message.content.startsWith(prefix + 'love')){
    var Array = [
      "I appreciate you.",
      "you are the most perfect you there is.",
      "you are enough.",
      "you're strong.",
      "you deserve good things.",
      "you should be proud of yourself.",
      "you are good enough.",
      "you're making a difference.",
      "colors seem brighter when you're around.",
      "you're one of a kind.",
      "you're inspiring.",
      "the world is better because you're in it.",
      "you're awesome.",
      "you're totally rad.",
      "it's going to be alright.",
      "you're doing great.",
      "you are loved.",
      "it's going to be okay.",
      "no matter how far down you are, it's going to be just fine.",
      "I know life can be hard, but you can get through it.",
      "I have total faith in you.",
      "there are people who care about you.",
      "you're not alone.",
      "you deserve the world.",
      "you deserve love.",
      "you matter even if you are at your lowest",
      "you are irreplacable",
      "you mean the world to someone. Don't take that away from them.",
      "you're an amazing person."
    ];
    if (!message.mentions.users.array()[0]) {
       message.reply(`${list[Math.floor(Math.random()*list.length)]}`);
  }
}



      
    if(command === "help" || command === "Help")
    message.channel.send({embed: {
      color: 3447003,
      description: "What bot do",
      author: {
        name: Client.user.username,
        icon_url: Client.user.avatarURL
      },
      fields: [
      {
        name: "*Dog",
        value: "Give you the UnderTale Dog because why not"
      },
      {
        name:"*MemeSong",
        value:"Gives you a good meme song",
      },
      {
        name:"*FakeFacts",
        value:"Gives you a fake fact",
        name:"*words",
        vaule:"gives you random words",
      }, 
      {
        name:"*fight or *Fight",
        value:"Fights"
      },
  
    ],
    timestamp: new Date(),
    footer: {
      icon_url: Client.user.avatarURL,
      text: Client.user.avatarURL
    }
    }});



  


//_________________________________________________________________

    }//not delete 
  );//not deleting

 



Client.login(settings.token);
