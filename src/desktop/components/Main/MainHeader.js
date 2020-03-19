import React from "react";
import { Layout, Menu, Button, Dropdown } from 'antd';
import { FormattedMessage } from 'react-intl'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { DownOutlined } from '@ant-design/icons';
const { Header } = Layout;

const MainHeader = (props) => {

    const logoStyle = {
        float: 'left',
        overflow: 'hidden',
        fontSize: '35px',
        color: '#FFFFFF',
        margin: '0 20px',
    }

    const lanMenuOnClick = (e) => {
        console.log(props.lang)
        props.langChange(e.key);
    }


    const langMenu = (
        <Menu onClick={lanMenuOnClick}>
            <Menu.Item key="en">English</Menu.Item>
            <Menu.Item key="zh">中文</Menu.Item>
        </Menu>
    );

    return (

        <Header style={{ padding: '0 10px' }}>
            <div style={logoStyle} >Healing Paws</div>
            <Menu
                theme="dark"
                mode="horizontal"
                defaultSelectedKeys={[props.history.location.pathname]}
                style={{ float: 'left', lineHeight: '64px' }}
            >
                <Menu.Item key="/">
                    <Link to="/" className="item"><FormattedMessage id="main.navigator.home" /></Link>
                </Menu.Item>
                <Menu.Item key="/about">
                    <Link to="/about" className="item"><FormattedMessage id="main.navigator.about" /></Link>
                </Menu.Item>
                <Menu.Item key="/help">
                    <Link to="/help" className="item"><FormattedMessage id="main.navigator.help" /></Link>
                </Menu.Item>
            </Menu>

            <div style={{ float: 'right', overflow: 'hidden' }}>
                <Dropdown overlay={langMenu}>
                    <Button type="link" ghost>
                        Language <DownOutlined />
                    </Button>
                </Dropdown>
                <Link to="/login" className="item">
                    <Button type="link"><FormattedMessage id="main.navigator.login" /></Button>
                </Link>
                <Link to="/signin" className="item">
                    <Button type="link"><FormattedMessage id="main.navigator.signin" /></Button>
                </Link>
            </div>
        </Header>
    );
};


const mapState = state => ({
    lang: state.language,
});

const mapDispatch = dispatch => ({
    langChange: dispatch.language.langChange,
});

export default connect(mapState, mapDispatch)(MainHeader);
