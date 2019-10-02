import React, { Component } from 'react';
import {connect} from 'react-redux';
import './CandidateProfile.css';
import axios from 'axios';



class CandidateProfile extends Component{
    state = {
        candidate: {}
    }

    async componentDidMount(){
        const userId = this.props.match.params.id;
        console.log(userId);
        const url = `${window.apiHost}/candidates/candidateProfile/${userId}`
        // const axiosResponse = await axios.get(url)
        // this.setState({
            //     candidate: {...axiosResponse.data[0], skills : JSON.parse(axiosResponse.data[0].skills)}
            // })
        const {data : [candidate]} = await axios.get(url)
        this.setState({
            candidate : {
                ... candidate, // spill in the contents from the axios requests, aliased as "candidate" for convenience 
                skills : JSON.parse(candidate.skills) // overwrite the "skills" key with parsed data
            }
        })
    }


    render(){
        // const userId = this.props.match.params['id']
        console.log(this.state)
        console.log(this.props)
        // const candidate = this.props.candidateData.find(candidate=>candidate.id === userId)
        // eslint-disable-next-line no-unused-vars
        const {nameFirst, nameLast,description, email, phone, most_recent_job_role, desired_job_role,years_of_experience,desired_salary_range,desired_location_city,skills,level_of_education,candidate_summary} = this.state.candidate
        console.log(skills)
        


        return(
            <div className='candidate-profile-full container'>
                
                <ul className="collection">
                    <li className="candidate-info collection-item avatar">
                        <img src="images/yuna.jpg" alt="" className="circle" />
                        <span className="title">{nameFirst} </span>
                        <p>{most_recent_job_role} <br/>
                            {desired_location_city}
                        </p>
                        {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a> */}
                    </li>
                    <li className="candidate-skills collection-item avatar">
                        <i className="material-icons circle">folder</i>
                        <span className="title">Skills</span>
                        <br/>
                        {skills}
                        {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a> */}
                    </li>
                    <li className="collection-item avatar">
                    <i className="material-icons circle green">insert_chart</i>
                    <span className="title">Candidate Summary</span>
                    <p>{description}</p>
                    {/* <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a> */}
                    </li>
                    {/* <li className="collection-item avatar">
                    <i className="material-icons circle red">play_arrow</i>
                    <span className="title">Title</span>
                    <p>First Line <br/>
                        Second Line
                    </p>
                    <a href="#!" className="secondary-content"><i className="material-icons">grade</i></a>
                    </li> */}
                </ul>
                <div className="row">
                    <input></input>
                    <input></input>
                </div>


                
            </div>
        )
    }
}

function mapStateToProps(state){
    return{
        candidateData: state.candidateData
    }
}


// export default CandidateProfile;
export default connect(mapStateToProps,null)(CandidateProfile)