var R = require('ramda')

// Text: Table of Contents from Don Quixote

// Exercise 1
// ==========
// Refactor to remove all args by partially applying the function.

var text = `First Part of the Ingenious Hidalgo Don Quixote de La Mancha. First Chapter. Which deals with the lifestyle and pursuits of the famous and brave hidalgo don Quixote de La Mancha 17 Second Chapter. Which deals with the first excursion that the ingenious don Quixote made from his home 23 Third Chapter. In which is recounted the amusing way that don Quixote came to be dubbed a knight 29 Fourth Chapter. About what happened to our knight when he left the inn 35 Fifth Chapter. Where the narration of the misfortune of our knight continues 41 Sixth Chapter. Of the amusing and great inquisition that the priest and barber conducted in the library of our ingenious hidalgo 44 Seventh Chapter. About the second excursion by our knight don Quixote de La Mancha 53 Eighth Chapter. Of the excellent outcome that the brave don Quixote had in the frightening and never-imagined adventure of the windmills, with other events worth remembering. 57 Second Part of the Ingenious Hidalgo Don Quixote de La Mancha. Ninth Chapter. Where the stupendous battle that the gallant Basque and the brave don Quixote is concluded and brought to an end 64 Tenth Chapter. Of what else happened to don Quixote with the Basque and the danger in which he found himself with a mob of Yangüesans. 69 Eleventh Chapter. About what happened to don Quixote with some goatherds 73 Twelfth Chapter. About what a goatherd told those who were with don Quixote. 79 Chapter Thirteen. In which the end of the story of the shepherdess Marcela is revealed, with other occurrences. 84 Chapter Fourteen. Where the dead shepherd’s verses of despair are set down, with other unexpected incidents. 91 Third Part of the Ingenious Hidalgo Don Quixote de La Mancha. Chapter Fifteen. Wherein the unfortunate adventure that don Quixote came across when he came across some soulless Yangüesans. 100 Chapter Sixteen. About what happened to the ingenious hidalgo in the inn that he imagined to be a castle. 106 Chapter Seventeen. Where the innumerable travails that the brave don Quixote and his faithful squire Sancho Panza had in the inn that, to his sorrow, he thought was a castle. 113 Chapter Eighteen. Where the words that Sancho Panza said to his master don Quixote are recorded, with other adventures worthy of being told 120 Chapter Nineteen. About the tactful conversation that Sancho Panza had with his master, and of the adventure of what happened with a dead body, with other famous occurrences 129 Chapter Twenty. About the never-before-seen and unheard-of adventure accomplished by the brave don Quixote de La Mancha, with less danger than any ever accomplished by any other famous knight in the world 135 Chapter Twenty-One. Which deals with the high adventure and rich acquisition of Mambrino’s Helmet, with other things that happened to our invincible knight 146 Chapter Twenty-Two. About the freedom that don Quixote gave to many unfortunates who, much against their will, were being taken where they did not want to go 156 Chapter Twenty-Three. About what happened to the famous don Quixote in the Sierra Morena, which was one of the strangest adventures in this true history 165 Chapter Twenty-Four. Where the adventure in the Sierra Morena is continued 174 Chapter Twenty-Five. Which deals with the strange things that happened to the valiant Knight of La Mancha in the Sierra Morena and about the imitation that he did of the penance of Beltenebros 180 Chapter Twenty-Six. Where the antics that don Quixote, in the role of a lover, did in the Sierra Morena are continued 193 Chapter Twenty-Seven. How the priest and barber carried out their scheme, together with other things worthy of being revealed in this great history 200 Fourth Part of the Ingenious Hidalgo Don Quixote de La Mancha. Chapter Twenty-Eight. Which deals with the strange and delightful adventure that the priest and barber had in the same sierra 214 Chapter Twenty-Nine. Which deals with the beautiful Dorotea’s discretion, with other things that will give pleasure as well as diversion 225 Chapter Thirty. Which deals with the amusing inventiveness and the happy method hit upon for releasing our enamored knight from his very harsh self-imposed penance 233 Chapter Thirty-One. About the delightful conversation between don Quixote and Sancho Panza, his squire, with other episodes 241 Chapter Thirty-Two. Which deals with what happened in the inn to don Quixote and his companions 248 Chapter Thirty-Three. Where the novella of the «Ill-Advised Curiosity» is related 254 Chapter Thirty-Four. Wherein the novella of the «Ill-Advised Curiosity» continues 269 Chapter Thirty-Five. Where the end of the novella of the «Ill-Advised Curiosity» is concluded 283 Chapter Thirty-Six. Which deals with the fierce and colossal battle that don Quixote had with some wineskins, and other strange adventures at the inn 290 Chapter Thirty-Seven. Which continues the story of the famous princess Micomicona is continued, with other amusing adventures 298 Chapter Thirty-Eight. Which deals with the Discourse on Arms and Letters that don Quixote gave 307 Chapter Thirty-Nine. Where the Captive tells of his life and adventures 310 Chapter Forty. Where the story of the Captive is continued 317 Chapter Forty-One. Where the Captive still continues his adventures 327 Chapter Forty-Two. Which deals with what else happened at the inn together with many other things worth knowing 341 Chapter Forty-Three. Where the pleasant story of the mule boy is told, with other happenings at the inn. It begins: «Ah, me! Love’s mariner am I» 347 Chapter Forty-Four. Where the unheard-of events at the inn continue 356 Chapter Forty-Five. Where the question of Mambrino’s Helmet and the packsaddle are finally resolved, and other adventures that happened, all of them true 362 Chapter Forty-Six. About the notable adventure of the officers and the great ferocity of our great knight don Quixote 369 Chapter Forty-Seven. Of the strange way don Quixote de La Mancha was enchanted, with other famous events 375 Chapter Forty-Eight. Where the canon pursues the subject of books of chivalry, with other items worthy of his insight 382 Chapter Forty-Nine. Which deals with the shrewd conversation that Sancho Panza had with his master don Quixote 388 Chapter Fifty. About the intelligent polemic that don Quixote and the canon had, together with other events. 395 Chapter Fifty-One. Which deals with what the goatherd told all those who were taking don Quixote home 400 Chapter Fifty-Two. Of the quarrel that don Quixote had with the goatherd, with the strange adventure of the penitents, to which he gave a happy conclusion through his sweat 404`

var originalWords = function(str) {
  return R.split(' ', str)
}

// Original Answer:
//var words = R.curry(R.split(' '))

// Refactored Answer:
var words = R.split(' ')

console.log(words(text))

// Text: TOC for Book III “The Sensualists” from Brothers Karamazov

// Exercise 1a
// ===========
// Use map to make a vew words fn that works on an array of strings.


var partOne = [
  '01. In the Servants’ Quarters',
  '02. Lizaveta',
  '03. The Confession of a Passionate Heart — in Verse',
  '04. The Confession of a Passionate Heart — In Anecdote',
  '05. The Confession of a Passionate Heart — “Heels Up”',
  '06. Smerdyakov',
  '07. The Controversy',
  '08. Over the Brandy',
  '09. The Sensualists',
  '10. Both Together',
  '11. Another Reputation Ruined'
]

var sentences = R.map(words)

console.log(sentences(partOne))

// Exercise 2
// ==========
// Refactor to remove all args by partially applying the functions.

var oldFilterQs = function(xs) {
  return R.filter(function(x) {
    return R.match(/q/i, x)
  }, xs)
}

var filterQs = R.curry(R.filter(R.match(/q/i)))

console.time(filterQs)
console.log(filterQs(text))
console.timeEnd(filterQs)

// Seems like the new filterQs is about 3 milliseconds slower than the old one
// Obviously negligible, but I wonder why that is?
//console.time('oldFilterQs')
//console.log(oldFilterQs(text))
//console.timeEnd('oldFilterQs')

// Exercise 3
// ==========
// Use the helper function _keepHighest to
// refactor max to not reference any args

var _keepHighest = function(x, y) {
  return x >= y ? x : y
}

var oldMax = function(xs) {
  return R.reduce(function(acc, x) {
    return _keepHighest(acc, x)
  }, -Infinity, xs)
}

// Notes: First thing I notice is that -Infinity is the
// Original value, against which the first current
// value will be compared. The xs passed in after-ward
// is passed in as the argument that oldMax receives
// as it's argument when the function is called.

var max = R.reduce(_keepHighest, -Infinity)

console.log(max([1, 2, Infinity]))
// console.log(oldMax([1, 2, Infinity]))

// Bonus 1:
// ========
// Wrap array's slice to be functional and curried.
//console.log([1, 2, 3].slice(0, 2))

// Original answer (I guess you can't curry Array.prototype,
// which makes sense because the data is passed in first)
//var slice = R.curry(Array.slice)

var slice = R.curry((start, end, xs) => xs.slice(start, end))
console.log(slice(0)(2)([1, 2, 3]))








