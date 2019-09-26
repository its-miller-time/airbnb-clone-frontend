import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import CandidateCard from './CandidateCard';
import CreateProfile from './CreateUserProfile';
import { Link } from 'react-router-dom';

class CandidatesPage extends Component{
    render(){
        console.log(this.props)
        const candidates = this.props.candidateData.map((candidate,i)=>{
            return(
                //THIS IS WHERE EACH CANDIDATE CARD IS GENERATED
                <Link key ={i} to={`/candidateProfile/${candidate.username}`}>
                    <CandidateCard candidate={candidate} key={i} />
                </Link>
            )
        })
        
        return(
            <div>
                <h1>Candidates Page</h1>
                {/* <CreateProfile /> */}
                {candidates}
            </div>

        )
    }
}

function mapStateToProps(state){
    return {
        candidateData: state.candidateData
    }
}


// export default CandidatesPage
export default connect(mapStateToProps,null)(CandidatesPage)