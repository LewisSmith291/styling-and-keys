import {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <BotOverview />
    </div>
  );
}

function BotOverview(){
const [newBotType, setNewBotType] = useState("");
const [bots, setBots] = useState([
  {id: 1, name: "Email manager", status: "Awaiting", task: "Send/read emails"}
]);

// Form for inputting more bots
  function BotListForm(){
    const botTasks = {
      "Email Manager": "Send/read emails",
      "Notification Manager": "Send notifications",
      "Data Analyzer": "Analyze data"
    }

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

  function GetBotList(props){
    const [botList, setBotList] = useState(
      props.list.map((bot) => 
        <li className="bot" key={bot.id}>
          <div className="bot-id">{bot.id}</div>
          <div className="bot-name">{bot.name}</div>
          <GetStatusColour status = {bot.status}/>
          <div className="bot-task">{bot.task}</div>
          <StartJobButton 
            name = {bot.name}
            status = {bot.status}
          />
          <RemoveBotButton 
            bot = {bot}
            />
        </li>
    ));

    function GetStatusColour(bot){
      if (bot.status === "Running"){
      return (<div className="bot-status running">{bot.status}</div>)
      }
      else if (bot.status === "Completed"){
      return (<div className="bot-status completed">{bot.status}</div>)
      }
      else if (bot.status === "Awaiting"){
      return (<div className="bot-status awaiting">{bot.status}</div>)
      }
    }

    function StartJobButton(bot){
      const [jobTimer, setJobTimer] = useState(0);
      const [jobStatus, setJobStatus] = useState(bot.status);
      if (bot.name === "Email manager"){

      }
      else if (bot.name === ""){

      }

      return(
        <button className="start-job bot-button">Start Job</button>
      )
    }

    function RemoveBotButton(bot){
      function RemoveBot(){
        let tempBotList = botList;
        let index = tempBotList.indexOf(bot.bot);
        tempBotList.splice(index,1);
        setBotList(tempBotList);
      }

      return(
        <button onClick={RemoveBot} className="remove-bot bot-button">Remove Bot</button>
      )
    }

    return (
      <ul id="bot-list">
        <li id="header-id" key="headers" className='bot'>
          <div className='header bot-id'>ID</div>
          <div className='header'>Name</div>
          <div className='header'>Status</div>
          <div className='header'>Task</div>
          <div className='header'></div>
        </li>
        {botList}
      </ul>
    );
  }



  return (
    <div>
      <BotListForm />
      <BotListManager />
    </div>
  )
}




export default App;
