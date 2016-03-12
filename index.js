var poweredBy = [
  "Classic ASP",
  "PHP 6",
  "node 1.0",
  "WEBrick/1.3.1",
  ".... . .-.. .--.",
  "0100 0010",
  "really fast hamsters"
];

module.exports = function(req, res, next){
  var random = Math.floor(Math.random()*poweredBy.length);
  res.set('X-Powered-By', poweredBy[random]);
  next();
}
