import './App.css'
import {useState} from 'react';

export default function GetBotList(props){
  console.log(props.list);
  const botList = useState(
    props.list.map((bot, id = 0, key = -1) => 
      <Bot 
        id = {bot.id = bot.id + 1}
        key = {bot.key = bot.key + 1}
        name = {bot.name}
        status = {bot.status}
        task = {bot.task}
      />
    )
  );
  return (botList);
}

function Bot(bot){
  return (
    <li className="bot" key={bot.key}>
      <div className="bot-id">{bot.id}</div>
      <div className="bot-name">{bot.name}</div>
      <GetStatusColour status = {bot.status}/>
      <div className="bot-task">{bot.task}</div>
      <StartJobButton />
      <RemoveBotButton />
    </li>
  )
}

function StartJobButton(){
  return (
  <button className="start-job bot-button">Start Job</button>
  );
}

function RemoveBotButton(){
  return (
    <button onClick className="remove-bot bot-button">Remove Bot</button>
  )
}

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