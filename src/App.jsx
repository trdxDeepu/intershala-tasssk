import { useEffect,useState } from "react";


function App() {
    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState("");
  
    useEffect(() => {
      async function fetchData() {
        const res = await fetch("https://api.punkapi.com/v2/beers");
        const data = await res.json();
        setData(data);
      }
      fetchData();
    }, []);
  
    const filteredData = data.filter((beer) =>
      beer.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

	return (
        <div className="App">
        <header className="App-header">
          <h1>Beer Catalog</h1>
          <input
            type="text"
            placeholder="Search beers"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="input"
          />
        </header>
        <div className="card-container">
          {filteredData.map((beer) => (
            <div className="card" key={beer.id}>
              <img src={beer.image_url} alt={beer.name} />
              <h2>{beer.name}</h2>
              <p>{beer.tagline}</p>
              <p>{beer.description}</p>
            </div>
          ))}
        </div>
      </div>
  
	);
}

export default App;