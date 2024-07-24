//
// Dmitry Alexandrov
// B.RF Group
//
import React, { useEffect, useState } from "react"

export default function ListItem({ card, selected, onRemove, onEdit, onSelect }) {
  let cname = "card-item"
  // async function returnIdCat() {
  //   let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
  //   let response = await fetch(url);

  //   let commits = await response.json(); // читаем ответ в формате JSON

  //   return commits[0].author.login;
  // }
  const [flag, setText] = useState(false)
  if (selected === true) {
    cname = "card-selected-item"
  }

  function plant() {
    setText(!flag)
  }
  
  return (
    <div className={cname}>
      <p>{card.text}</p>
      <p>{card.temp}</p>    
      <p>{card.humidity}</p>
      <p>{card.waterinterval} days</p>
      <p>{card.seconds} s</p>

    </div>
  )
}
