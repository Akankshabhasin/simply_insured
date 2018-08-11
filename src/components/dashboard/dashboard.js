import React, {Component} from 'react'
import './dashboard.css'


class Dashboard extends Component{
    constructor(props){
        super(props);
        this.state = {
            padd: -1,
        }
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
    };
    calcPadding = () => {
        if (padd===-1) {
            return;
        }
        let padd = document.body.clientHeight * 0.15;
        padd = (padd < 130)? 130: padd;
        this.setState({padd: padd})
    };

    componentDidMount(){

        this.calcPadding();
    };
    render(){
        return (
            <div className="bigContainer-dashboard" style={{paddingTop: this.state.padd}}>
                <nav className="custom-nav navbar fixed-top navbar-expand-lg navbar-light bg-light">
                    <a className="navbar-brand custom-nav-brand" href="#">DBank</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                        <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
                            <li className="nav-item ">
                                <a className="nav-link active" href="#">Dashboard</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Credit</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Transfer</a>
                            </li>
                        </ul>
                        <button className="btn btn-outline-success my-2 my-sm-0 linkTransform" type="submit">Logout</button>
                    </div>
                </nav>

                <div className="container">
                    <h1 className="display-4 greeter"> {this.getGreeting()}, Naman Manchanda</h1>

                    <hr className="style-two"/>

                    <p> Here's a quick look: </p>
                    <p> <span> Wallet: </span>{"23 ETH"} </p>
                    <p> <span> Credit: </span>{"9"} out of {"60"} ETH Used</p>

                    <div className="dashboard-row row">
                        <div className="option-dashboard col-sm-12 col-md-6">
                            <div className="linkTransform">
                                <i className="icon-dashboard far fa-credit-card"/>
                                <br/>
                                Manage your credit
                            </div>
                        </div>

                        <div className="option-dashboard col-sm-12 col-md-6">
                            <div className="linkTransform">
                                <i className="icon-dashboard fas fa-money-bill-wave-alt"/>
                                <br/>
                                Send/Receive Money
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Dashboard;