import React, {Component} from 'react';
import {Link} from 'react-router-dom';
//IMPORT ACTION CREATOR HERE

//IMPORT STATEFUL COMPONENTS HERE

class Main extends Component{
    sate = {

    }

    render(){
        return(
            <div className="container center-align">
                <div>
                    <h1>Main Page</h1>
                </div>
                <div className="row">
                    <div className='row'>
                        <Link to='/employerHome/positions' className="employer-button waves-effect waves-light btn-large blue-grey darken-2"><i className="material-icons right"></i>Employer</Link>
                    </div>
                    <div className='row'>
                        <Link to ='/candidateHome' className="job-seeker-button waves-effect waves-light btn-large blue-grey darken-2"><i className="material-icons right"></i>Job Seeker</Link>
                    </div >
                    
                </div>
            </div>
        )
    }

}

export default Main;
// export default connect(mapStateToProps,mapDispatchToProps)(Main)