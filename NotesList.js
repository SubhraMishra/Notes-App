import Note from './Note'
import AddNote from './AddNote'

const NotesList=({Notes,handleAddNote,handleDeleteNote})=>{
return (<div className="notes-list">
    {Notes.map((note)=>(
    <Note
     key={note.id} 
     id={note.id} 
     text={note.text}
     date={note.date}
     handleDeleteNote={handleDeleteNote}
     />
    ))}

    <AddNote handleAddNote={handleAddNote}/>
    
</div>);
};

export default NotesList;