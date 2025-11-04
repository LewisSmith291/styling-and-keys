import './App.css'
import {GetTaskTimer} from './App';
import {useState} from 'react';

function BotList(props){
  // Takes the states of the botList in the App script and converts them into Bot components
  const botList = props.list.map((bot) => 
    <Bot 
      id = {bot.id}
      key = {bot.id}
      name = {bot.name}
      status = {bot.status}
      task = {bot.task}
      removeFunction = {props.removeFunction}
      startFunction = {props.startJobFunction}
    />
  );
  return (
    <ul id="bot-list">
      <ListHeader />
      {botList}
    </ul>
  );
}

// Component that returns the list header element
function ListHeader(){
  return (
    <li className="header bot">
      <div className="bot-id">ID</div>
      <div className="">Name</div>
      <div className="">Status</div>
      <div className="">Task</div>
      <div className="">Actions</div>
    </li>
  )
}

// Component that returns a new Bot row that will be stored on the list
function Bot(bot){
  const [id] = useState(bot.id);
  const [name] = useState(bot.name);
  const [status, setStatus] = useState(bot.status);
  const [task] = useState(bot.task);

  // Starts the job of the current bot
  // After a random amount of time the status will change from 'Running' to 'Completed'
  function StartJob(){
    if (status !== "Awaiting") return;
    setStatus("Running");
      const timeout = setTimeout(() => {
        setStatus("Completed");
    },GetTaskTimer(name));
    return () => clearTimeout(timeout);
  }

  return (
    <li className="bot">
      <div className="bot-id">{id}</div>
      <div className="bot-name">{name}</div>
      <GetStatusColour status = {status}/>
      <div className="bot-task">{task}</div>
      <StartJobButton 
        status = {status}
        index = {id}
        function = {StartJob}
      />
      <RemoveBotButton 
        function = {bot.removeFunction}
        index = {id}
      />
    </li>
  )
}

// Component that returns the button used for starting the job of the parent Bot
function StartJobButton(start){
  if (start.status !== "Awaiting"){
    return (<div className="bot-button-completed"></div>)
  }
  else {
    return (
      <button onClick={() => {start.function()}} className="start-job bot-button">Start Job</button>
    );
  }
}

// Component that returns the button used for removing the parent Bot
function RemoveBotButton(remove){
  return (
    <button onClick={() => {remove.function(remove.index)}} className="remove-bot bot-button">Remove Bot</button>
  )
}

// Styles the colour of the 'Status' column in the bot list depending on the current status
function GetStatusColour(bot){
  if (bot.status === "Running"){
    return (<div className="bot-status running">{bot.status}</div>);
  }
  else if (bot.status === "Completed"){
    return (<div className="bot-status completed">{bot.status}</div>);
  }
  else if (bot.status === "Awaiting"){
    return (<div className="bot-status awaiting">{bot.status}</div>);
  }
}

export default BotList;