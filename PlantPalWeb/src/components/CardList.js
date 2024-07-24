//
// Dmitry Alexandrov
// B.RF Group
//
import React, { useState, useEffect } from "react"
import ListItem from "./ListItem"

export default function CardList() {
  const [text, setText] = useState("")
  const [cards, setCards] = useState([])
  const [filteredCards, setFilteredCards] = useState([])
  
  useEffect(() => {
    const url = 'http://89.169.161.205:8080/plants';
    fetch(url)
      .then(response => response.json())
      .then(data => {
        const plantNames = data.map(plant => ({id: plant.id, text: plant.name, temp: plant.temp,
          humidity: plant.humidity, description: plant.description, seconds: plant.seconds,
          waterinterval: plant.waterInterval}))
        setCards(plantNames)
        setFilteredCards(plantNames)
      });
  },[])


  async function loadName() {
    const url = 'http://89.169.161.205:8080/plants'
    const response = await fetch(url, {method: "GET", headers: {"Content-Type": "application/json"}})
    const json = await response.json()
    return json
  }


  function handleInput(e) {
    setText(e.target.value)
    if (e.target.value.length < 1) {      
      setFilteredCards(cards)
    } else {
      setFilteredCards(cards.filter(function(element) {
        return (element.text).indexOf(e.target.value) >= 0
      }))
    }
  }

  return (
    <div className="app">
      <p>{"PlantPal"}</p>
      <form className="add-card"> 
        <label class="">
          {<p>Поиск растения</p>}
          <input value={text} onInput={handleInput}/>
        </label>
      </form>

      <div className="card-list">
        {filteredCards.map((c) => (
          <ListItem key={c.id} card={c}/>
        ))}
      </div>
    </div>
  )
}
