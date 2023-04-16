import {MdDeleteForever} from 'react-icons/md'
import {AiFillEdit} from 'react-icons/ai'
import { useRef, useState } from "react";
import axios from 'axios';
const Note = ({id,text,deadline,handleDeleteNote}) =>{
    const [editText,setEditText] = useState(text);
    const [editDeadline,setDeadlineText] = useState(deadline);
    const [isEditing,setisEditing] = useState(false);
    const [isEditingDeadline,setisEditingDeadline] = useState(false);
    const charLimit = 300;
    const handleChange = (event) =>{
        if (charLimit-event.target.value.length >=0){
            setEditText(event.target.value);
        };
        
    };
    const handleChangeDeadline = (event) =>{
        setDeadlineText(event.target.value);
        
    };
    const handleBlur = (e) => {
        axios.put("http://127.0.0.1:8000/item/" + id, {
            id:id, name:"",description:editText, deadline:editDeadline
        })
        .then(res => {
        console.log(res.data);
        }).catch(err => {
        console.log(err);
        });
        setisEditing(false)
        setisEditingDeadline(false)
        
    }
    const inputRef = useRef(null);
    return(
        <div className="flex-col break-words justify-between bg-slate-200 rounded-lg p-2 whitespace-pre-wrap min-w-[170px]">
        <div className='flex justify-start'>
            <textarea
                    className={`${isEditing ? "bg-white w-full": "bg-transparent w-fit"} text-black m-7 rounded-lg resize-none  focus:outline-none`}
                    rows ='3'
                    cols ='40'
                    value = {editText}
                    onChange = {handleChange}
                    onBlur={handleBlur}
                    readOnly = {!isEditing}
                    disabled = {!isEditing}
                    ref={inputRef}
                ></textarea>
                <AiFillEdit 
                className='cursor-pointer transition ease-in-out delay-150 bg-[#7b5f9] hover:-translate-y-1 hover:scale-110 rounded-lg hover:bg-white hover:animate-pulse duration-300 ...'
                onClick={ ()=> {
                    setisEditing(true)
                    inputRef.current.focus()
                }} 
                size="1.3em"/>
                <small className='mr-8'>Double click to edit list</small> 
        </div>
        <div className='flex justify-between'>
            <small className='text-sm'>{new Date().toLocaleDateString()}</small>       
            <div className='flex justify-between'>
            <div className="flex items-center justify-between">
                <small>Deadline: </small>     
                
                <input
                    className={`${isEditingDeadline ? "bg-white" : "bg-transparent"} mr-16 text-black text-sm rounded-lg resize-none  focus:outline-none`}
                    rows ='3'
                    cols ='40'
                    value = {editDeadline}
                    onChange = {handleChangeDeadline}
                    onBlur={handleBlur}
                    readOnly = {!isEditingDeadline}
                    disabled = {!isEditingDeadline}
                    ref={inputRef}
                ></input>
            </div>  
            <div className='flex justify-between mr-[250px]'>
                 <AiFillEdit 
                className='cursor-pointer  transition ease-in-out delay-150 bg-[#7b5f9] hover:-translate-y-1 hover:scale-110 rounded-lg hover:bg-white hover:animate-pulse duration-300 ...'
                onClick={ ()=> {
                    setisEditingDeadline(true)
                    inputRef.current.focus()
                }} 
                size="1.3em"/>
                <small>Double click to edit deadline</small> 
            </div>
                
                
                
            </div>
            <MdDeleteForever 
                onClick={ ()=> handleDeleteNote(id)}
                className='cursor-pointer mr-3 transition ease-in-out delay-150 bg-[#7b5f9] hover:-translate-y-1 hover:scale-110 rounded-lg hover:bg-white hover:animate-pulse duration-300 ...' 
                size="1.3em"/>  
        </div>
        </div>
    );
};

export default Note;