const QUOTE_AND_AUTHOR = [
  ['Amateurs talk strategy. Professionals talk logistics.', 'General Omar Bradley'],
  ["It's hard to do a really good job on anything you don't think about in the shower.", 'Paul Graham'],
  ['I learned very early the difference between knowing the name of something and knowing something.', 'Richard Feynman'],
  ['And yet it moves.', 'Galileo'],
  ['A million people can call the mountains a fiction, yet it need not trouble you as you stand atop them.', 'Randall Munroe'],
  ['Truth comes as a conqueror only to those who have lost the art of receiving it as a friend.', 'Rabindranath Tagore'],
  ['Remember that you are always making up the future as you go.', 'Randall Munroe'],
  ['The one thing that you have that nobody else has is you. Your voice, your mind, your story, your vision. So write and ' +
  'draw and build and play and dance and live as only you can.', 'Neil Gaiman'],
  ["A ship in the harbor is safe, but that's not why ships are built.", 'John Augustus Shedd'],
  ["If your problem is that there is too much traffic, you are part of the problem. If you join a crowd because you like " +
  "crowds, you add to the crowd. If you withdraw your child from school because of the pupils he goes to school with, you " +
  "remove a pupil that they go to school with. If you raise your voice to make yourself heard, you add to the noise that " +
  "other people are raising their voices to be heard above. When you cut your hair short you change, ever so slightly, " +
  "other people's impression of how long people are wearing their hair.", 'Thomas Schelling'],
  ['Consider the fact that you are now experiencing death, in a curious way. Not being in Paris right now, you know what ' + 
  'it is like to be dead in Paris. No lights, no sounds—nothing. The same goes for Timbuktu. In fact, you are dead ' +
  'everywhere—except for one small spot. Just think about how close you are to being dead everywhere!', 'Douglas Hofstadter'],
  ["If you want to build a ship, don't drum up the men to gather wood, divide the work, and give orders. Instead, teach " +
  "them to yearn for the vast and endless sea.", 'Antoine de Saint-Exupery'],
  ['Nearly everything is really interesting if you go into it deeply enough.', 'Richard Feynman'],
  ["The only style worth having is the one you can't help.", 'Paul Graham']
];

// whenever the page loads, randomly set the quote
window.onload = function() {
  const idx = Math.floor(Math.random() * QUOTE_AND_AUTHOR.length);
  const quote = QUOTE_AND_AUTHOR[idx][0];
  const author = QUOTE_AND_AUTHOR[idx][1].padEnd(16, '\u00A0'); // using non-space whitespace due to CSS float
  document.getElementById("quote-text").innerHTML = quote;
  document.getElementById("quote-author").innerHTML = author;
}
