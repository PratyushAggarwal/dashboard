import React from 'react';
import Card1 from './Card1';
const Card1s = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <Card1 title="Costumers" count="36,254" percentage="5.27" type="text-success me-2" />
                <Card1 title="Orders" count="5,543" percentage="1.08" type="text-danger me-2"/>
            </div>
            <div className='row'>
                <Card1 title="Revenue" count="$6,254" percentage="7.00" type="text-danger me-2"/>
                <Card1 title="Growth" count="+ 30.56%" percentage="4.87" type="text-success me-2"/>
            </div>
        </div>
    );
}

export default Card1s;