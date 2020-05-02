import React, { useState } from "react";
import {
    Row,
    Col,
    Table,
    Modal,
    Button,
    Drawer,
    Descriptions,
    Form,
    Radio,
    Input,
    DatePicker
} from "antd"
const { Column, ColumnGroup } = Table;

const messages = {
    "dashBoard.employees.colTitle.id": "No.",
    "dashBoard.employees.colTitle.name": "Name",
    "dashBoard.employees.colTitle.level": "Level",
    "dashBoard.employees.row.edit": "Edit",
    "dashBoard.employees.editModal.title": "edit",
    "dashBoard.employees.addModal.title": "add",
    "dashBoard.employees.modal.name": "Name:",
    "dashBoard.employees.modal.password": "Password:",
    "dashBoard.employees.modal.level": "Level:",
    "dashBoard.employees.modal.submit": "Submit",
    "dashBoard.employees.modal.employee": "Employee",
    "dashBoard.employees.modal.administrator": "Administrator"


};



export default (props) => {

    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);

    const data = {
        index: 1,
        total: 1,
        count: 1,
        items: [{ key: '1' }]
    }

    const languages = messages;


    const onEditClick = (records) => {
        setShowEditModal(true);
    }
    const onAddClick = (records) => {
        setShowAddModal(true);
    }


    const onFinish = values => {
        console.log('Finish:', values);
    };

    return (
        <div>

            <Row onClick={props.onClick}>
                <Col span={24} offset={0}>
                    <Table dataSource={data.items}
                        onChange={props.onPageChange}
                        pagination={{ defaultCurrent: data.index, total: data.total, simple: true, pageSize: data.count }}
                    >
                        <Column title={languages["dashBoard.employees.colTitle.id"]} dataIndex="id" key="id" fixed='left' width={100} />
                        <Column title={languages["dashBoard.employees.colTitle.name"]} dataIndex="name" key="name" width={200} />
                        <Column title={languages["dashBoard.employees.colTitle.level"]} dataIndex="level" key="level" width={200} />
                        <Column title=""
                            render={record => (
                                <Button type="link" onClick={(e) => (onEditClick(record))}>{languages["dashBoard.employees.row.edit"]}</Button>
                            )}
                            fixed='right'
                        />
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Button style={{ display: "block", margin: "0 auto" }} type="primary" onClick={onAddClick} >Add</Button>
                </Col>
            </Row>


            <HandleEditModal
                onFinish={onFinish}
                languages={languages}
                showModal={showEditModal}
                setShowModal={setShowEditModal}
            />

            <HandleAddModal
                onFinish={onFinish}
                languages={languages}
                showModal={showAddModal}
                setShowModal={setShowAddModal}
            />



        </div >
    );
};

const HandleEditModal = (props) => {

    const layout = {
        labelCol: { span: 4, },
        wrapperCol: { span: 20, offset: 0 },
    };

    const { languages, setShowModal } = props;

    const onOk = () => {
        setShowModal(false);

    };


    const onCancel = () => {
        setShowModal(false);
    };



    return (
        <div>
            <Modal
                title={languages["dashBoard.employees.editModal.title"]}
                visible={props.showModal}
                onOk={onOk}
                confirmLoading={props.confirmLoading}
                onCancel={onCancel}
                width="30%"
                footer={null}

            >
                <Form
                    {...layout}
                    name="edit"
                    initialValues={{}} onFinish={props.onFinish}
                >
                    <Form.Item name="name"
                        label={languages["dashBoard.employees.modal.name"]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="password"
                        label={languages["dashBoard.employees.modal.password"]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item name="level"
                        label={languages["dashBoard.employees.modal.level"]}
                    >
                        <Radio.Group buttonStyle="solid">
                            <Radio.Button value="employee">{languages["dashBoard.employees.modal.employee"]}</Radio.Button>
                            <Radio.Button value="administrator">{languages["dashBoard.employees.modal.administrator"]}</Radio.Button>
                        </Radio.Group>
                    </Form.Item>

                    <Button type="primary" htmlType="submit" style={{ display: "block", margin: "0 auto" }}>
                        {languages["dashBoard.employees.modal.submit"]}
                    </Button>
                </Form>
            </Modal>
        </div>
    );

}


const HandleAddModal = (props) => {

    const layout = {
        labelCol: { span: 4, },
        wrapperCol: { span: 20, offset: 0 },
    };

    const { languages, setShowModal } = props;

    const onOk = () => {
        setShowModal(false);

    };


    const onCancel = () => {
        setShowModal(false);
    };



    return (
        <div>
            <Modal
                title={languages["dashBoard.employees.addModal.title"]}
                visible={props.showModal}
                onOk={onOk}
                confirmLoading={props.confirmLoading}
                onCancel={onCancel}
                width="30%"
                footer={null}

            >
                <Form
                    {...layout}
                    name="add"
                    initialValues={{}} onFinish={props.onFinish}
                >
                    <Form.Item name="name"
                        label={languages["dashBoard.employees.modal.name"]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="password"
                        label={languages["dashBoard.employees.modal.password"]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="level"
                        label={languages["dashBoard.employees.modal.level"]}
                    >
                        <Radio.Group buttonStyle="solid">
                            <Radio.Button value="employee">{languages["dashBoard.employees.modal.employee"]}</Radio.Button>
                            <Radio.Button value="administrator">{languages["dashBoard.employees.modal.administrator"]}</Radio.Button>
                        </Radio.Group>
                    </Form.Item>


                    <Button type="primary" htmlType="submit" style={{ display: "block", margin: "0 auto" }}>
                        {languages["dashBoard.employees.modal.submit"]}
                    </Button>
                </Form>
            </Modal>
        </div>
    );

}