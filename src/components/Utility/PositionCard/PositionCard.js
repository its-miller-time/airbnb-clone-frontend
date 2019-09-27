import React, { Component } from 'react';

class PositionCard extends Component{
    render(){

        return(
            <div className="position-card container">
                <div className="row">
                    <div className="col s12">
                        <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{this.props.position.title}</span>
                            <h6>{this.props.position.company_name}.</h6>
                            <p>{this.props.position.description}.</p>
                            <p>{this.props.position.years_of_experience}</p>
                        </div>
                        <div className="card-action">
                            {/* <a href="#">Website</a>
                            <a href="#">Apply</a> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default PositionCard;