exports.run = function(Client, message, args){
    // message.channel.send("", {files: ["https://68.media.tumblr.com/0a51a580a4da096df6a705bb8f49c8ec/tumblr_ny67j0KPTf1txvwmco1_250.png"]});
    var Array_but = [
     'https://media.giphy.com/media/ZjUjG4xgRiSOc/giphy.gif',
     'https://media.giphy.com/media/CcfXT7JaZ6VJm/giphy.gif',
     'https://media.giphy.com/media/H2ZHF0zIrCJLG/giphy.gif',
     'https://media.giphy.com/media/RuP38JSfj14je/giphy.gif',
     'https://media.giphy.com/media/KLbq09EoE1uDu/giphy.gif',
     'https://media.giphy.com/media/3oKIPd8EtLUiCYHbry/giphy.gif',
     'https://media.giphy.com/media/5EJHDSPpFhbG0/giphy.gif',
     'https://media.giphy.com/media/gB4KWtd3uSsJq/giphy.gif',
     'https://media.giphy.com/media/ybEXZcycd789q/giphy.gif',
     'https://media.giphy.com/media/xT77XKxcPqxIZqUrwk/giphy.gif',
     'https://media.giphy.com/media/kAzybbAzjrTI4/giphy.gif',
     'https://media.giphy.com/media/3ohc17IuNgUpALSaIM/giphy.gif',
     'https://media.giphy.com/media/rcw4NNFE6JioM/giphy.gif',
     'https://media.giphy.com/media/suFlthzWfwnIc/giphy.gif',
     'https://media.giphy.com/media/l41lPaVXzvGGMuAQ8/giphy.gif',
     'https://media.giphy.com/media/Snil1KvtjhnIQ/giphy.gif',
     'https://media.giphy.com/media/HXObXq6BmORmE/giphy.gif',
     'https://media.giphy.com/media/gdUxfKtxSxqtq/giphy.gif',
     'https://media.giphy.com/media/6I4JVTfN8Ugg/giphy.gif',
     'https://media.giphy.com/media/iPp0KLHafTB0Q/giphy.gif',
     'https://media.giphy.com/media/AUrZ8OlLE0pnG/giphy.gif',
     'https://media.giphy.com/media/XkJlbLt9fbDBS/giphy.gif',
     'https://media.giphy.com/media/SMZ6QqHuTWxZm/giphy.gif',
     'https://media.giphy.com/media/nojDCSoja1lio/giphy.gif',
     'https://media.giphy.com/media/YeXeWleFbKE12/giphy.gif'

     
   ];
   var Meme = Math.floor(Math.random()*Array_but.length);
   message.channel.send(`${Array_but[Meme]}`)
 };
 
 
 
 