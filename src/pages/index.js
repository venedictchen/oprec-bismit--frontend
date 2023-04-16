import NotesList from "../components/NotesList";
import { useState,useEffect} from "react";
import {nanoid} from "nanoid"
import axios from 'axios'
import Search from "../components/Search";
import Header from "../components/Header";

const App = () => {
    const [notes, setNotes] = useState([]);      
    const [searchText,setSearchText] = useState('');

    
    useEffect(() =>{
        axios.get("http://127.0.0.1:8000/items")
        .then(res => {
          console.log(res.data)
          setNotes(res.data)
        }).catch(err => {
          console.log(err)
        })
    },[]);


    const addNote = (text,deadlineText) =>{
        const data = {
            id:nanoid(),
            name:nanoid(),
            description:text,
            deadline:deadlineText}
        axios.post('http://127.0.0.1:8000/items', data)
          .then(function (response) {
            console.log(response);
            setNotes([...notes,data])
          })
          .catch(function (error) {
            console.log(error);
          });
    };

    const deleteNote = (id) =>{
        const newNotes = notes.filter((note) => note.id !== id);
        axios.delete("http://127.0.0.1:8000/item/" + id)
        .then(res => {
        console.log(res.data);
        setNotes(newNotes);
        }).catch(err => {
        console.log(err);
        });
    }


    return (
    <div className="mb-37.5 max-w-[1100px] mx-auto px-4 min-h-screen">
        <Header 
        />
        <Search 
        handleSearchNote ={setSearchText}
        />
        <NotesList

         notes={notes.filter((note)=>
            note.description.toLowerCase().includes(searchText))} 
         handleAddNote={addNote}
         handleDeleteNote={deleteNote}
         />
    </div>
);
}

export default App;