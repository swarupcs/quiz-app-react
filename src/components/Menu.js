import "../App.css";
import { useContext } from "react";
import { GameStateContext } from "../helpers/Context";

function Menu() {
  const { gameState, setGameState } = useContext(GameStateContext);
  return (
    <div className="Menu">
      <label htmlFor="">Enter Your Name: </label>
      <input type="text" placeholder="Ex. John Smith" />
      <button
        onClick={() => {
          setGameState("Playing");
        }}
      >
        Start Quiz
      </button>
    </div>
  );
}

export default Menu;
