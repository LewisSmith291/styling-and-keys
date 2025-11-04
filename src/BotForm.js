import './App.css';
import {useState} from 'react';

export default function BotListForm(props){
  // Used to store the new bot type from the dropdown box
  const [newBotType, setNewBotType] = useState("");

  // Calls the parsed 'AddBotFunction' function, providing the name of the new bot
  function addBot(event){
    props.addFunction(newBotType);
  }
  
  function AddBotButton(event){
    return (
      <button id="new-bot-button" onClick={addBot} type="submit">Add Bot</button>
    )
  }

  // Called whenever a value is selected from the dropdown box
  // Updates the 'newBotType' hook 
  function selectChange(event){
    setNewBotType(event.target.value);
  }

  // Component that returns the dropdown box where the user can select a new bot type
  function BotDropdown(event){
    return (
      <select id="dropdown" onChange={selectChange} value={newBotType}>
        <option id="default-value" disabled value="">-- Bot Type --</option>
        <option value="Email Manager">Email Manager</option>
        <option value="Notification Manager">Notification Manager</option>
        <option value="Data Analyzer">Data Analyzer</option>
      </select>
    )
  }

  return (
    <div id="bot-form">
      <BotDropdown />
      <AddBotButton />
    </div>
  )
}