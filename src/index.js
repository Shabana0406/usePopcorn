import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import StarRating from "./StarRating";
import App from "./App";
// function Test() {
//   const [movieRate, setMovieRate] = useState(0);
//   return (
//     <div>
//       <StarRating color="blue" onSetRating={setMovieRate} />
//       <p>The movie was rated {movieRate} star</p>
//     </div>
//   );
// }

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
