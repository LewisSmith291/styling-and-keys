import {useState} from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <BotListManager />
    </div>
  );
}

function BotListManager(){
  const [bots, setBots] = useState([
    {id: 1, name: "Email manager", status: "Running", task: "Send/read emails"},
    {id: 2, name: "Notification manager", status: "Completed", task:"Send notifications"},
    {id: 3, name: "Data analyzer", status: "Stopped", task: "Analyze data"}
  ]);

  return (<GetBotList list={bots}/>);
}

function GetStatusColour(bot){
  if (bot.status === "Running"){
  return (<div className="bot-status running">{bot.status}</div>)
  }
  else if (bot.status === "Completed"){
  return (<div className="bot-status completed">{bot.status}</div>)
  }
  else if (bot.status === "Stopped"){
  return (<div className="bot-status stopped">{bot.status}</div>)
  }

}

function GetBotList(props){
  const list = props.list.map((bot) => 
  <li className="bot" key={bot.id}>
    <div className="bot-id">{bot.id}</div>
    <div className="bot-name">{bot.name}</div>
    <GetStatusColour status = {bot.status}/>
    <div className="bot-task">{bot.task}</div>
    <button>Remove Bot</button>
  </li>
  );

  return (
    <ul id="bot-list">
      <li key="headers" className='bot'>
        <div className='header'>ID</div>
        <div className='header'>Name</div>
        <div className='header'>Status</div>
        <div className='header'>Task</div>
        <div className='header'></div>
      </li>
      {list}
    </ul>
  );
}

export default App;
