import './App.css';
const api = {
  key: "88a27d70ae10bfa43afa44e64fcd9c4c",
  base: "https://api.openweathermap.org/data/2.5/"
}
function App() {
  return (
    <div className="app">
      <main>
        <div className="search-box">
          <input type="text" className="search-bar" placeholder="search..." />     </div>
      </main>
    </div>
  );
}

export default App;
