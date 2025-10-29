import {useState} from 'react';
import GetBotList from './RenderBotList';
import BotListForm from './BotForm';
import './App.css';

function App() {
  const [bots, setBots] = useState([
    {key: 1, id: 1, name: "Email manager", status: "Awaiting", task: "Send/read emails"},
    {key: 2, id: 2, name: "Notification Manager", status: "Awaiting", task: "Send notifications"}
  ]);
  
  function SetBots(newBots){
    SetBots(newBots);
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
        updateList = {SetBots}
      />
      <GetBotList 
        list = {bots}
        updateList = {SetBots}
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

  function BotListManager(){
    return (<GetBotList list={bots}/>);
  }

}



*/

export default App;
