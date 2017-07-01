// Import the flash cards constructor implementations
var basicCard = require('./basicCard.js');

//Basic Flashcard Tests

var mario = new basicCard.BasicCard("Who was the plumber of many trades who battles Bowser and loves mushrooms and invincibility stars", "Mario");
console.log(mario.front);
console.log(mario.back); 
console.log('-------------------------------------');

var luigi = new basicCard.BasicCard("Mario's brother who is very scared of many things. He is taller than Mario but is his younger brother.", "Luigi");
console.log(luigi.front);
console.log(luigi.back);
console.log('-------------------------------------');

var bowser = new basicCard.BasicCard("Mario's Arch nemisis. He's a big turtle-thing who breathes fire.", "Bowser");
console.log(bowser.front);
console.log(bowser.back);
console.log('-------------------------------------');

var princessPeach = new basicCard.BasicCard("A sweet, loving princess that rules over the mushroom kingdom. She is often kidnapped by the evil koopa king, Bowser.", "Princess Peach");
console.log(princessPeach.front);
console.log(princessPeach.back);
console.log('-------------------------------------');

var toad = new basicCard.BasicCard("A humanoid mushroom named that is both a single character and the collective name of the Mushroom People found in the Mushroom Kingdom.", "Toad");
console.log(toad.front);
console.log(toad.back);
console.log('-------------------------------------');

var yoshi = new basicCard.BasicCard("A green dinosaur named Yoshi that has a long tongue and tends to eat his enemys. He is Mario's steed.", "Yoshi");
console.log(yoshi.front);
console.log(yoshi.back);
console.log('-------------------------------------');


// Cloze-Deleted Flashcard Tests

mario = new basicCard.ClozeCard("Mario was a plumber of many trades who battles Bowser and loves mushrooms and invincibility stars", "Mario");
console.log(mario.full);
console.log(mario.cloze); 
console.log(mario.partial); 
console.log('-------------------------------------');

luigi = new basicCard.ClozeCard("Mario's brother, Luigi who is very scared of many things. He is taller than Mario but is his younger brother.", "Luigi");
console.log(luigi.full);
console.log(luigi.cloze); 
console.log(luigi.partial); 
console.log('-------------------------------------');

bowser = new basicCard.ClozeCard("Mario's Arch nemisis, Bowser. He's a big turtle-thing who breathes fire.", "Bowser");
console.log(bowser.full);
console.log(bowser.cloze); 
console.log(bowser.partial); 
console.log('-------------------------------------');

princessPeach = new basicCard.ClozeCard("A sweet, loving princess, Princess Peach that rules over the mushroom kingdom. She is often kidnapped by the evil koopa king, Bowser.", "Princess Peach");
console.log(princessPeach.full);
console.log(princessPeach.cloze); 
console.log(princessPeach.partial); 
console.log('-------------------------------------');

toad = new basicCard.ClozeCard("A humanoid mushroom named Toad that is both a single character and the collective name of the Mushroom People found in the Mushroom Kingdom.", "Toad");
console.log(toad.full);
console.log(toad.cloze); 
console.log(toad.partial); 
console.log('-------------------------------------');

yoshi = new basicCard.ClozeCard("A green dinosaur named Yoshi that has a long tongue and tends to eat his enemys. He is Mario's steed.", "Yoshi");
console.log(yoshi.full);
console.log(yoshi.cloze); 
console.log(yoshi.partial); 
console.log('-------------------------------------');

var failedCard = new basicCard.ClozeCard('This text will not include the clozed-deletion...', 'TEST');
console.log(failedCard.full);
console.log(failedCard.cloze); 
console.log(failedCard.partial); 
console.log('-------------------------------------');
