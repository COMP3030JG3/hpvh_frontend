import React, { useState } from "react";
import {
    Row,
    Col,
    Table,
    Modal,
    Button,
    Form,
    Radio,
    Input,
    Space,
} from "antd"
import Highlighter from 'react-highlight-words';
import { SearchOutlined } from '@ant-design/icons';
import search from '../../../../components/search'
const { Column, ColumnGroup } = Table;






export default (props) => {

    const [showEditModal, setShowEditModal] = useState(false);
    const [showAddModal, setShowAddModal] = useState(false);
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchColumn] = useState('');
    const [record, setRecord] = useState({});
    const [searchIdValue, setSearchIdValue] = useState('');
    const [searchUsernameValue, setSearchUsernameValue] = useState('');
    const daata = {
        index: 1,
        total: 1,
        count: 1,
        items: [{ key: '1', id: 1, username: 'aa', password_hash: 'aa', level: 'administrator' }]
    }

    const { data, page } = props
    const languages = props.messages;


    const onEditClick = (records) => {
        setRecord(records)
        setShowEditModal(true);
    }
    const onAddClick = (records) => {
        setShowAddModal(true);
    }



    const onAddFinish = values => {
        props.onAddFinish(values)
    };
    const onEditFinish = values => {
        let v = { id: record.id, ...values }
        props.onEditFinish(v)
    };

    const onIdSearch = () => {
        props.onSearch({ index: 1, id: searchIdValue });
    }
    const onIdReset = () => {
        setSearchIdValue('')
        props.onSearch({ index: 1 });
    }

    const onUsernameSearch = () => {
        props.onSearch({ index: 1, username: searchUsernameValue });
    }
    const onUsernameReset = () => {
        setSearchUsernameValue('')
        props.onSearch({ index: 1 });
    }

    const levelFilter = [{ text: 'administrator', value: 'administrator' }, { text: 'employee', value: 'employee' }]

    return (
        <div>

            <Row onClick={props.onClick}>
                <Col span={24} offset={0}>
                    <Table dataSource={data}
                        onChange={props.onPageChange}
                        scroll={{ y: 450 }}
                        pagination={{ defaultCurrent: 1, total: page.total, simple: true, pageSize: 15 }}
                    >
                        <Column title={languages["dashBoard.employees.colTitle.id"]} dataIndex="id" key="id" fixed='left' width={100} {...search(languages, setSearchIdValue, onIdSearch, onIdReset)} />
                        <Column title={languages["dashBoard.employees.colTitle.name"]} dataIndex="username" key="username" width={200} {...search(languages, setSearchUsernameValue, onUsernameSearch, onUsernameReset)} />
                        <Column title={languages["dashBoard.employees.colTitle.level"]} dataIndex="level" key="level" width={200} filters={levelFilter} />
                        <Column title=""
                            render={records => (
                                <Button type="link" onClick={e => {
                                    onEditClick(records)
                                }
                                }>{languages["dashBoard.employees.row.edit"]}</Button>
                            )}
                            fixed='right'
                        />
                    </Table>
                </Col>
            </Row>
            <Row>
                <Col span={24}>
                    <Button
                        style={{ display: "block", margin: "0 auto" }}
                        type="primary"
                        onClick={onAddClick} >Add</Button>
                </Col>
            </Row>


            <HandleEditModal
                record={record}
                onFinish={onEditFinish}
                languages={languages}
                showModal={showEditModal}
                setShowModal={setShowEditModal}
            />

            <HandleAddModal

                onFinish={onAddFinish}
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
    const [form] = Form.useForm()
    const onOk = () => {
        setShowModal(false);

    };


    const onCancel = () => {
        setShowModal(false);
    };

    form.setFieldsValue({
        username: props.record.username,
        level: props.record.level,
    })

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
                    form={form}
                    {...layout}
                    name="edit"
                    initialValues={{}} onFinish={props.onFinish}
                >
                    <Form.Item name="username"
                        label={languages["dashBoard.employees.modal.name"]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="password_hash"
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
                    <Form.Item name="username"
                        label={languages["dashBoard.employees.modal.name"]}
                    >
                        <Input />
                    </Form.Item>

                    <Form.Item name="password_hash"
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

