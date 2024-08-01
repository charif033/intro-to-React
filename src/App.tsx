import { useState } from 'react'

import './App.css'

function App() {
  const [volume, setVolume] = useState(0)
  const [colormode, setColormode] = useState("light")

  const changeColormode = (value: boolean) => {
    value ? setColormode("dark") : setColormode("");
  }

  return (
    <>
      <div className={`${colormode} container`}>
        <h1>ควรดื่มน้ำวันละเท่าไหร่ ?</h1>
        <p>
          {volume.toFixed(2)} ml.
        </p>
        <input id="inputweight" type="number" placeholder='น้ำหนักของคุณ (kg)' min={0}
          onChange={(event) => setVolume(Number(event.target.value) * 2.2 * 30 / 2)} />
        <div>
          <input id='colormode' type="checkbox" onChange={(event) => changeColormode(event.target.checked)} />
          <label htmlFor="colormode">🌙 Darkmode</label>

        </div>
      </div>

    </>
  )
}

export default App
