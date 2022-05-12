import './App.css';
import { useState, useEffect } from "react"
function App() {

  const [starships, setStarships] = useState(null)

  async function getStarships(url) {
    console.log(url)
    let response = await fetch(
       url
    )
    response = await response.json()
    console.log("response obj", response)
    // let results = response.results
    // console.log("resultsarray", results)
    setStarships(response)
    await console.log("starships variable", starships)
  }

  useEffect(() => { getStarships("https://swapi.dev/api/starships/") }, [])

  if (starships) {
  return (
    <div className="App">
      <div className="stack">
        <div className="top">
          <img src="https://i.pinimg.com/474x/49/79/8b/49798b6dc0063851ebf6b36ada034614--tee-shirts-art-ideas.jpg" />
          <h1>STARWARS SHIPS!!</h1>
        </div>
        <p>Die, you rebel scum.</p>
      </div>
      <div className="links">
        {(!!starships.previous) ? <div onClick={() => {getStarships(starships.previous)}}>Previous Page</div> : <p>You are on the first page of results</p>}
        {(!!starships.next) ? <div onClick={() => {getStarships(starships.next)}}>Next Page</div> : <p>You are on the last page of results</p>}
      </div>
      <div className="display">
        { starships.results.map((ship, index) => {
          return (
            <div className="card" key={index}>
              <h3>{ship.name}</h3>
              <div>{ship.manufacturer}</div>
              </div>
          )
        })
        }
      </div>
    </div>
  );
      } else {return <h3>HOLD UP, JEDI</h3>}
}

export default App;

{
  // MGLT: "60"
  // cargo_capacity: "3000000"
  // consumables: "1 year"
  // cost_in_credits: "3500000"
  // created: "2014-12-10T14:20:33.369000Z"
  // crew: "30-165"
  // edited: "2014-12-20T21:23:49.867000Z"
  // films: (3)['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/6/']
  // hyperdrive_rating: "2.0"
  // length: "150"
  // manufacturer: "Corellian Engineering Corporation"
  // max_atmosphering_speed: "950"
  // model: "CR90 corvette"
  // name: "CR90 corvette"
  // passengers: "600"
  // pilots: []
  // starship_class: "corvette"
  // url: "https://swapi.dev/api/starships/2/"
}
