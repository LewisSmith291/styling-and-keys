import './App.css'
import {useState} from 'react';

function BotList(list){
    const [botList,setBotList] = useState(
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
      )
    );
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