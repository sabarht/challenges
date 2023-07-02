console.clear();
//onSuccess is  just a name to call another func and just pass the Argument
function handleUserLogin(onSuccess) {
  // You might wonder why this function is called `onSuccess`. This will become clear by the fourth challenge! 🤞
  onSuccess();
}

// Call handleUserLogin below!
function showWelcomeMessage() {
  console.log("Welcome! You are logged in now.");
}
handleUserLogin(showWelcomeMessage);

handleUserLogin(() => {
  console.log("Welcome! You are logged in now.");
});
