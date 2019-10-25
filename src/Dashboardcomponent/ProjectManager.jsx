import React, { Component } from 'react'
import { Card, CardDeck, Table, Button } from 'react-bootstrap';
import { Icon } from 'antd';
import './Style.css'
import Defectbypro from '../image/defectbyproject.png'
import Defectstatus from '../image/defectstatus.png'
import Highmediumlow from '../image/highmediumlow.png'
import Ongoingproupdate from '../image/ongoingproupdate.png'

export default class ProjectManager extends Component {
    render() { 
      
        return (  
             <div>              
                <div className="pmdashboard">   
                <h5>Dashboard Component / PM Dashboard</h5>
                <br></br>                             
                <CardDeck>
                    <Card style={{fontSize: 22, color:"black"}}>                        
                        <Card.Body>                     
                        <h6>High Severity</h6>
                        <Icon type="arrow-up" style={{fontSize: 32, color:"red"}} /> <p>0 %</p>                                     
                        </Card.Body>                       
                    </Card>
                     
                    <Card style={{fontSize: 22, color:"black"}}>                        
                        <Card.Body>                     
                        <h6>Medium Severity</h6>
                        <Icon type="arrow-up" style={{fontSize: 32, color:"#e38f0b"}} /> <p>0 %</p>      
                        </Card.Body>                       
                    </Card>
                    <Card style={{fontSize: 22, color:"black"}}>                        
                        <Card.Body>                     
                        <h6>Low Severity</h6>
                        <Icon type="arrow-down" style={{fontSize: 32, color:"#024d22"}} /> <p>0 %</p> 
                        </Card.Body>                       
                    </Card>
                    <Card style={{fontSize: 22, color:"#087878"}}>                        
                        <Card.Body>                     
                        <h6>Severity Index</h6>
                        <Icon type="sync" spin style={{fontSize: 32, color:"#087878"}} /> <p>0.00%</p> 
                        </Card.Body>                       
                    </Card>                    
                    </CardDeck>
                    <br></br>
                    <CardDeck>
                    <Card style={{fontSize: 22, color:"#087878"}}>                        
                        <Card.Body>                     
                        <h6>Defect to Remarks Ratio</h6>
                        <Icon type="safety-certificate" spin style={{fontSize: 32, color:"#087878"}} /> <p>0.00 %</p> 
                        </Card.Body>                       
                    </Card>
                    <Card style={{fontSize: 22, color:"green"}}>                        
                        <Card.Body>                     
                        <h6>Defect Density</h6>
                        <Icon type="fund" spin style={{fontSize: 32, color:"green"}} /> <p>0.00%</p> 
                        </Card.Body>                       
                    </Card>
                    <Card style={{fontSize: 22, color:"green"}}>                        
                        <Card.Body>                     
                        <h6>Total Defect</h6>
                        <Icon type="safety-certificate" spin style={{fontSize: 32, color:"green"}} /> <p>0</p> 
                        </Card.Body>                       
                    </Card>
                    <Card style={{fontSize: 22, color:"#087878"}}>                        
                        <Card.Body>                     
                        <h6>Total Open High</h6>
                        <Icon type="safety-certificate" spin style={{fontSize: 32, color:"red"}} /> <p>0</p> 
                        </Card.Body>                       
                    </Card>
                    </CardDeck>
                    <br></br>
                    <CardDeck>
                    <Card>                        
                        <Card.Body>                     
                        <h6>Defects By Projects</h6>
                        <hr/>      
                        <img src={Defectbypro} height="80%" width="90%" alt=""></img>            
                        </Card.Body>                       
                    </Card>
                    <Card>                        
                        <Card.Body>                     
                        <h6>Defects Status</h6>
                        <hr/>             
                        <img src={Defectstatus} height="80%" width="90%" alt=""></img>                       
                        </Card.Body>                       
                    </Card>
                    </CardDeck>
                    <br></br>
                    <CardDeck>
                    <Card>                        
                        <Card.Body>
                        <img src={Highmediumlow} height="80%" width="90%" alt=""></img>                       
                        </Card.Body>                       
                    </Card>
                    <Card>                        
                        <Card.Body>                     
                        <h6>Ongoing Project Updates</h6>
                        <hr/>             
                        <img src={Ongoingproupdate} height="80%" width="90%" alt=""></img>                       
                        </Card.Body>                       
                    </Card>
                    </CardDeck>                   
                    <div className="tbl">                  
                    <div className="btn_clear_fiter">
                    <Button variant="info">Clear Filters</Button>
                    </div>
                    <br></br>
                    <Table striped bordered hover variant="light">
                    <thead>
                        <tr>                        
                        <th>Id</th>
                        <th>Project Name</th>
                        <th>Member</th>
                        <th>View Member</th>
                        <th>Edit</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                        <td>1</td>
                        <td>Hospital Management System</td>
                        <td>John</td>
                        <td><Button variant="light"><Icon type="security-scan" style={{fontSize: 20}}/></Button></td>
                        <td><Button variant="info">Edit</Button></td>
                        </tr>
                        <tr>
                        <td>2</td>
                        <td>School Management System</td>
                        <td>Dev</td>
                        <td><Button variant="light"><Icon type="security-scan" style={{fontSize: 20}}/></Button></td>
                        <td><Button variant="info">Edit</Button></td>
                        </tr>                     
                    </tbody>
                    </Table>                    
                    </div>
                </div>
            </div>
        )
    }
}
