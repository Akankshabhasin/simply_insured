import React, { Component } from 'react';
import  content from './content'
import './styles.css'

const Page = ({ offset, imageUrl, heading, description, gradient }) => (
    <div className={`contain ${gradient}`}>
        <p className="header">{heading}</p>

        <div className="innerContent">

            <span className={`stripe ${gradient}`} />

            <p className="content">{description}</p>

        </div>

    </div>
)

class Startup extends Component {
    render() {
        console.log(content);
        return (
            <div>
                <Page gradient="pink" heading={content.welcomeHead} description={content.welcomeCont} />
                <Page gradient="teal" heading={content.creditHead} description={content.creditCont} />
                <Page gradient="tomato" heading={content.transferHead} description={content.transferCont}/>
                <Page gradient="purple" heading={content.walletHead} description={content.walletCont} />
            </div>
        )
    }
}

export default Startup;