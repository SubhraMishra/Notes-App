import {MdDeleteForever} from 'react-icons/md';
const Note=({id,text,date,handleDeleteNote})=>{

    return (<div className="Notes">
        <span>{text}</span>
        <div className="Note-footer">
            <small>{date}</small>
            <MdDeleteForever 
            onClick={()=>handleDeleteNote(id)}
            className="delete-icon" 
            size='1.3em'>
            </MdDeleteForever>
        </div>
    </div>)

};

export default Note;