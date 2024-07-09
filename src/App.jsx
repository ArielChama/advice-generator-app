import { useEffect, useState } from 'react'
import './App.css'

function App() {
  const [data, setData] = useState(null)

  const fetchAllData = async () => {
    try {
      const response = await fetch('https://api.adviceslip.com/advice')
      const data = await response.json()

      if (!data)
        throw 'Problema na requisição'

      setData(data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchAllData()
  }, [])

  console.log(data)

  if (data) {
    return (
      <>
        <div className="container">
          <div className="card">
            <p className="idAdvice">ADVICE #{data.slip.id}</p>
            <h2 className="advice">
              "{data.slip.advice}"
            </h2>

            <hr className="line" />

            <button className="button" onClick={fetchAllData}>
              <img src="/images/icon-dice.svg" alt="" />
            </button>
          </div>
        </div>

        <div class="attribution">
          Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank">Frontend Mentor</a>.
          Coded by <a href="#">Ariel CHama</a>.
        </div>
      </>
    )
  }
}

export default App
