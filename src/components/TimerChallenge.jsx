 import { useState, useRef } from "react";
  import ResultModal from "./ResultModal.jsx";

export default function TimerChallenge({title, targetTime}) {

      const timer = useRef()
      const dialog = useRef()
      
      const [timeRemainning, setTimeRemainnig] = useState(targetTime * 1000)

     // let timer ;

     const timerIsActive = timeRemainning > 0 && timeRemainning < targetTime * 1000

      if (timeRemainning <= 0) {
    clearInterval(timer.current)
    dialog.current.open()
  }

  function handleReset() {
    setTimeRemainnig(targetTime * 1000)
    
  }

  function handleStart() {
   timer.current =  setInterval(() => {
      setTimeRemainnig ((prevTimeRemainning) => prevTimeRemainning - 10)
    }, 10);
    
  }


  function handleStop() {
    dialog.current.open()
    clearInterval(timer.current)
    
  }

    return (
    <>
      
      <ResultModal ref={dialog} 
      targetTime={targetTime} 
      remainningTime={timeRemainning} 
       onReset={handleReset} /> 

        <section className="challenge">
      <h1>{title}</h1>
    
      <p className="challenge-time">
        {targetTime} second{targetTime > 1 ? 's' : ''}
      </p>
      <p>
        <button onClick={timerIsActive ? handleStop : handleStart}>
            { timerIsActive ? 'Stop' : 'Start'} Challenge
        </button>
      </p>

      <p className={timerIsActive ? 'active' : undefined}>
        { timerIsActive ? 'Time is running....' : 'Time inactive'}
      </p>
        </section>
        </>
    )
    
}