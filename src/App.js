import './App.css';
import Movies from './components/Movies';

  
function App() {

  const movies = [
    {
      name: "Transformers",
      year: "2007",
      rating: "PG-13",
      image: "https://images.app.goo.gl/EJrZeDGXiKRSfJFFA"

    },
    {
      name: "John Wick Chapter 4",
      year: "2023",
      rating: "R",
      image: "https://images.app.goo.gl/aotKfwvxodDxyAgBA"

    },
    {
      name: "Rush",
      year: "2013",
      rating: "R",
      image: "https://images.app.goo.gl/pqCWo7KSZjtcJNnA8"

    },
    {
      name: "Man on fire",
      year: "2004",
      rating: "R",
      image: "https://images.app.goo.gl/s8CPv49YK8jcbLmZ8"

    },
    {
      name: "Sicario",
      year: "2015",
      rating: "R",
      image: "https://images.app.goo.gl/wcpQSzjW7y5JwBTu9"

    },
  ]


  return (
    <div className="App">
        <h1>Movies</h1>
        <Movies movies={movies.name}/>
      
    </div>
  );
}



export default App;
