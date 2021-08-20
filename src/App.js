import { useState } from "react";
import "./styles.css";

// Database
const genre = {
  Anime: [
    {
      name: "Jujutsu Kaisen",
      rating: "8/10",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Jujutsu_kaisen.jpg/220px-Jujutsu_kaisen.jpg"
    },
    {
      name: "Tokyo Revengers",
      rating: "9/10",
      image:
        "https://m.media-amazon.com/images/M/MV5BNTVkMzRlYmMtYzc1Ny00YTQ5LWI5ZTAtNTk3YmYxOWYwZGVlXkEyXkFqcGdeQXVyOTc4OTAwMjU@._V1_.jpg"
    },
    {
      name: "Attack On Titan",
      rating: "10/10",
      image: "https://wallpapercave.com/wp/wp8326458.jpg"
    }
  ],
  Cars: [
    {
      name: "Toyota Supra MK-IV",
      rating: "5/5",
      image:
        "https://i.pinimg.com/736x/1e/45/c3/1e45c3264c5e7e80ceec01826ed0149c--white-supra-tuner-cars.jpg"
    },
    {
      name: "Nissan Skline GTR R-34",
      rating: "4/5",
      image:
        "https://i.pinimg.com/originals/7b/5c/bb/7b5cbba77aa3237627320e424ac50cea.jpg"
    },
    {
      name: "Mazda RX-7",
      rating: "3/5",
      image:
        "https://images.hdqwalls.com/download/mazda-rx7-photography-4k-0y-1080x1920.jpg"
    }
  ]
};

// Converting object into array
const listOfgenre = Object.keys(genre);

// Functional component
export default function App() {
  // useState to set genre
  const [viewGenre, setGenre] = useState("Anime");
  return (
    <div className="App">
      <h1>🗻 Japanese Culture</h1>
      <h4>Checkout my favorites of Japan.</h4>

      {/* Looping over array of genre  */}
      {listOfgenre.map(function (i) {
        return (
          <button className="genre-btn" onClick={() => setGenre(i)}>
            {i}
          </button>
        );
      })}
      <hr></hr>
      {/* Looping over elements of genre */}
      {genre[viewGenre].map(function (e) {
        return (
          <div>
            <p className="header-Text">{e.name}</p>
            <p className="under-Text">{e.rating}</p>
            <img className="main-Img" src={e.image}></img>
            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}
