exports.run = function(Client, message, args) {

  var Array = [
  'this',
  'that',
  'the',
  'than',
  'then',
  'which',
  'when',
  'with',
  'a',
  'and',
  'Dean Kamen',
  'Woodie Flowers',
  'Recycle Rush',
  'Strong hold',
  'Steamworks',
  'Power Up',
  'Deep Space',
  'Power cube',
  'water game',
  'memes',
  'oh no',
  'no',
  'help',
  'help please',
  'rip',
  'Dozer',
  'FRC',
  'FTC',
  'FLL',
  'Yes',
  'no'
  
  ];
 
  var a = Math.floor(Math.random()*Array.length);
  var b = Math.floor(Math.random()*Array.length);
  var c = Math.floor(Math.random()*Array.length);
  var d = Math.floor(Math.random()*Array.length);
  var e = Math.floor(Math.random()*Array.length);

if (a == b && a == c && a == a && a == d && a == e){
  var a = Math.floor(Math.random()*Array.length);
}
if ( b == a && b == c && b == b && b == d && b == e){
  var b = Math.floor(Math.random()*Array.length);
}
if ( b == a || b == c || b == b || b == d || b == e){
  var b = Math.floor(Math.random()*Array.length);
}
if( c == a && c == b && c== c && c == d && c == e ){
  var c = Math.floor(Math.random()*Array.length);
}
if (d == a && d == b && d == c && d == d && d == e){
  var d = Math.floor(Math.random()*Array.length);
}
if (e == a && e == b && e == c && e == d && e == e){
  var e = Math.floor(Math.random()*Array.length);
}
if(e == 'that' && e == 'not'&& e == 'this' && e == 'the' && e == 'and' && e == 'a'){
  var e = Math.floor(Math.random()*Array.length);
}
 else{

    message.channel.send(`${Array[a]}` + ` ${Array[b]}` + ` ${Array[c]}` + ` ${Array[d]}` + ` ${Array[e]}`);
    //console.log(`${Array[a]}` + ` ${Array[b]}` + ` ${Array[c]}` + ` ${Array[d]}` + ` ${Array[e]}`);
 }
 

 

//}

 
}