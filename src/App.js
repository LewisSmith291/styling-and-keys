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

function GetBotList(props){
  const list = props.list.map((bot) => 
  <li className="bot" key={bot.id}>
    <div className="bot-name">Name: {bot.name}</div>
    <div className="bot-status">Status: {bot.status}</div>
    <div className="bot-task">Task: {bot.task}</div>
    <button>Remove Bot</button>
  </li>
  )
  return (
    <ul id="bot-list">
      <li key="headers" className='bot'>
        <div className='header'><b>Name</b></div>
        <div className='header'><b>Status</b></div>
        <div className='header'><b>Task</b></div>
        <div className='header'></div>
      </li>
      {list}
    </ul>);
}

export default App;
