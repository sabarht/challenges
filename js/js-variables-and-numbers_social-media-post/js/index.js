console.clear();

/*
1. Create the data for a small social media post. Create a const variable for each data point listed below.:
	- a title
	- a text
	- the number of likes
	- the user who created the post
	- a boolean called isReported
*/
const post = {
  title: "daily vlog",
  text: "what i did in a day as a 25 years old living in Berlin",
  numberOfLikes: 355,
  isReported: false,
};

// --v-- write your code here --v--

// --^-- write your code here --^--

/*
2. Log all variables to the console. Increase the likes by one and log the amount of likes again. Adapt your code from 1.1 if necessary.
*/
console.log(post);

// --v-- write your code here --v--
post.numberOfLikes += 1;
console.log((post.numberOfLikes += 1));

// --^-- write your code here --^--
