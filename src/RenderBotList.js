import './App.css'
import {useState} from 'react';

function BotList(props){
  const botList = props.list.map((bot) => 
    <Bot 
      id = {bot.id}
      key = {bot.id}
      name = {bot.name}
      status = {bot.status}
      task = {bot.task}
      removeFunction = {props.removeFunction}
    />
  );
  return (
    <ul id="bot-list">
      <ListHeader />
      {botList}
    </ul>
  );
}

function ListHeader(){
  return (
    <li className="header bot">
      <div className="bot-id">ID</div>
      <div className="">Name</div>
      <div className="">Status</div>
      <div className="">Task</div>
      <div className=""></div>
    </li>
  )
}

function Bot(bot){
  return (
    <li className="bot">
      <div className="bot-id">{bot.id}</div>
      <div className="bot-name">{bot.name}</div>
      <GetStatusColour status = {bot.status}/>
      <div className="bot-task">{bot.task}</div>
      <StartJobButton />
      <RemoveBotButton 
        function = {bot.removeFunction}
        index = {bot.id}
      />
    </li>
  )
}

function StartJobButton(){
  return (
  <button className="start-job bot-button">Start Job</button>
  );
}

function RemoveBotButton(remove){
  return (
    <button onClick={() => {remove.function(remove.index)}} className="remove-bot bot-button">Remove Bot</button>
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
export default BotList;