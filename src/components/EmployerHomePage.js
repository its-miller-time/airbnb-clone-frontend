import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class EmployerHomePage extends Component{
    render(){
        console.log('rendering employer home page')
        return(
            //ALL OPEN POSITIONS
                //POSITION DESC
                //APPLY
            //SEARCH BAR
            //UPDATE PROFILE
            <div className="container">
                <h1>Employer Home Page</h1>
                <div className="row">
                    <Link to='/employerHome/positions' className="waves-effect waves-light btn-large blue-grey darken-2"><i className="material-icons right"></i>Positions</Link>
                </div>
                <div className="row">
                    <Link to='/addPosition' className="waves-effect waves-light btn-large blue-grey darken-2"><i className="material-icons right"></i>Add Position</Link>
                </div>
            </div>
            
        )
    }
}

// function mapStateToProps(state){

// }

export default EmployerHomePage;
// export default connect(mapStateToProps)(CandidateHomePage);