//Random number generator
const numberGenerator = (num) => {
  return Math.floor(Math.random() * num);  
};

//Possible messages 
const philosophyMessage = {
  places: [`Miletus`, `Athens`, `China`, `Stagira`, `Rome`],
  hints: [`hell is other people`, `you think, therefore you are`, `whatever is is, and what is not cannot be`, `you have nothing to lose but your chains`],
  explanation: [`in the vastness of space and the immensity of time, it is my joy to share a planet and an epoch with you`, `better that we should die on our feet rather than live on our knees`, `the passion for destruction is a creative passion`]
};

//The message the user will receive
let personalPhilosophy = [];

for(props in philosophyMessage) {

  let index = numberGenerator(philosophyMessage[props].length);

  switch(props) {
    case 'places':
      personalPhilosophy.push(`Gathering knowledge from ${philosophyMessage[props][index]}...`);
      break;
    case 'hints':
      personalPhilosophy.push(`You should remember that ${philosophyMessage[props][index]}!`);
      break;
    case 'explanation':
      personalPhilosophy.push(`You should have a nice day, because ${philosophyMessage[props][index]}.`);
      break;
    default:
      personalPhilosophy.push(`You have exceeded our philosophy's capabilities.`);
      break;      
  }   
}

//Provides formating
const format = (obj) => {
  let formated = obj.join('\n');
  console.log(formated);
}

//Calling the function
format(personalPhilosophy);