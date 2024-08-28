import React from 'react'
import { useState } from 'react';

const Content = () => {
    const [name, setName] = useState('Dave');
    const handleRandomWord = () => {
        const names = ['Anthony', 'Patrick', 'Aidan', 'Alessio']
        const int = Math.floor(Math.random() * 4);
        setName(names[int]);
      }

      const handleClick = () => {
        console.log('You clicked')
      }
      const handleClick2 = (names) => {
        console.log(`${names} was clicked`)
      }
      const handleClick3 = (e) => {
        console.log(e.target.innerText)
      }
      
  return (
    <main>
        <p onDoubleClick={handleClick}>
            Hello {name}!
        </p>
        <button onClick={handleRandomWord}>Change Name</button>
        <button onClick={() => {handleClick2('Dave')}}>Click It</button>
        <button onClick={(e) => {handleClick3(e)}}>Click It</button>
    </main>
  )
}

export default Content