import React, {Component} from 'react';
import {connect} from 'react-redux';
import PositionCard from '../PositionCards/PositionCard';
import AddPositionForm from '../AddPositionForm';
import { Link } from 'react-router-dom';


class EmployerPositions extends Component{
    render(){

        // handlePositionCardClick = () => {

        // }

        const positions = this.props.positionData.map((position,i) => {
            return(
                <Link to="/candidates" key={i}>
                    <PositionCard positions={position} key={i}/>
                </Link>
            )
        })
        return(
            <div className="container-fluid col s12">
                <h1>Open Positions</h1>
                <div className='row'>
                    <div className="container col s6">
                        <AddPositionForm />
                    </div>
                    <div className="container col s6"> 
                        {positions}
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
