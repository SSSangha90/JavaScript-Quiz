var countriesQuiz = [
	["Turkey", "Istanbul"],
	["England", "London"],
	["France", "Paris"],
	["Germany", "Munich"],
	["Italy", "Milan"],
	["USA", "Washington"],
	["Japan", "Tokyo"],
	["Greece", "Athens"],
	["China", "Beijing"],
	["South Africa", "Cape Town"]
];

var correctAnswer = 0;
var question;
var answer;
var response;
var html;

function print(message){
	document.write(message);
}

for (var i = 0; i < countriesQuiz.length; i++){
	question = countriesQuiz[i][0];
	answer = countriesQuiz[i][1].toLowerCase();
	response = prompt("What's the capital of " + question);
	
	if (response === answer){
		correctAnswer++;
	}
}

html = "you got " + correctAnswer + " out of 10";
print(html);

