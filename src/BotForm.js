import './App.css';
import {useState} from 'react';

export default function BotListForm(props){
    const [bots, setBots] = useState(props.list);
    const [newBotType, setNewBotType] = useState("");

    function addBot(event){
        props.updateList(newBotType);
    }
    
    function AddBotButton(event){
        return (
            <button id="new-bot-button" onClick={addBot} type="submit">Add Bot</button>
        )
    }

    function selectChange(event){
        setNewBotType(event.target.value);
    }

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