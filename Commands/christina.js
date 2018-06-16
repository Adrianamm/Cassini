exports.run = function(Client,message,args){
    if (message.author.id != '351144445938368513'|| '147815677699293185'){
        message.channel.send("You are not Christina so you can't use this command")
       
    }else{
            message.channel.send("messsage");
            var Array_but = [
                'https://cdn.discordapp.com/attachments/351146680449761281/448299741269458964/unknown.png',
                'https://cdn.discordapp.com/attachments/351146680449761281/448299902586454017/unknown.png',
                'https://cdn.discordapp.com/attachments/351146680449761281/448300034857893899/unknown.png',
                'https://cdn.discordapp.com/attachments/351146680449761281/448300229524062208/unknown.png',
                'https://cdn.discordapp.com/attachments/351146680449761281/448300856417452032/unknown.png',
                'https://cdn.discordapp.com/attachments/351146680449761281/448300673923285012/unknown.png',
                'https://cdn.discordapp.com/attachments/351146680449761281/448301158344425473/unknown.png',
                'https://cdn.discordapp.com/attachments/355467293448208385/402276789248065536/Screenshot_20180114-204355.png',
                'https://cdn.discordapp.com/attachments/448301524456833034/448301537136082944/unknown.png',
                'https://cdn.discordapp.com/attachments/448301524456833034/448301751158833152/unknown.png',
                'https://cdn.discordapp.com/attachments/448301524456833034/448301932725927947/unknown.png',
                'https://cdn.discordapp.com/attachments/448301524456833034/448303918112440321/unknown.png'
              ];
              var Meme = Math.floor(Math.random()*Array_but.length);
              message.channel.send(`${Array_but[Meme]}`)
            
        }
    }
    
    
    
    
    