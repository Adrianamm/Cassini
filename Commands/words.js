exports.run = function(Client, message, args) {
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