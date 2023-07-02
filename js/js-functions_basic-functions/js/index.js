console.clear();

/*
1: Create the data for a book in an online store. Create variables for the following data:
  - the book title
  - the author
  - the rating
  - the number of sales
*/

const book = {
  title: "Hunger games",
  author: "suzanne collins",
  rating: 4.5,
  sales: 12000000,
};
console.log(book);

/*
2: Log all variables to the console, for example:

Title: The Lord of the Javascript
Author: Mario
Rating: 4.2
Sales: 120

Increase the number of sales and change the rating of the book afterwards.
Then log all variables to the console again.
*/
book.sales = 100000000;
book.rating = 4.3;
console.log(book.rating);

/*
3: This code is quite repetitive and hard to read.
 - Write a function called logBookData which console logs all
   variables when it is called.
 - Then replace the console logs above with this function.
 - Now increase the number of sales 2 more times and log the data after each increase.
*/
function logBookData(bookName) {
  console.log(bookName.title);
  console.log(bookName.author);
  console.log(bookName.rating);
  console.log(bookName.sales);
}

logBookData(book);

book.title = "The hunger games";
