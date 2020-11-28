import React from 'react';
import {Row, Col, Card,Button} from 'react-bootstrap';

import Aux from "../../hoc/_Aux";



import GoogleMapReact from 'google-map-react';
class Dashboard extends React.Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
      };
    render() {
      

        
        const data = {
            datasets: [
              {
                data: [63, 15, 22],
                backgroundColor: [
                  
                ],
                borderWidth: 2,
                height:200,
                
                
              }
            ],
            
          };
          const options = {
            maintainAspectRatio:false, 
            animation: false,
            cutoutPercentage: 70,
            
            legend: {
              display: false
            },
           
            responsive: true,
            tooltips: {
              
             
              borderWidth: 100,
              enabled: true,
              
              intersect: false,
              mode: 'index',
              
            }
          };
        

        return (
            <Aux>
                <Row>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Faults & Connectivity loss </h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0">12</h3>
                                    </div>

                                   
                                </div>
                                <div className="progress m-t-30" style={{height: '0px'}}>
                                   
                                </div>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6} xl={4}>
                        <Card>
                            <Card.Body>
                                <h6 className='mb-4'>Active Charging sessions</h6>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h3 className="f-w-300 d-flex align-items-center m-b-0"> 9</h3>
                                        <p className="m-b-0">9.647 kWh</p>
                                    </div>

                                    <div className="col-3 text-right">
                                        
                                    </div>
                                </div>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                            <div className="row d-flex align-items-center">
                                    <div className="col-6">
                                        <h6>Charging Sessions</h6>
                                    </div>

                                    <div className="text-right">
                                        <div class="btn-group">
                                            <button class="btn  btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            month to date
                                            </button>
                                        </div>                  
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"> 232</h3>
                                        <p className="m-b-0">4.5 % increase</p>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0"></p>
                                    </div>
                                </div>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                            <div className="row d-flex align-items-center">
                                    <div className="col-6">
                                        <h6>Total Energy</h6>
                                    </div>

                                    <div className="text-right">
                                        <div class="btn-group">
                                            <button class="btn  btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            month to date
                                            </button>
                                        </div>                  
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"> 460.426</h3>
                                        <p className="m-b-0">0.07 % increase</p>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0"></p>
                                    </div>
                                </div>
                               
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                            <div className="row d-flex align-items-center">
                                    <div className="col-6">
                                        <h6>Total Revenue</h6>
                                    </div>

                                    <div className="text-right">
                                        <div class="btn-group">
                                            <button class="btn  btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            month to date
                                            </button>
                                        </div>                  
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"> 0</h3>
                                        <p className="m-b-0">No Data</p>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0"></p>
                                    </div>
                                </div>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                            <div className="row d-flex align-items-center">
                                    <div className="col-6">
                                        <h6>new User</h6>
                                    </div>

                                    <div className="text-right">
                                        <div class="btn-group">
                                            <button class="btn  btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            month to date
                                            </button>
                                        </div>                  
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"> 7</h3>
                                        <p className="m-b-0">No Prior data</p>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0"></p>
                                    </div>
                                </div>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                            <div className="row d-flex align-items-center">
                                    <div className="col-6">
                                        <h6>New Charge points</h6>
                                    </div>

                                    <div className="text-right">
                                        <div class="btn-group">
                                            <button class="btn  btn-xs dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            month to date
                                            </button>
                                        </div>                  
                                    </div>
                                </div>
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                    <h3 className="f-w-300 d-flex align-items-center m-b-0"> 2</h3>
                                        <p className="m-b-0">50 % Decrease</p>
                                    </div>

                                    <div className="col-3 text-right">
                                        <p className="m-b-0"></p>
                                    </div>
                                </div>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                            <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h6>Charge points by type</h6>
                                    </div>

                                    <div className="text-right">
                                        <p className="m-b-0">(22 total)</p>
                                    </div>
                                </div>
                   
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                    <p className="m-b-0">Commercial public : 14</p>
                                    <p className="m-b-0">Commercial private : 7</p>
                                    <p className="m-b-0">Personal(home) : 1</p>
                                    </div>
                                    <div className="text-right">
                                        <p className="m-b-0"></p>
                                    </div>
                                   
                                </div>
                                
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={4}>
                        <Card>
                            <Card.Body>
                            <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                        <h6>Locations by city</h6>
                                    </div>

                                    <div className="text-right">
                                        <p className="m-b-0">(18 total)</p>
                                    </div>
                                </div>
                   
                                <div className="row d-flex align-items-center">
                                    <div className="col-9">
                                    <p className="m-b-0">Bengaluru : 8</p>
                                    <p className="m-b-0">Mumbai : 5</p>
                                    <p className="m-b-0">Thane : 3</p>
                                    </div>
                                    <div >
                                    <p>

                                    </p>
                                    </div>
                        </div>
                             
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col xl={12}>
                        <Card>
                        <div >
                            <Card.Header className="text-center">Location</Card.Header>
                        </div>
                            <Card.Body>
                    <div style={{ height: '50vh', width: '100%' }}>
                    <GoogleMapReact 
   defaultCenter={this.props.center}

   defaultZoom={this.props.zoom}
   
/>
</div>
</Card.Body>
</Card>
</Col>
                            
                     <Col md={6} xl={8} className='m-b-30'>
                        
                    </Col>
                </Row>
            </Aux>
        );
    }
}

export default Dashboard;