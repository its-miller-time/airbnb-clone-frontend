import React, { Component } from 'react';
import './PositionCard.css'

class PositionCard extends Component{
    render(){

        return(
            <div className="container">
                <div className="row">
                    <div className="position-card-container col s12">
                        <div className="position-card card">
                        <div className="card-content white-text">
                            <h5 className="position-card-title card-title">{this.props.position.title}</h5>
                            <h6>{this.props.position.company_name}.</h6>
                            <p>{this.props.position.description}.</p>
                            <p>Years of Experience: {this.props.position.years_of_experience}</p>
                        </div>
                        {/* <div className="card-action">
                            <a href="#">Website</a>
                            <a href="#">Apply</a>
                        </div> */}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PositionCard;