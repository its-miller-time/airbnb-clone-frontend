import React, { Component } from 'react';

class CandidateCard extends Component{
    constructor(props){
        super(props)
        this.state = {}
    }
    render(){
        console.log(this.props.candidate)
        return(
            <div className="container">
                <div className="row">
                    <div className="col s12">
                        <div className="card blue-grey darken-1">
                        <div className="card-content white-text">
                            <span className="card-title">{this.props.candidate.nameFirst} {this.props.candidate.nameLast}</span>
                            <p>{this.props.candidate.email}.</p>
                            <p>{this.props.candidate.phone}.</p>
                        </div>
                        <div className="card-action">
                            {/* <a href="#">LinkedIn</a>
                            <a href="#">Resume</a> */}
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default CandidateCard;
