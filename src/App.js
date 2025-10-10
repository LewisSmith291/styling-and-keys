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
  </li>
  )
  return (<ul id="bot-list">{list}</ul>);
}

export default App;
