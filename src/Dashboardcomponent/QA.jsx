import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Card, CardDeck, Container, Row, Col  } from 'react-bootstrap';
import { Icon, Progress, Statistic, PageHeader } from 'antd';
import './Style.css'


export default class QA extends Component {
    render() { 
      
        return (  
             <div>              
                <div className="pmdashboard">   
                <h5>Dashboard Component / QA Dashboard</h5>
                <br></br> 
                {/* <h6>&emsp;Defect Status Chart</h6>  */}
                <PageHeader title="Defect Status Chart" />
                <CardDeck> 
                <Container fluid={true}>
                    <Row>
                        <Col sm={8}>
                        <Card style={{fontSize: 22, color:"black"}} className="defstatuschart">                        
                        <Card.Body>                     
                        <div className="QAstatus">
                            <h6>Library System</h6><div className="Progress"><Progress percent={90} /></div>
                            <h6>Defect System</h6><div className="Progress"><Progress percent={70} status="active" /></div>
                            <h6>HRM System</h6><div className="Progress"><Progress percent={100} /></div>
                            <h6>Leave Management System</h6><div className="Progress"><Progress percent={80} /></div>
                            <h6>School Management System</h6><div className="Progress"> <Progress percent={50} status="exception" showInfo={false}/></div>
                        </div>                                       
                        </Card.Body>                       
                    </Card>   
                        </Col>
                        <Col sm={4}>   
                        <div className="defect">                    
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
                        <PageHeader title="Defect Details" />
                        <div style={{ padding: 24, background: "#fff"}}>
                            <Row>
                            <div className="content-section introduction" />
                            <Col span={8}>
                                <Statistic title="Total " value={100} />
                            </Col>
                            <Col span={8}>
                                <Statistic title="New" value={55} suffix="/100" />
                            </Col>
                            <Col span={8}>
                                <Statistic title="Closed" value={30} suffix="/100" />
                            </Col>
                            </Row>
                        </div>                      
                        </Col>
                    </Row>
                </Container>                    
               
                </CardDeck>
                
                <br></br>                                    
                    <CardDeck>                   
                    <Card className="total_active_defect">                        
                        <Card.Body>     
                        <h6>&emsp;Total Defect & Closed Defect</h6>      
                        <br></br>                
                        <div>
                            <Progress type="circle" percent={75} />
                            <Progress type="circle" percent={70} status="exception" />
                            <Progress type="circle" percent={100} />
                        </div>
                        </Card.Body>                       
                    </Card>                                         
                     <Card className="active">                                        
                        <Card.Body> 
                        <h6>&emsp;&emsp;Total Active Defects</h6>                                               
                         <h6 className="h6active">Active</h6>                  
                        <Icon type="arrow-up" style={{fontSize: 32, color:"green"}} /> <p>11.1%</p>             
                        </Card.Body>                            
                        <Card.Body className="idle">  
                        <h6 className="h6idle">Idle</h6>                  
                        <Icon type="arrow-down" style={{fontSize: 32, color:"red"}} /> <p>9.30%</p>                       
                        </Card.Body>                       
                    </Card> 
                                         
                    </CardDeck>                                  
                </div>
            </div>
        )
    }
}
