import React, { Component } from 'react';
import './CandidateCard.css'

class CandidateCard extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        console.log(this.props.candidate)
        return(
                <div className=" container">
                    <div className="row">
                        <div className="candidate-card-container col s12">
                            <div className="candidate-card card">
                            <div className="card-content white-text">
                                <span className="card-title">{this.props.candidate.nameFirst} {this.props.candidate.nameLast}</span>
                                <p>{this.props.candidate.desired_job_role}.</p>
                                <p>{this.props.candidate.desired_location_city}.</p>
                            </div>
                            {/* <div className="card-action">
                                <a href="#">LinkedIn</a>
                                <a href="#">Resume</a>
                            </div> */}
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
}

export default CandidateCard;
