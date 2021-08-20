import React, { useState, useEffect } from 'react';
import CardList from './components/card-list-component/CardList';
import SearchBox from './components/search-box-component/SearchBox';
import './App.css';

function App() {
  const [monsters, setMonters] = useState([])
  const [searchField, setSearchField] = useState('');
  
  useEffect(() => {
    const getData = async () => {
      const monsters = await fetchData()
      setMonters(monsters)
       
    }
    getData()
  }, [])

  const fetchData = async () => {
    const data = await fetch('https://jsonplaceholder.typicode.com/users')
    return data.json()
  }
  
  const filteredMonsters = monsters.filter(
    monster => monster.name.toLowerCase().includes(searchField.toLowerCase()
  ))
  const handleChange = (event) => {
    setSearchField(event.target.value)
  }

  return (
    <div className="App">
      <h1> Monster Rolodex </h1>
      <SearchBox
        placeholder='search monsters'
        handleChange={handleChange}
      />
      <CardList monsters={filteredMonsters}/>
    </div>
  );
}

export default App;
