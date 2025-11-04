import {useState} from 'react';
import BotList from './RenderBotList';
import BotListForm from './BotForm';
import './App.css';

function App() {
  // List of all bots on the page
  const [bots, setBots] = useState([
    {id: 1, name: "Email Manager", status: "Awaiting", task: "Send/read emails"},
    {id: 2, name: "Notification Manager", status: "Awaiting", task: "Send notifications"},
    {id: 3, name: "Data Analyzer", status: "Awaiting", task: "Analyze Data"}
  ]);

  // Removes the bot at the given index
  function RemoveBotAtIndex(index){
    const tempBots = bots.filter((bot) => bot.id !== index);
    setBots(tempBots);
  }

  // Adds a new bot to the bot list with the given name / task
  function AddBotFunction(botName){
    const tempBots = bots;
    const newID = GetNewID();
    const newBot = {id: newID, name: botName, status: "Awaiting", task: botTasks[botName]};
    setBots(tempBots.concat(newBot));
  }

  // Returns an ID to be used by a new bot
  function GetNewID(){
    let highestID = 0;
    bots.forEach(currentBot => {
      if (currentBot.id > highestID){
        highestID = currentBot.id;
      }
    });
    return highestID + 1;
  }

  // Stores the task string to be accessed using the name of the bot
  const botTasks = {
    "Email Manager": "Send/read emails",
    "Notification Manager": "Send notifications",
    "Data Analyzer": "Analyze data"
  }

  return (
    <div className="App">
      <BotListForm 
        tasks = {botTasks}
        addFunction = {AddBotFunction}
      />
      <BotList 
        list = {bots}
        removeFunction = {RemoveBotAtIndex}
      />
    </div>
  );
}

// Returns a timer based on the task type
// Used to decide how long a task takes to complete
export function GetTaskTimer(taskType){
  let time = 2;
  switch (taskType){
    case "Email Manager":
      time = Math.random() * 2;
      break;
    case "Notification Manager":
      time = Math.random() * 3;
      break;
    case "Data Analyzer":
      time = Math.random() * 4;
      break;
  };
  return time * 1000;
}

export default App;
