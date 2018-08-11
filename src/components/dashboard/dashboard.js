import React, {Component} from 'react'
import './dashboard.css'


class Dashboard extends Component{
    constructor(props){
        super(props);
    }
    getGreeting = () => {
        let hours = new Date().getHours();
        if (hours <= 12){
            return "Good Morning"
        }
        else if (hours <= 17){
            return "Good Afternoon"
        }
        else if (hours <= 20){
            return "Good Evening"
        }
        else{
            return "Good Night"
        }
    }
    render(){
        return (
            <div className="bigContainer">
                <div className="container">
                    <h1 className="display-4 greeter"> {this.getGreeting()}, Naman Manchanda</h1>

                    <hr className="style-two"/>

                    <p className="start"> Here's a quick look: </p>
                    <p> <span> Wallet: </span>{"23 ETH"} </p>
                    <p> <span> Credit: </span>{"9"} out of {"60"} ETH Used</p>

                    <div className="row">
                        <div className="col-sm-12 col-md-6">
                            <img src="card.svg" alt="Credit"/>
                        </div>
                        <div className="col-sm-12 col-md-6">
                            <i className="icon-dashboard fas fa-money-bill-wave-alt"></i>
                            Transfer <br/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;