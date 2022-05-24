import React from 'react';
import ApexChart1 from './ApexChar1';

const ApexChart1Card = () => {
    return (
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
                        <ApexChart1 />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ApexChart1Card;