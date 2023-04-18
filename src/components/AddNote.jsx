import { useState } from "react";

const AddNote = ({handleAddNote}) =>{
    const [noteText,setNoteText
    ] = useState('');
    const [deadlineText,setDeadlineText] = useState('');
    const charLimit = 300;

    const handleChange = (event) =>{
        if (charLimit-event.target.value.length >=0){
            setNoteText(event.target.value);
        };
        
    };
    const handleChangeDeadline = (event) =>{
        setDeadlineText(event.target.value);
    
    };
    const handleSaveClick = () =>{
        if(noteText.trim().length > 0){
            handleAddNote(noteText,deadlineText);
            setDeadlineText('');
            setNoteText('');
        }
        
    };
    return (<div className="bg-[#228B22]  rounded-xl   whitespace-pre-wrap min-w-[100px]">
                <textarea
                    className="bg-[#228B22] text-white m-7 rounded-lg resize-none  focus:outline-none"
                    rows ='3'
                    cols ='35'
                    placeholder ='Type to add a note.....'
                    value = {noteText}
                    onChange = {handleChange}
                ></textarea>
                <textarea
                    className="bg-[#228B22] ml-2 mb-7 px-5 text-white  rounded-lg resize-none  focus:outline-none"
                    rows ='3'
                    cols ='35'
                    placeholder ='Put Your Deadline here... (dd/mm/yy)'
                    value = {deadlineText}
                    onChange = {handleChangeDeadline}
                ></textarea>
                <div className="flex p-5 items-center justify-between">
                    <small> {charLimit-noteText.length} Remaining</small>
                    <button className="bg-gray-50 m-5 rounded-2xl py-2 px-8 hover:bg-white cursor-pointer" onClick={handleSaveClick}>Save</button>
                </div>
            </div>
    );
};

export default AddNote;