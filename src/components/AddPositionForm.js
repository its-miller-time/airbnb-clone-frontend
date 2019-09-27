import React, {Component} from 'react';
import {connect} from 'react-redux';
import M from 'materialize-css';
import { bindActionCreators } from 'redux';
import addPositionAction from '../actions/addPositionAction'


class AddPositionForm extends Component{

    state = {
        company_name: "",
        title:"",
        skills: [],
        employer_position: "",
        years_of_experience: "",
    }

    submitPositionsForm = (e) => {
        e.preventDefault();
        console.log(e)
        console.log('POSITION SUBMIT CLICKED')
        const positionData = {...this.state}
        this.props.addPositionAction(positionData)
    }

    handlePositionChange = (e) =>{
        console.log(e.target.value)
        this.setState({title: e.target.value})
    }

    handleExperienceChange = (e) => {
        console.log(e.target.value)
        this.setState({years_of_experience: e.target.value})
    }

    handleCompanyNameChange = (e) => {
        console.log(e.target.value)
        this.setState({company_name: e.target.value})
    }
    
    componentDidMount(){
        M.AutoInit();
        document.addEventListener('DOMContentLoaded', function() {
            const elems = document.querySelectorAll('.chips');
            // eslint-disable-next-line no-unused-vars
            const instances = M.Chips.init(
                elems, {
                    onChipAdd: handleChip,
                    onChipDelete: handleChip
                }
                );
          });

        const handleChip = (e) =>{
            // console.log((e[0].M_Chips.chipsData))
            let chipData = (e[0].M_Chips.chipsData).map((chip)=>{
                return (chip.tag.toLowerCase())
            })
            this.setState({skills:chipData})
          }
    }
    
    render(){
        return (
            <div className="container">
                <h1>Add A Position</h1>
                    <form className="col s12">
                        <div className="row">
                            <div className="input-field col s12">
                                <input value={this.state.company_name} onChange={this.handleCompanyNameChange} placeholder="Company Name" id="company-name" type="text" className="validate"/>
                            </div>
                            <div className='input-field col s12'>
                                <select id='positionTitle' value={this.state.title} onChange={this.handlePositionChange} ref="select">
                                    <option value="">What Position Are You Hiring?</option>
                                    <option value="Software Developer">Software Developer</option>
                                    <option value="Mobile Application Developer">Mobile Application Developer</option>
                                    <option value="Data Scientist">Data Scientist</option>
                                    <option value="Project Manager">Project Manager</option>
                                    <option value="Business Development Rep">Business Development Rep</option>
                                </select>
                            </div>
                            <div className='input-field col s12'>
                                <select id='yearsExperience' value={this.state.years_of_experience} onChange={this.handleExperienceChange} ref="select">
                                    <option value="">Years of Experience?</option>
                                    <option value="1">0-1</option>
                                    <option value="2">2-3</option>
                                    <option value="3">3-5</option>
                                    <option value="4">5-10</option>
                                    <option value="5">10+</option>
                                </select>
                            </div>
                            <div className='input-field col s12' >
                                <div id="skills" className="chips chips-autocomplete"></div>
                            </div>
                            <button className="btn waves-effect waves-light blue-grey darken-1" type="submit" onClick={this.submitPositionsForm} name="action">Submit
                            </button> 
                        </div>
                    </form>
            </div>
        )
    }
}

// function mapStateToProps(state){
//     return{
//         positions: state.positionsData
//     }
// }

function mapDispatchToProps(dispatch){
    return bindActionCreators({
        addPositionAction: addPositionAction
    },dispatch)
}

// export default AddPositionForm;
export default connect(null,mapDispatchToProps)(AddPositionForm)