//Story App AI
//This is to test the regular expressions for finding key words
var testText = "Margot Shooster is the sister of Joel Shooster and she lives in Boca Raton.";
var textRegex = /([A-Z]\.?\w*\-?[A-Z]?\w*)\s?([A-Z]\w+|[A-Z]?\.?)\s([A-Z]?\w{0,3}[A-Z]\w+\-?[A-Z]?\w*)(?:,\s|)(Jr\.|Sr\.|IV|III|II|)\w+/g;

results = testText.match(textRegex);

console.log("Test text:", testText);
console.log("Results: ", results);