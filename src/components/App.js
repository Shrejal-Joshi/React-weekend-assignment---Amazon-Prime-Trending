import React, {Component, useState} from "react";
import '../styles/App.css';


const App = (props) => {

  const [slideIndex, setSlideIndex] = useState(0);
  const [getSlide, setSlide] = useState(props.slides[0])
  const [restart, setRestart] = useState(true);
  const [prev, setPrev] = useState(true);
  const [next, setNext] = useState(false);

  function nextSlide()
  {
    setSlideIndex(slideIndex +1);
    setSlide(props.slides[slideIndex + 1]);
    if(slideIndex === 3)
    {
      setNext(true);
    }
    if(slideIndex > -1)
    {
      setPrev(false);
      setRestart(false);
    }

  }
  function prevSLide()
  {
    setSlideIndex(slideIndex - 1);
    setSlide(props.slides[slideIndex - 1]);
    setNext(false);
    if(slideIndex === 1)
    {
      setPrev(true);
      setRestart(true);
    }
  }
  function restartSlide ()
  {
    setSlideIndex(0);
    setSlide(props.slides[0]);
    setNext(false);
    setPrev(true);
    setRestart(true);
  }
  console.log(getSlide);

  return (
   
    <>
    
      <h1 data-testid="title">{getSlide.title}</h1>
      <p data-testid="text">{getSlide.text}</p>

      <button 
        data-testid="button-restart"
        onClick={() =>restartSlide()}
        disabled = {restart}>
        Restart
      </button>

      <button 
        data-testid="button-prev"
        onClick={() =>prevSLide()}
        disabled = {prev}>
        Previous
      </button>
      <button 
        data-testid="button-next"
        onClick={() =>nextSlide()}
        disabled = {next}>
        Next
      </button>
    </>
  )
}


export default App;
