import React from 'react';
import {getNotes} from '../../Components/data';
import { Link, useParams } from 'react-router-dom';
import './Notes.css';

const Notes = () => {
    let notes = getNotes();

    const {noteId} = useParams();

    const filterNotes = (id) => {
        let selectedNote = false;

        if(id > 0){
            selectedNote = notes.filter(
                note => note.id === Number(id)
            );
        }
        return selectedNote;
    }

    const selectedNote = filterNotes(noteId);

    const renderNote = (notes) => (
            <ul>
                {
                    notes.map((note,key) => (
                        <li key = {key}>
                            <Link to={`/notes/${note.id}`}>{note.button}</Link>
                            {sendTitle(note)}
                            {sendDescription(note)}
                        </li>
                    ))
                }
            </ul>
    )

    const sendTitle = (note) => {
        if(selectedNote){
            return <h3>{note.title}</h3>
        }
        
    }

    const sendDescription = (note) => {
        if(selectedNote){
            return <h3>{note.description}</h3>
        }
        
    }

    return (
        <div className="Notes">
            <h1>Notes</h1>
            {renderNote(selectedNote || notes)}
        </div>
    );
};

export default Notes;