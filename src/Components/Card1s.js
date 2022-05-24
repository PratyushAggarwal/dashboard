import React from 'react';
import Card1 from './Card1';
import ApexChart1 from './ApexChar1';
const Card1s = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-5 col-lg-6'>
                    <div className='row'>
                        <Card1 title="Costumers" count="36,254" percentage="5.27" type="text-success me-2" />
                        <Card1 title="Orders" count="5,543" percentage="1.08" type="text-danger me-2"/>
                    </div>
                    <div className='row'>
                        <Card1 title="Revenue" count="$6,254" percentage="7.00" type="text-danger me-2"/>
                        <Card1 title="Growth" count="+ 30.56%" percentage="4.87" type="text-success me-2"/>
                    </div>
                </div>
                <div className='col-xl-7 col-lg-6'>
                    <div className='card card-h-100'>
                        <div className='card-body'>
                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <h4 className='header-title'>PROJECTIONS VS ACTUALS</h4>
                                <div className='dropdown'>
                                    <a href="/" className='dropdown-toggle arrow-none card-drop' data-bs-toggle="dropdown" aria-expanded="false">
                                        <i className='dropdown-menu dropdown-menu-end'></i>
                                    </a>
                                </div>
                            </div>
                            <div dir="ltr">
                                <ApexChart1/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='row'>
                <div className='col-lg-8'>
                    <div className='card'>
                        <div className='card-body'>
                            <div className='d-flex justify-content-between align-items-center mb-2'>
                                <h4 class='header-title'>REVENUE</h4>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card1s;