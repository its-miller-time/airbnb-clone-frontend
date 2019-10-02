import React, {Component} from 'react';
import {connect} from 'react-redux';
import CandidateCard from '../Utility/CandidateCard';
import { Link } from 'react-router-dom';
import axios from 'axios';

class CandidatesPage extends Component{
    
    state = {
        candidates: []
    }

    async componentDidMount(){
        const candidatesUrl = `${window.apiHost}/candidates/position-candidates`
        const axiosResp = await axios.get(candidatesUrl)
        console.log(axiosResp.data)
        const candidates = axiosResp.data
        this.setState({
            candidates: candidates
        })
    }
    
    render(){
        console.log(this.state)
        const candidatesArr = this.state.candidates.map((candidate,i)=>{
            return(
                //THIS IS WHERE EACH CANDIDATE CARD IS GENERATED
                <Link key ={i} to={`/candidateProfile/${candidate.id}`}>
                    <CandidateCard candidate={candidate} key={i} />
                </Link>
            )
        })
        
        return(
            <div className="main">
                <div className="">
                {/* <h1>Candidates Page</h1> */}
                {/* <CreateProfile /> */}
                {candidatesArr}
                </div>
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