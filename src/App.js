
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import NotesList from './components/NotesList';
import Search from './components/Search';
import NoteDetails from './components/NoteDetails';
import {useEffect, useState } from 'react';
import {nanoid} from 'nanoid';
import Header from './components/Header';
import SideNavBar from './components/SideNavBar';



function App() {
  const[notes,setNotes] = useState([
    {
    id:nanoid(),
    text:"this is is my first note",
    date:"5/04/2025"
  },
  {
    id:nanoid(),
    text:"this is is my second note",
    date:"12/04/2025"
  },
  {
    id:nanoid(),
    text:"this is is my third note",
    date:"19/04/2025"
  },
  {
    id:nanoid(),
    text:"this is is my fourth note",
    date:"24/04/2025"
  },
  {
    id:nanoid(),
    text:"this is is my new note",
    date:"30/04/2025"
  }
]);

const [toggle,setToggle] = useState(false);

 const [isCollapsed, setIsCollapsed] = useState(false);

const [searchText,setSearchText] = useState('');

useEffect(()=>{
  const savedNotes = JSON.parse(
    localStorage.getItem('react-notes-app-data')
  );
  if(savedNotes){
    setNotes(savedNotes);
  }
},[]);


useEffect (()=>{
localStorage.setItem('react-notes-app-data',
  JSON.stringify(notes))

},[notes])

const handleAddNote = (text) => {
    const date = new Date();
    const newNote = {
      id:nanoid(),
      text:text,
      date:date.toLocaleDateString()
    };
      const newNotes=[...notes,newNote];
      setNotes(newNotes);
};


const  deleteNote = (id) => {
 const newNotes =  notes.filter((note)=> note.id !== id);
setNotes(newNotes);

}

 



  return (
    <Router>
      <div className={`${toggle && 'dark-mode'}`}>
        <div className="container">
          <div className={`cont1 ${isCollapsed ? 'sidebar-collapsed' : ''}`}>
            <SideNavBar isCollapsed={isCollapsed} handleCollapse={setIsCollapsed} />
          </div>
          <div className='cont2'>
            <Header handleToggle={setToggle}/>
            {/* Add your search if needed */}
            <Routes>
              {/* Route for notes list on main page */}
              <Route
                path="/"
                element={
                  <NotesList
                    notes={notes.filter((note) => note.text.toLowerCase().includes(searchText))}
                    handleAddNote={handleAddNote}
                    handleDeleteNote={deleteNote}
                    handleSearchNote={setSearchText}
                  />
                }
              />
              {/* Route for individual note details */}
              <Route path="/notes/:id" element={<NoteDetails notes={notes} />} />
            </Routes>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
