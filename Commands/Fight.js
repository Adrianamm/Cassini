exports.run = function(Client, message, args){
  
    var responses = [
        ' was hit on the head by ',
        ' was kicked by ',
        ' was slammed into a wall by ',
        ' was dropkicked by ',
        ' was DDoSed by ',
        ' was chokeslammed by ',
        ' was run over with a robot by ',
        ' had their IQ dropped 15 points by ',
        ' had a heavy object dropped on them by ',
        ' was beat up by ',
        ' was beat up by a ligerbot ',
        ' was dropped like 195 dropped 1058 by ',
        ' was destroyed like the ligerthot bot destroyed 6201s server by',
        ' wasnt picked for alliance selections by'

    ];
    var player1 = message.author;
    var player2 = message.mentions.users.array()[0];
    var hp1 = 1000;
    var hp2 = 1000;
    var damage = [100, 150, 200, 300, 50, 250];
    var turn1 = Math.random() > 0.5;
    var times = 0;
  
    if (player2.id == '463910760456912896') {
        message.channel.send("HUGE" + ' **DESTROYED** ' + player1.username + ' like they are Moist Pony!!' + '<:moistpony:451872102811828238>' +' *[0 HP] [1000 HP remaining]*');
    } 

    else{
      
     if (player2 !== null) {
        while (hp1 > 0 && hp2 > 0) {
            times++;
            var i = Math.floor(Math.random() * responses.length);
            var x = Math.floor(Math.random() * damage.length);
            if (turn1 === true) {
                hp2 -= damage[x];
              message.channel.send('**' + player2.username + '**' + responses[i] + '**' + player1.username + '**! *[-' + damage[x] + ' hp] [' + hp2 + ' HP remaining]*', times);
                turn1 = false;
            } else {
                hp1 -= damage[x];
              message.channel.send('**' + player1.username + '**' + responses[i] + '**' + player2.username + '**! *[-' + damage[x] + ' hp] [' + hp1 + ' HP remaining]*', times);
                turn1 = true;
            }
        }

        if (hp1 <= 0) {
            message.channel.send(player1 + ' lost! GG ' + player2 + '!', times);
        } else if (hp2 <= 0) {
            sendMessage(player2 + ' lost! GG ' + player1 + '!', times);
        }

        setTimeout(() => {
            message.channel.fetchMessages({ limit: 100 })
                .then(messages => {
                    var messagear = messages.array();
                    messagear = messagear.filter(message2 => message2.author.id === Client.user.id && message2.content.includes('HP remaining'));
                    messagear.length = 20;
                    messagear.map(message2 => message2.delete().catch(console.error));
                });
        }, (times * 1500) + 2000);
    } else {
        message.reply('please mention someone!');
    }


    function sendMessage(content, times2) {
        setTimeout(() => {
            message.channel.send(content);
        }, 1500 * times2);
    }
}
}
