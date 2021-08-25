import { useState } from "react";
import "./styles.css";

// Database
const genre = {
  Anime: [
    {
      name: "Jujutsu Kaisen",
      rating: "8/10",
      image:
        "https://upload.wikimedia.org/wikipedia/en/thumb/4/46/Jujutsu_kaisen.jpg/220px-Jujutsu_kaisen.jpg",
      description:
        "A boy eats the fingers of a high grade curse then helps the curse teaching academy by eating every finger and finish the curse by sacrificing his own life."
    },
    {
      name: "Tokyo Revengers",
      rating: "9/10",
      image:
        "https://m.media-amazon.com/images/M/MV5BNTVkMzRlYmMtYzc1Ny00YTQ5LWI5ZTAtNTk3YmYxOWYwZGVlXkEyXkFqcGdeQXVyOTc4OTAwMjU@._V1_.jpg",
      description:
        "A guy who heard about her school love who died being caught in a war between two gangs goes to the past to change the events and stop the gang war."
    },
    {
      name: "Attack On Titan",
      rating: "10/10",
      image: "https://wallpapercave.com/wp/wp8326458.jpg",
      description:
        "People hide from the titans out side the wall who are thursty for human blood, but one day the wall breaks."
    }
  ],
  Cars: [
    {
      name: "Toyota Supra MK-IV",
      rating: "5/5",
      image:
        "https://i.pinimg.com/736x/1e/45/c3/1e45c3264c5e7e80ceec01826ed0149c--white-supra-tuner-cars.jpg",
      description:
        "A total beast of a car, most popular in the tunung world, the first thought when people talk about the world of tuner cars"
    },
    {
      name: "Nissan Skline GTR R-34",
      rating: "4/5",
      image:
        "https://i.pinimg.com/originals/7b/5c/bb/7b5cbba77aa3237627320e424ac50cea.jpg",
      description:
        "Tuner Car that got famoused for challenging super cars for its speed and Paul Walker, Ofcourse."
    },
    {
      name: "Mazda RX-7",
      rating: "3/5",
      image:
        "https://images.hdqwalls.com/download/mazda-rx7-photography-4k-0y-1080x1920.jpg",
      description:
        "The loudest of the bunch. The bomb itself known for the bursts it makes while reving."
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
      <h1>
        <span role="img">🗻</span> Japanese Culture
      </h1>
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
            <img alt="" className="main-Img" src={e.image}></img>
            <div className="description-Text">{e.description}</div>

            <hr></hr>
          </div>
        );
      })}
    </div>
  );
}
