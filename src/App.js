import {useState} from 'react';
import BotList from './RenderBotList';
import BotListForm from './BotForm';
import './App.css';

function App() {
  const [bots, setBots] = useState([
    {id: 1, name: "Email Manager", status: "Awaiting", task: "Send/read emails"},
    {id: 2, name: "Notification Manager", status: "Awaiting", task: "Send notifications"},
    {id: 3, name: "Data Analyzer", status: "Awaiting", task: "Analyze Data"}
  ]);

  function RemoveBotAtIndex(index){
    const tempBots = bots.filter((bot) => bot.id !== index);
    setBots(tempBots);
  }


  function AddBotFunction(bot){
    const tempBots = bots;

  }

  const botTasks = {
    "Email Manager": "Send/read emails",
    "Notification Manager": "Send notifications",
    "Data Analyzer": "Analyze data"
  }

  return (
    <div className="App">
      <BotListForm 
        tasks = {botTasks}
        updateList = {AddBotFunction}
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

/*
function BotOverview(){
// Form for inputting more bots
  function BotListForm(){

    const addBot = (event) => {
      event.preventDefault();
      if (newBotType==="") return;
      // Getting ID
      let newID;
      let highestId = 0;
      bots.forEach(bot => {
        if (bot.id > highestId){
          highestId = bot.id;
        }
      });
      newID = highestId + 1;
      const newBot = {id: newID, name: newBotType, status: "Awaiting", task: botTasks[newBotType]};
      let tempBotList = bots;
      tempBotList.push(newBot);
      setBots(tempBotList);
      setNewBotType("");
    }

    const handleChange = (event) => {
      setNewBotType(event.target.value);
    }

    return(
      <form id="bot-form">
        <select id="dropdown" onChange={handleChange} value={newBotType}>
          <option id="default-value" disabled value="">-- Bot Type --</option>
          <option value="Email Manager">Email Manager</option>
          <option value="Notification Manager">Notification Manager</option>
          <option value="Data Analyzer">Data Analyzer</option>
        </select>
        <button id="new-bot-button" onClick={addBot} type="submit">Add Bot</button>
      </form>
    )
  }

}



*/

export default App;
