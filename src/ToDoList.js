import { Component } from "react";

export class ToDoList extends Component{
    constructor() {
        super();

        this.state = {
            userInput: "",
            list: []
        }
    }

    onChangeEvent(e) {
        this.setState({userInput: e})
        console.log(e)
    }

    addItem(input) {
        if (input === "") {
            alert("!!!")
        } else {
            let listArray = this.state.list;
            listArray.push(input);
            this.setState({list: listArray, userInput: ""});
            console.log(listArray)
        }
        
    }

    crossedWord(e) {
        const li = e.target;
        li.classList.toggle("crossed");

    }

    deleteAll() {
        let listArray = this.state.list;
        listArray = [];
        this.setState({list: listArray});
    }

    noRestart(e) {
        e.preventDefault();
    }

    render(){
        return (
            <div >
                <form onSubmit={this.noRestart}>

                    <div className="inputField">
                        <input placeholder="..." type="text"
                        onChange={(e) => {this.onChangeEvent(e.target.value)}}
                        value={this.state.userInput}/>
                    

                        <button className="add" onClick={() => this.addItem(this.state.userInput)}>Add</button>

                    </div>
                    
                
                    <ul>
                        {this.state.list.map((item, index) => (
                            <li onClick={this.crossedWord} key={index}>
                                ✔ {item}
                            </li>
                        ))}
                    </ul>

                    <div className="buttonTwo">
                        <button className="delete" onClick={() => this.deleteAll(this.state.userInput)}>Delete all</button>
                    </div>

                </form>
            </div>
        )
    }
}