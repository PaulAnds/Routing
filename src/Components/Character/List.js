import React, {useState,useEffect} from 'react';
import Character from './Character'

export default function List(){
//traer personajes de rick and morty :)

const [characters, setCharacters] = useState([]);

useEffect(() => {
    async function fetchData() {
        const data = await fetch("https://rickandmortyapi.com/api/character?page=2");
        const {results} = await data.json();
        setCharacters(results);
    }
    fetchData();
}, [characters.length]); //cada vez que los personajes cambian se carga otra vez

return(
    <div>
        <h2>Characters</h2>
        <div className="row">
            {characters.map((character) =>(
                <Character 
                    key={character.id}
                    name={character.name}
                    origin={character.origin}
                    image={character.image}
                />
            ))}
        </div>
    </div>
)

}