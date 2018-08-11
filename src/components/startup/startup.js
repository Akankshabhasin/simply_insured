import React, { Component } from 'react';
import  content from './content'
import './startup.css'

const Page = ({iconClass, offset, imageUrl, heading, description, gradient }) => (
    <div className={`contain ${gradient}`}>
        <div className="container">
            <p className="header">{heading}</p>
            <hr className="style-two"/>
            <div className="innerContent">
                <i className={`icon-startup ${iconClass}`}></i>


                <p className="content">{description}</p>

            </div>
        </div>
    </div>
)

class Startup extends Component {
    render() {
        console.log(content);
        return (
            <div>
                <Page iconClass="fas fa-piggy-bank" gradient="pink" heading={content.welcomeHead} description={content.welcomeCont} />
                <Page iconClass="far fa-credit-card" gradient="teal" heading={content.creditHead} description={content.creditCont} />
                <Page iconClass="fas fa-money-bill-wave" gradient="tomato" heading={content.transferHead} description={content.transferCont}/>
                <Page iconClass="fas fa-wallet" gradient="purple" heading={content.walletHead} description={content.walletCont} />
                <div className="contain green">
                    <div className="container">
                        <button type="button" className="custom-btn btn btn-primary">Get Started!</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default Startup;