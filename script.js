//your code here
let touristSpots = ['The Virupaksha Temple', 'Victoria Memorial', 'Tajmahal'];

// Function to remove articles from band names
function removeArticles(name) {
  // List of articles to be excluded
  const articles = ['a', 'an', 'the'];
  
  // Splitting the name into individual words
  const words = name.split(' ');
  
  // Checking if the first word is an article
  if (articles.includes(words[0].toLowerCase())) {
    // Removing the first word
    words.shift();
  }
  
  // Joining the remaining words back into a string
  const updatedName = words.join(' ');
  
  return updatedName;
}

// Sorting the band names in lexicographic order excluding articles
bandNames.sort((a, b) => removeArticles(a).localeCompare(removeArticles(b)));

// Creating the HTML list
let htmlList = '<ul id="band">';

// Adding each band name as a list item
for (let name of bandNames) {
  htmlList += '<li>' + name + '</li>';
}

// Closing the HTML list
htmlList += '</ul>';

console.log(htmlList);


