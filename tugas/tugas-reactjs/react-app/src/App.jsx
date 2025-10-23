import reactLogo from './assets/img/logo.png'
import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [timer, setTimer] = useState(new Date().toLocaleTimeString());
  // list checkbox didapatkan dari variabel berisi array seperti kode berikut ini:
  let thingsToDo = "Belajar GIT & CLI, Belajar HTML & CSS, Belajar Javascript, Belajar ReactJS Dasar, Belajar ReactJS Advance"
  let thingsToDoArray = thingsToDo.split(', ')
  const [countdown, setCountdown] = useState(95);
  // load checked state from localStorage (if any)
  const [checked, setChecked] = useState(() => {
    try {
      const raw = localStorage.getItem('todoChecked')
      return raw ? JSON.parse(raw) : {}
    } catch {
      return {}
    }
  })

  function toggleChecked(i) {
    setChecked(prev => ({ ...prev, [i]: !prev[i] }))
  }

  // update current time while countdown is running
  useEffect(() => {
    if (countdown <= 0) return
    const timerId = setInterval(() => {
      setTimer(new Date().toLocaleTimeString())
    }, 1000)
    return () => clearInterval(timerId)
  }, [countdown])

  useEffect(() => {
    if (countdown <= 0) return
    const countdownId = setInterval(() => {
      setCountdown((prev) => prev - 1)
    }, 1000)
    return () => clearInterval(countdownId)
  }, [countdown]);

  // persist checked state while countdown > 0
  useEffect(() => {
    if (countdown <= 0) return
    try {
      localStorage.setItem('todoChecked', JSON.stringify(checked))
    } catch {
      // ignore
    }
  }, [checked, countdown])

  // when countdown reaches 0 -> clear timer display and clear localStorage
  useEffect(() => {
    if (countdown <= 0) {
      setTimer(null)
      try {
        localStorage.removeItem('todoChecked')
      } catch {
        // ignore
      }
      setChecked({})
    }
  }, [countdown])

  
  return (
    // Card should always render; timer and countdown are conditional

    (
      <>
        {countdown > 0 && (
          <>
            <h1>Now At - {timer}</h1>
            <h2>Countdown: {countdown} seconds</h2>
          </>
        )}

        <div className="card">
          <img src={reactLogo} className="logo" alt="logo" />

          <h2 className="title">THINGS TO DO</h2>
          <p className="subtitle">During bootcamp in sanbercode</p>
          <hr />

          <div className="list">
            {thingsToDoArray.map((item, index) => (
              <div className="option" key={index}>
                <input type="checkbox" id={`todo-${index}`} checked={!!checked[index]} onChange={() => toggleChecked(index)} />
                <label htmlFor={`todo-${index}`}>{item}</label>
              </div>
            ))}
          </div>

          <button className="send">SEND</button>

        </div>
      </>
    )
  );
}

export default App
