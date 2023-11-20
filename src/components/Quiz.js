import "../App.css";
import { Questions } from "../helpers/Questions";
import { useState } from "react";

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("");

    const chooseOption = (option) => {
        setOptionChosen(option)
    }
    return(
        <div className="Quiz">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div className="questions">
                <button onClick={() => {chooseOption('optionA')}} >{Questions[currentQuestion].optionA} </button>
                <button onClick={() => {chooseOption('optionB')}} >{Questions[currentQuestion].optionB} </button>
                <button onClick={() => {chooseOption('optionC')}} >{Questions[currentQuestion].optionC} </button>
                <button onClick={() => {chooseOption('optionD')}} >{Questions[currentQuestion].optionD} </button>
            </div>
            {optionChosen}
        </div>
    )
}

export default Quiz; 