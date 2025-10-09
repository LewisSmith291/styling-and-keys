import useState from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      
    </div>
  );
}

function BotListManager(){
  const [bots, setBots] = iseState([
    {id: 1, name: "Send Email", status: "Running", task: "Sending"},
    {id: 2, name: "Send Notifications"},
    {}
  ])
}

export default App;
