import React from 'react';
import PositionCard from './PositionCard/PositionCard'
import { Link } from 'react-router-dom'

function Position(props){
    const positionCards = props.positions.map((position,i)=>{
        return (
            <div key={i}>
                <Link to="/candidates" key={i}>
                    <PositionCard position={position} />
                </Link>
            </div>
        )
    })
    return (
        <div>
            {positionCards}
        </div>
    )
}

export default Position