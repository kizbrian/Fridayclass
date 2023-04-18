const readline = require('readline');

// Create interface for reading user input and outputting responses
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Define responses to user input
const responses = {
  'hello': 'Hey',
  'how are you': 'I am  doing great, thank you for asking!',
  'what is your name': 'My name is Chatsomto. What is your name?',
  'How can I help you': 'I want to make some money online' ,
  'go to stakecut to make some money': 'ok I will' ,
  'goodbye': 'Goodbye!',
  
};

// Prompt the user for input and respond based on input
rl.question('Welcome to ChatBot. How can I help you today?\n', (input) => {
  while (input.toLowerCase() !== 'goodbye') {
    let response = responses[input.toLowerCase()] || responses[''];
    console.log(response);
    rl.question('', (input) => {});
  }
  
  rl.close();
});
