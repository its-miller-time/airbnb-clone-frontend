import React, {Component} from 'react';
import {connect} from 'react-redux';
import AddPositionForm from '../AddPositionForm/AddPositionForm';
import axios from 'axios';
import Position from '../Utility/Position'
import './EmployerPositions.css'


class EmployerPositions extends Component{
    
    state = {
        positions: []
    }
    
    componentDidMount(){
        const allPositions = axios.get(`${window.apiHost}/employers/positions`)
        allPositions.then((resp)=>{
            const positions = resp.data
            this.setState({
                positions
            })
        })
    }
    
    render(){
        // const positions = this.props.positionData.map((position,i) => {
        //     return(
        //         <Link to="/candidates" key={i}>
        //             <PositionCard positions={position} key={i}/>
        //         </Link>
        //     )
        // })
        return(
            <div className="container-fluid col s12">
                <h2 className="employer-positions-title">Open Positions</h2>
                <div className='row'>
                    <div className="container col l6 m12 s12">
                        <AddPositionForm />
                    </div>
                    <div className="container col l6 m12 s12"> 
                        <h3>Positions</h3>
                        <Position positions={this.state.positions} />
                    </div>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        positionData: state.positionData
    }
}


export default connect(mapStateToProps)(EmployerPositions)
