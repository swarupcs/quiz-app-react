import "../App.css"

function Menu() {
    return (
        <div className="Menu">
        <label htmlFor="">Enter Your Name: </label>
        <input type="text" placeholder="Ex. John Smith" />
            <button>Start Quiz</button>
        </div>
    )
}

export default Menu;