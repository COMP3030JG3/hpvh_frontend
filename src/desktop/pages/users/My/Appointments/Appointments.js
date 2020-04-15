import React, { useState } from "react";
import {
    Button,
    Drawer,
    Descriptions,
    Col,
    Row,
    Table
} from "antd"


const messages = {
    'my.appointments.title.image': "Image",
    'my.appointments.title.customerName': "Customer Name",
    'my.appointments.title.petName': "Pet Name",
    'my.appointments.title.petGender': "Pet Gender",
    'my.appointments.title.species': "Species",
    'my.appointments.title.address': "Address",
    'my.appointments.title.description': "Description",
    'my.appointments.title.surgeryTime': "SurgeryTime",
    'my.appointments.title.appointmentDate': "AppointmentDate",
    'my.appointments.title.details': "Details",
    'my.appointments.title.doctorAdvice': "DoctorAdvice",
    'my.appointments.title.drawers': "Drawers",
    'my.appointments.title.orderNumber': "No.",
};

const { Column } = Table;
const data = [
    {
      orderNumber: '1',
      customerName: 'John',
      petName: 'Kitty',
      petGender: 'Male',
      species: 'Cat',
      address: 'Beijing',
      description: 'Good pet',
      image: '',
      surgeryTime: '2020.4.8',
      appointmentDate: '2020.1.31'
    },
    {
      orderNumber: '2',
      customerName: 'Zhang San',
      petName: 'Wang Cai',
      petGender: 'Male',
      species: 'Dog',
      address: 'Shanghai',
      description: 'Pretty pet',
      image: '',
      surgeryTime: '2020.5.6',
      appointmentDate: '2020.4.29'
    },
    {
      orderNumber: '3',
      customerName: 'John',
      petName: 'Kitty',
      petGender: 'Male',
      species: 'Cat',
      address: 'Beijing',
      description: 'Good pet',
      image: '',
      surgeryTime: '2020.4.8',
      appointmentDate: '2020.1.31'
    },

  ];


export default (props) => {

    const [showDrawer, setShowDrawer] = useState(false);


    const onMoreClick = (records) =>{
        console.log(records);
        setShowDrawer(true);
    }

    const onDrawerClose = () =>{
        setShowDrawer(false)
    }


    const languages = messages;

    const onFinish = values => {
        console.log(values);
    };

    return (
        <div>
            <Row>
                <Col span={24} offset={0}>
                    <Table dataSource={data}
                        pagination={{position:['bottomcenter']}}
                    >
                        <Column ellipsis={true} title={languages["my.appointments.title.orderNumber"]} dataIndex="orderNumber" key="orderNumber" />
                        <Column ellipsis={true} title="" dataIndex="image" key="image" />
                        <Column ellipsis={true} title={languages["my.appointments.title.petName"]} dataIndex="petName" key="petName" />
                        <Column ellipsis={true} title={languages["my.appointments.title.petGender"]} dataIndex="petGender" key="petGender" />
                        <Column ellipsis={true} title={languages["my.appointments.title.species"]} dataIndex="species" key="species" />
                        <Column ellipsis={true} title={languages["my.appointments.title.address"]} dataIndex="address" key="address" />
                        <Column ellipsis={true} title={languages["my.appointments.title.appointmentDate"]} dataIndex="appointmentDate" key="appointmentDate" />
                        <Column ellipsis={true} title={languages["my.appointments.title.surgeryTime"]} dataIndex="surgeryTime" key="surgeryTime" />
                        <Column title="" render={record =>(
                            <Button type="link" onClick={(e) =>(onMoreClick(record))}>{languages["my.appointments.title.details"]}</Button>
                        )
                        }
                            />
                    </Table>
                </Col>
            </Row>
            
                    <Drawer
                        width="50%"
                        title={languages["my.appointments.title.drawers"]}
                        placement='left'
                        closable={false}
                        onClose={onDrawerClose}
                        visible={showDrawer}
                        >
                        
                        <Descriptions bordered={true} layout="horizontal" column={2}>
                            <Descriptions.Item label={languages["my.appointments.title.customerName"]} span={2}>45631231231231</Descriptions.Item>
                            <Descriptions.Item label={languages["my.appointments.title.petName"]} spam={2}>123321312312312</Descriptions.Item>
                            <Descriptions.Item label={languages["my.appointments.title.petGender"]} span={2}>73231231289</Descriptions.Item>
                            <Descriptions.Item label={languages["my.appointments.title.species"]} span={2}>453213213126</Descriptions.Item>
                            <Descriptions.Item label={languages["my.appointments.title.address"]} span={2}>132131231223</Descriptions.Item>
                            <Descriptions.Item label={languages["my.appointments.title.appointmentDate"]}>732131232189</Descriptions.Item>
                            <Descriptions.Item label={languages["my.appointments.title.surgeryTime"]}>4321312356</Descriptions.Item>
                            <Descriptions.Item label={languages["my.appointments.title.description"]} span={2}>123213123</Descriptions.Item>
                        </Descriptions>
                    </Drawer>
                        
                
        </div>
        );
    };
