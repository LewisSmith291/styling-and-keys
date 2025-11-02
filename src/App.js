import {useState} from 'react';
import BotList from './RenderBotList';
import BotListForm from './BotForm';
import './App.css';

function App() {
  const [bots, setBots] = useState([
    {id: 1, name: "Email manager", status: "Awaiting", task: "Send/read emails"},
    {id: 2, name: "Notification Manager", status: "Awaiting", task: "Send notifications"},
    {id: 3, name: "Data Analyzer", status: "Awaiting", task: "Analyze Data"}
  ]);
  

  function RemoveBotAtIndex(index){
    const tempBots = bots.filter((bot) => bot.id !== index);
    setBots(tempBots);
  }

  function StartJob(bot){
    let newStatus = "Awaiting";

    if (bot.status === "Awaiting"){
      newStatus = "Running";
    }
    else return;
    const newBot = {id: bot.id, name: bot.name, status: newStatus, task: bot.task};

    const newBotArray = bots.map((obj) => {
      return obj.id === bot.id ? newBot : obj;
    });
    console.log(newBotArray);
    setBots(newBotArray);
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
        list = {bots}
        tasks = {botTasks}
        updateList = {AddBotFunction}
      />
      <BotList 
        list = {bots}
        removeFunction = {RemoveBotAtIndex}
        startJobFunction = {StartJob}
      />
    </div>
  );
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
