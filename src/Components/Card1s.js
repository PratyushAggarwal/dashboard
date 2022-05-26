import React from 'react';
import Card1 from './Card1';
import ApexChart1 from './ApexChar1';
import ApexChart2 from './ApexChart2';
import Map from './Map';
import ProgressBar from './ProgressBar';
import {FaUsers} from "react-icons/fa"
import {MdAddShoppingCart} from "react-icons/md"
import {FaDollarSign} from "react-icons/fa"
import {BiPulse} from "react-icons/bi"
import {RiCheckboxBlankCircleFill} from 'react-icons/ri'
import Donutchart from './Donutchart';
import Card4 from './card4';
import Card3s from './card3s';

const Card1s = () => {
    return (
        <div className='container-fluid'>
            <div className='row'>
                <div className='col-xl-5 col-lg-6'>
                    <div className='row'>
                        <Card1 title="Costumers" count="36,254" percentage="5.27" component={FaUsers} increasing='true'/>
                        <Card1 title="Orders" count="5,543" percentage="1.08" component={MdAddShoppingCart} increasing='false'/>
                    </div>
                    <div className='row'>
                        <Card1 title="Revenue" count="$6,254" percentage="7.00" component={FaDollarSign} increasing='false'/>
                        <Card1 title="Growth" count="+ 30.56%" percentage="4.87" component={BiPulse} increasing='true'/>
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
                                <h4 className='header-title'>REVENUE</h4>
                            </div>
                            <div className='chart-content-bg'>
                                <div className='row text-center'>
                                    <div className='col-sm-6'>
                                        <p className='text-muted mb-0 mt-3'>Current Week</p>
                                        <h2 className='fw-normal mb-3'>
                                            <RiCheckboxBlankCircleFill className='text-primary align-middle me-1'></RiCheckboxBlankCircleFill>
                                            <span>$58,254</span>
                                        </h2>
                                    </div>
                                    <div className='col-sm-6'>
                                        <p className='text-muted mb-0 mt-3'>Current Week</p>
                                        <h2 className='fw-normal mb-3'>
                                            <RiCheckboxBlankCircleFill className='text-success align-middle me-1'></RiCheckboxBlankCircleFill>
                                            <span>$58,254</span>
                                        </h2>
                                    </div>
                                </div>
                            </div>
                            

                            <div dir='ltr'>
                                <ApexChart2 />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='col-lg-4'>
                <div className='card'>
                    <div className='card-body'>
                        <div className='d-flex justify-content-between align-items-center'>
                            <h4 className='header-title'>Revenue By Location</h4>
                        </div>
                        <div className='mb-4 mt-3' styles={{width: '100%'}}>
                            <Map width="100%"/>
                        </div>
                        <h5 className="mb-1 mt-0 fw-normal">New York</h5>
                        <ProgressBar progress='72' />
                        <h5 className="mb-1 mt-0 fw-normal">San Francisco</h5>
                        <ProgressBar progress='39' />
                        <h5 className="mb-1 mt-0 fw-normal">Sydney</h5>
                        <ProgressBar progress='25' />
                        <h5 className="mb-1 mt-0 fw-normal">Singapore</h5>
                        <ProgressBar progress='61' />
                    </div>
                </div>
                </div>
            </div>
            <div className='row'>
                <Card4 />
                <Card3s />
            </div>
        </div>
    );
}

export default Card1s;