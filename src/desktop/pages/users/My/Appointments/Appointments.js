import React, { useState } from "react";
import {
    Button,
    Drawer,
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
    'my.appointments.title.doctorAdvice': "DoctorAdvice"
};

const { Column } = Table;

const data = [
    {
      key: '1',
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
      key: '2',
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
      key: '3',
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

  const pStyle = {
    fontSize: 16,
    lineHeight: '24px',
    display: 'block',
    marginBottom: 16,
  };
  
  const DescriptionItem = ({ title, content }) => (
    <div
      className="site-description-item-profile-wrapper"
      style={{
        fontSize: 14,
        lineHeight: '22px',
        marginBottom: 7,
      }}
    >
      <p
        className="site-description-item-profile-p"
        style={{
          marginRight: 8,
          display: 'inline-block',
        }}
      >
        {title}:
      </p>
      {content}
    </div>
  );


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
                <Col span={12} >
                    <Table span={1} dataSource={data}>
                        <Column title={languages["my.appointments.title.image"]} dataIndex="image" key="image" />
                        <Column title={languages["my.appointments.title.customerName"]} dataIndex="customerName" key="customerName" />
                        <Column title={languages["my.appointments.title.petName"]} dataIndex="petName" key="petName" />
                        <Column title={languages["my.appointments.title.petGender"]} dataIndex="petGender" key="petGender" />
                        <Column title={languages["my.appointments.title.species"]} dataIndex="species" key="species" />
                        <Column title={languages["my.appointments.title.address"]} dataIndex="address" key="address" />
                        <Column title={languages["my.appointments.title.description"]} dataIndex="description" key="description" />
                        <Column title={languages["my.appointments.title.surgeryTime"]} dataIndex="surgeryTime" key="surgeryTime" />
                        <Column title={languages["my.appointments.title.appointmentDate"]} dataIndex="appointmentDate" key="appointmentDate" />
                        <Column title="" render={record =>(
                            <Button type="primary" onClick={(e) =>(onMoreClick(record))}>{languages["my.appointments.title.details"]}</Button>
                        )
                        }
                            />
                    </Table>
                    
                    <Drawer
                        width={640}
                        title="Basic Drawer"
                        placement='right'
                        closable={false}
                        onClose={onDrawerClose}
                        visible={showDrawer}
                        >
                        <p className="site-description-item-profile-p" style={{ ...pStyle, marginBottom: 24 }}>
                            User Profile
                        </p>
                        <p className="site-description-item-profile-p" style={pStyle}>
                            Personal
                        </p>
                        <Row>
                            <Col span={12}>
                            <DescriptionItem title={languages["my.appointments.title.customerName"]} content="123" />
                            </Col>
                            <Col span={12}>
                            <DescriptionItem title={languages["my.appointments.title.petName"]} content="123" />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                            <DescriptionItem title={languages["my.appointments.title.petGender"]} content="Male" />
                            </Col>
                            <Col span={12}>
                            <DescriptionItem title={languages["my.appointments.title.species"]} content="Cat" />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                            <DescriptionItem title={languages["my.appointments.title.address"]} content="HangZhou" />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={12}>
                            <DescriptionItem title={languages["my.appointments.title.appointmentDate"]} content="2020.1.1" />
                            </Col>
                            <Col span={12}>
                            <DescriptionItem title={languages["my.appointments.title.surgeryTime"]} content="2020.2.2" />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                            <DescriptionItem
                                title={languages["my.appointments.title.description"]}
                                content="Cute dog."
                            />
                            </Col>
                        </Row>
                        <Row>
                            <Col span={24}>
                            <DescriptionItem
                                title={languages["my.appointments.title.doctorAdvice"]}
                                content="More outdoor activities."
                            />
                            </Col>
                        </Row>
                    </Drawer>
                        
                </Col>
            </Row>
        </div>
    );
};
