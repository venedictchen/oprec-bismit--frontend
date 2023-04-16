import React from 'react';
import Note from './Note';
import AddNote from './AddNote';

const NotesList = ({notes,handleAddNote,handleDeleteNote}) =>{
    return (
        <div className="grid gap-5 ">
            
            {notes.length>0?notes.map((note)=>(
                <Note 
                id={note.id} 
                text={note.description} 
                deadline={note.deadline}
                handleDeleteNote={handleDeleteNote}
                />
            )):""}
            <AddNote handleAddNote={handleAddNote} />
        </div>
    );
};

export default NotesList;