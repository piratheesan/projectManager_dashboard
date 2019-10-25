import React, { Component } from 'react'
import 'antd/dist/antd.css';
import { Card, CardDeck, Button, Col, Container} from 'react-bootstrap';
import { Icon, Progress, Row, Table, Tag, Timeline } from 'antd';
import { Chart } from 'primereact/chart';
import './Style.css'
import Defectbypro from '../image/defectbyproject.png'
import Highmediumlow from '../image/highmediumlow.png'
import Ongoingproupdate from '../image/ongoingproupdate.png'
import QALeadIcon from '../image/qalead.png';
import QAIcon from '../image/qa.png';

const lineChartData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
        {
            label: 'My First dataset',
            backgroundColor: '#42A5F5',
            data: [65, 59, 80, 81, 56, 55, 40]
        },
        {
            label: 'My Second dataset',
            backgroundColor: '#9CCC65',
            data: [28, 48, 40, 19, 86, 27, 90]
        }
    ]
};
const columns = [
    {
        title: 'Company Name',
        dataIndex: 'name',
        key: 'name',
        render: text => <a href="javascript:;">{text}</a>,
    },
    {
        title: 'Project Title',
        dataIndex: 'projecttitle',
        key: 'Project Title',
    },
    {
        title: 'Project Duration',
        dataIndex: 'duration',
        key: 'duration',
    },
    {
        title: 'Deadline',
        key: 'tags',
        dataIndex: 'tags',
        render: tags => (
            <span>
                {tags.map(tag => {
                    let color;
                    if (tag === '10 Days' || tag === '20 Days' || tag === '30 Days') {
                        color = 'volcano';
                    }
                    else if (tag === '40 Days' || tag === '50 Days' || tag === '60 Days' || tag === '1 month') {
                        color = 'blue';
                    }
                    else if (tag === '70 Days' || tag === '80 Days') {
                        color = "green"
                    }

                    return (
                        <Tag color={color} key={tag}>
                            {tag.toUpperCase()}
                        </Tag>
                    );
                })}
            </span>
        ),
    }
];

//data for the table
const tabledata = [
    {
        key: '1',
        name: 'British Telecom',
        projecttitle: 'Project 1',
        duration: '6 months',
        tags: ['30 Days']
    },
    {
        key: '2',
        name: 'ThomasCook Money',
        projecttitle: 'Project 2',
        duration: '4 months',
        tags: ['50 Days']
    },
    {
        key: '3',
        name: 'Manhattan Navigators',
        projecttitle: 'Project 3',
        duration: '2 months',
        tags: ['80 Days']
    },
];


export default class Company extends Component {

    render() { 
      
        return (  
             <div>              
                <div className="pmdashboard">   
                <h5>Dashboard Component / PM Dashboard</h5>
                <br></br>                             
                <CardDeck>
                    <Card style={{fontSize: 22, color:"black"}}>                        
                        <Card.Body>                     
                        <h6 className="companyh6">Projects</h6>                        
                        <h6 className="companyh6">5</h6> 
                        <img src="https://img.icons8.com/clouds/112/000000/combo-chart.png" alt="combo-chart" />                           
                        </Card.Body>                       
                    </Card>
                     
                    <Card style={{fontSize: 22, color:"black"}}>                        
                        <Card.Body>                     
                        <h6 className="companyh6">Project Managers</h6>                        
                        <h6 className="companyh6">5</h6> 
                        <img src="https://img.icons8.com/clouds/112/000000/training.png" alt="training" /> 
                         
                        </Card.Body>                       
                    </Card>
                    <Card style={{fontSize: 22, color:"black"}}>                        
                        <Card.Body>                     
                        <h6 className="companyh6">QA Leads</h6>                        
                        <h6 className="companyh6">5</h6>  
                        <img src={QALeadIcon} alt="sorry no img" style={{ height: "5em" }} />
                        </Card.Body>                       
                    </Card>
                    <Card style={{fontSize: 22, color:"#087878"}}>                        
                        <Card.Body>                     
                        <h6 className="companyh6">Tech Leads</h6>                        
                        <h6 className="companyh6">5</h6>  
                        <img src="https://img.icons8.com/clouds/112/000000/mind-map.png" alt="sorry no img" />
                        </Card.Body>                       
                    </Card> 
                    <Card style={{fontSize: 22, color:"#087878"}}>                        
                        <Card.Body>                     
                        <h6 className="companyh6">Software Engineers</h6>                        
                        <h6 className="companyh6">5</h6>  
                        <img src="https://img.icons8.com/clouds/112/0200000/under-computer.png" alt="sorry no img" />
                        </Card.Body>                       
                    </Card>
                    <Card style={{fontSize: 22, color:"green"}}>                        
                        <Card.Body>                     
                        <h6 className="companyh6">QA Engineers</h6>                        
                        <h6 className="companyh6">5</h6>  
                        <img src={QAIcon} alt="sorry no img" style={{ height: "5em" }} />
                        </Card.Body>                       
                    </Card>                   
                    </CardDeck>
                    <br></br>
                    <CardDeck>                         
                        <Card>                        
                            <Card.Body>                     
                            <h6 className="companyh6">Productivity Meter</h6>
                            <Chart type="bar" data={lineChartData} />
                            </Card.Body>                       
                        </Card> 
                        <Card>                        
                            <Card.Body>                     
                            <h6 className="companyh6">Our Clients</h6>
                             <hr/>      
                            <Table columns={columns} dataSource={tabledata} />       
                            </Card.Body>                       
                        </Card>
                    </CardDeck> 
                    <br></br>                                         
                    <CardDeck>                                          
                        <Card>
                        <Card.Body>                     
                        <h6 className="companyh6">Timeline</h6>
                        <br></br>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo quod facere minima. Perferendis recusandae accusamus architecto enim aut. Et minima neque suscipit quaerat veritatis. Ipsa perspiciatis nisi vero quae aperiam!</p>
                        {/* timeline area starts here */}
                        <div className="content-section implementation">
                                    <Timeline mode="alternate">
                                        <Timeline.Item>Create a services site 2019-09-01</Timeline.Item>
                                        <Timeline.Item color="green">Solve initial network problems 2019-09-01</Timeline.Item>
                                        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                                            laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto
                                            beatae vitae dicta sunt explicabo.
                                    </Timeline.Item>
                                        <Timeline.Item color="red">Network problems being solved 2019-09-01</Timeline.Item>
                                        <Timeline.Item>Create a services site 2019-09-01</Timeline.Item>
                                        <Timeline.Item dot={<Icon type="clock-circle-o" style={{ fontSize: '16px' }} />}>
                                            Technical testing 2019-09-01
                                    </Timeline.Item>
                                        <Timeline.Item dot={<Icon type="play-circle" />}>
                                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti, quasi quibusdam officiis illum hic cum temporibusluptatum
                                        </Timeline.Item>
                                        <Timeline.Item color="green">
                                            Lorem ipsum dolor sit amet consectetur adipisicingsfdasjh cufsrjhgsfgbm temporibusluptatum
                                        </Timeline.Item>
                                    </Timeline>
                                </div>
                                {/* timeline area ends here */}
                        </Card.Body>                       
                    </Card>
                    </CardDeck>        
                 </div>
                
                </div>           
        )
    }
}
