import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class CandidateHomePage extends Component{
    
    render(){
        return(
            //ALL OPEN POSITIONS
                //POSITION DESC
                //APPLY
            //SEARCH BAR
            //UPDATE PROFILE
            <div className="container">
                <h1>Candidate Home Page</h1>
                <div className="row">
                    <Link to='/candidateHome/createprofile' className="waves-effect waves-light btn-large blue-grey darken-2"><i className="material-icons right"></i>Create Profile</Link>
                </div>

            </div>
            
        )
    }
}


export default CandidateHomePage;
// export default connect(mapStateToProps)(CandidateHomePage);