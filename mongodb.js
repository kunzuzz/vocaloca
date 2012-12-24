var databaseUrl = "db"; // "username:password@example.com/mydb"
var collections = ["words"];    
var db = require("mongojs").connect(databaseUrl, collections);

db.words.remove();

module.exports.saveWords = saveWords;

function saveWords(words) {
    var w;
    for (w in words) {
        saveOneWord(words[w]);
    }
}

function saveOneWord(word) {
    console.log(word);
    db.words.save(word, function (err, saved) {
        if (err || !saved) console.log("Word not saved");
        else console.log("Word saved");
    });
}

function findWords() {
    db.words.find(function (err, users) {
        if (err || !users) console.log("No words found");
        else users.forEach(function (word) {
            console.log(word);
        });
    });
}

