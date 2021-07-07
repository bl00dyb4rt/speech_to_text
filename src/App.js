import React, { useState } from 'react'

import './App.css'
import { Header } from './components/ui/Header'

import { CharacterGrid } from './components/characters/CharacterGrid'
import { Dictaphone } from './components/speech_recognition/speech_to_text'
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [query, setQuery] = useState('')
  return (
    <div className='container'>
      <Header />
      <Dictaphone getQuery={(q) => setQuery(q)} />
   {   <CharacterGrid
        isLoading={isLoading}
        items={items}
        query={query}
        setItems={setItems}
        setIsLoading={setIsLoading}
      />}
    </div>
  )
}

export default App
