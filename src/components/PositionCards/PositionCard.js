import React, { Component } from 'react';

class PositionCard extends Component{
    render(){
        return(
            <div className="position-card container">
                <div className="row">
                    <div className="col s12">
                        <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{this.props.positions.title}</span>
                            <h6>{this.props.positions.company}.</h6>
                            <p>{this.props.positions.description}.</p>
                            <p>{this.props.positions.skills}</p>
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