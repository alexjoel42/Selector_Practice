// playground.jsx
import React, {useState} from "react";

import './playground.css';



export default function Test_Playground() {
  console.log('Test_Playground component is rendered!');
  // This is where you define JS variables. Unlike 

  const [num, setNum] = useState(0);
  const handleClick = () => {
      setNum(num + 1);
  };

  const zeroclick = () => {
    setNum(0);
  };

  return (
    <div> 
       
    <h1> <a href="https://www.w3schools.com/"> Heading 1 with a link</a></h1>
    <h2 className= "Class_Reference">Heading 2 is just a normal heading, but it's green! </h2>
    <p> Buttons below count a number and reset it to zero</p>
    <button onClick={handleClick}>
                Add one, current count is {num}
            </button>
    <button onClick={zeroclick}>Reset to zero</button>
    
    <h2>This is a dropdown menu, it's pretty tricky to select</h2>
    <div class="dropdown">
  <button class="dropbtn">Dropdown with three options</button>
  <div class="dropdown-content">
    <a href="https://www.vice.com/en/article/moo-deng-baby-hippo-meme/"> Moodeng</a>
    <a href="https://www.youtube.com/watch?v=23TbvrBHKMM">Pesto</a>
    <a href="./">back home</a>
  </div>
</div>

  

       
    </div>
  );
};