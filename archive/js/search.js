let post_search = post_array

const filterBy = str => post_search.filter(
    post => new RegExp('^' + str.replace(/\*/g, '.*') + '$').test(post.post_description.toLowerCase())
);

function JSON_search(search_term)
{
    search_term = search_term.toLowerCase()
    search_term = `*${search_term}*`
    var result = filterBy(search_term)

    return result
}

var search = JSON_search("ass");

var i;
for (i = 0; i < search.length; i++) {
    console.log(search[i].post_description);
} 

// https://stackoverflow.com/questions/44469548/es6-filter-data-with-case-insensitive-term
// https://appdividend.com/2020/07/31/javascript-filter-object-how-to-filter-objects-in-array/#:~:text=%20JavaScript%20Filter%20Object%20%201%20Syntax.%20,it%20has%20two%20shows.%20Now%2C%20we...%20More%20
// https://stackoverflow.com/questions/52143451/javascript-filter-with-wildcard