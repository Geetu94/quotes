var quotes = [
	{
		"quote": "The purpose of our lives is to be happy.",
		"author": "Dalai Lama ",
	},
	{
		"quote":  "Share your knowledge. It is a way to achieve immortality",
		"author": "Dalai Lama ",
	},
	{
		"quote": "I like the religion that teaches liberty, equality and fraternity.",
		"author": "B. R. Ambedkar",
	},
	{
		"quote": "Once a year, go somewhere you’ve never been before.  ",
		"author": "Dalai Lama",
	}
];

document.getElementById("saidso").innerHTML = quotes[0].quote;
document.getElementById("author").innerHTML = quotes[0].author;

var bgColors = ["red", "pink", "yellow", "green", "orange"];

function changeQuote() {
  var i = Math.floor(Math.random()*4);
  var j = Math.floor(Math.random()* bgColors.length);
  var k = Math.floor(Math.random()* bgColors.length);
  
  document.getElementById("saidso").innerHTML = quotes[i].quote;
  document.getElementById("author").innerHTML = quotes[i].author;
  document.getElementById("main").style.backgroundColor = bgColors[j];
  document.getElementById("quote").style.backgroundColor = bgColors[k];
}