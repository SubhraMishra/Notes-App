import {nanoid} from 'nanoid';
import { useEffect, useState } from 'react';
import NotesList from './Components/NotesList';
import Search from './Components/search';
import Header from './Components/Header';
const App =()=>{
  const [Notes,setNotes]=useState([]);

  useEffect(()=>{
    const savedNotes = JSON.parse(localStorage.getItem('react-notes-app-data'));
    if(savedNotes){
      setNotes(savedNotes);
    }
  },[]);


  const[searchText,setsearchText]=useState('');

  const[darkMode,setdarkMode]=useState(false);

  const addNote=(text)=>{
  const date=new Date();
  const newNote={
    id:nanoid(),
    text:text,
    date:date.toLocaleDateString()
  }
  const newNotes = [...Notes,newNote];  // (... destructuring method in javascript ) -> { serach in mdn docs }
  setNotes(newNotes);
  localStorage.setItem('react-notes-app-data',JSON.stringify(newNotes));
  };


const deleteNote=(id)=>{
  const newNotes=Notes.filter((note)=>note.id !== id);
  setNotes(newNotes);
}

  return (
    <div className={`${darkMode && 'dark-mode'}`}>
      <div className='container'>
      <Header handleToggleDarkMode={setdarkMode}></Header>
      <Search handleSearchNote={setsearchText}/>
      <NotesList Notes={Notes.filter((note)=>note.text.toLowerCase().includes(searchText))} 
      handleAddNote={addNote}
      handleDeleteNote={deleteNote}
      />
    </div>
    </div>
  );
};

export default App;