import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import './CandidateProfile.css'



class CandidateProfile extends Component{
    state = {
        username: ''
    }

    render(){
        const username = this.props.match.params['userName']
        const candidate = this.props.candidateData.find(candidate=>candidate.username === username)
        const {nameFirst, nameLast, email, phone, most_recent_job_role, desired_job_role,years_of_experience,desired_salary_range,desired_location_city,skills,level_of_education,candidate_summary} = candidate
        const skillsArray = skills.map((skill,i)=>{
            return <p key={i}>{skill}</p>
        })


        return(
            <div className='container'>
                
                <ul className="collection">
                    <li className="candidate-info collection-item avatar">
                        <img src="images/yuna.jpg" alt="" className="circle" />
                        <span className="title">{nameFirst} {nameLast} </span>
                        <p>{email} <br/>
                            {phone}
                        </p>
                        {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a> */}
                    </li>
                    <li className="candidate-skills collection-item avatar">
                        <i className="material-icons circle">folder</i>
                        <span className="title">Skills</span>
                        <br/>
                        {skillsArray}
                        {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a> */}
                    </li>
                    <li className="collection-item avatar">
                    <i className="material-icons circle green">insert_chart</i>
                    <span className="title">Candidate Summary</span>
                    <p>{candidate_summary}</p>
                    {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a> */}
                    </li>
                    <li className="collection-item avatar">
                    <i className="material-icons circle red">play_arrow</i>
                    <span className="title">Title</span>
                    <p>First Line <br/>
                        Second Line
                    </p>
                    {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a> */}
                    </li>
                </ul>


                
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        candidateData: state.candidateData
    }
}

function mapDispatchtoProps(dispatch){
    return bindActionCreators({

    })
}

// export default CandidateProfile;
export default connect(mapStateToProps,null)(CandidateProfile)