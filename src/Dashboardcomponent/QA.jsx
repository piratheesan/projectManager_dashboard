import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Card, CardDeck, Table, Button, Container, Row, Col  } from 'react-bootstrap';
import { Icon, Progress } from 'antd';
import './Style.css'
import Defectbypro from '../image/defectbyproject.png'
// import Defectstatus from '../image/defectstatus.png'
import Highmediumlow from '../image/highmediumlow.png'
import Ongoingproupdate from '../image/ongoingproupdate.png'

export default class QA extends Component {
    render() { 
      
        return (  
             <div>              
                <div className="pmdashboard">   
                <h5>Dashboard Component / QA Dashboard</h5>
                <br></br> 
                <h6>&emsp;Defect Status Chart</h6> 
                <CardDeck> 
                <Container fluid={true}>
                    <Row>
                        <Col sm={9}>
                        <Card style={{fontSize: 22, color:"black"}} className="defstatuschart">                        
                        <Card.Body>                     
                        <div >
                            <h6>Library System</h6><div className="Progress"><Progress percent={90} /></div>
                            <h6>Defect System</h6><div className="Progress"><Progress percent={70} status="active" /></div>
                            <h6>HRM System</h6><div className="Progress"><Progress percent={100} /></div>
                            <h6>Leave Management System</h6><div className="Progress"><Progress percent={80} /></div>
                            <h6>School Management System</h6><div className="Progress"> <Progress percent={50} status="exception" showInfo={false}/></div>
                        </div>                                       
                        </Card.Body>                       
                    </Card>   
                        </Col>
                        <Col sm={3}>
                        <div className="">
                        <Card style={{fontSize: 22, color:"black"}} >                        
                            <Card.Body > 
                            <h6>Defect</h6>                   
                            <div >
                                <h6>New</h6><div className="Progress"><Progress percent={55} /></div>
                                <h6>Open</h6><div className="Progress"><Progress percent={50} status="active" /></div>
                                <h6>Reject</h6><div className="Progress"><Progress percent={10} /></div>
                                <h6>Closed</h6><div className="Progress"><Progress percent={30} status="active" /></div>
                            </div>                         
                            </Card.Body>                                                 
                        </Card>
                        </div>
                        <br></br> 
                        <Card style={{fontSize: 22, color:"black"}} className="totalNewClosed">                        
                            <Card.Body>                     
                            <h4 className="h4style">Total&emsp;New&emsp;Closed</h4>                             
                            <h4 className="h4styleval">100&emsp;55/100&emsp;30/100</h4>                        
                            </Card.Body>  
                            <br></br>                      
                        </Card>  
                        </Col>
                    </Row>
                </Container>                       
               
                </CardDeck>
                <h6>&emsp;Total Defect & Closed Defect</h6>
                <h6 className="totalactivedefects">&emsp;Total Active Defects</h6>
                    <br></br>
                    <CardDeck>
                    <Card style={{fontSize: 34 }}>                        
                        <Card.Body>                     
                        <div>
                            <Progress type="circle" percent={75} />
                            <Progress type="circle" percent={70} status="exception" />
                            <Progress type="circle" percent={100} />
                        </div>
                        </Card.Body>                       
                    </Card>                    
                    <Card style={{fontSize: 24 }}>                        
                        <Card.Body className="active"> 
                        <h6 className="h6active">Active</h6>                  
                        <Icon type="arrow-up" style={{fontSize: 32, color:"green"}} /> <p>11.1%</p> 
                        {/* <Icon type="arrow-down" style={{fontSize: 32, color:"red"}} /> <p>11.1%</p>  */}
                        </Card.Body> 
                        <Card.Body className="idle">  
                        <h6 className="h6idle">Active</h6>                  
                        <Icon type="arrow-down" style={{fontSize: 32, color:"red"}} /> <p>9.30%</p> 
                        {/* <Icon type="arrow-down" style={{fontSize: 32, color:"red"}} /> <p>11.1%</p>  */}
                        </Card.Body>                      
                    </Card>                    
                    </CardDeck>                   
                </div>
            </div>
        )
    }
}
