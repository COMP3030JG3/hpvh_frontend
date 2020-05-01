import React from "react";
import SideMenu from "./SideMenu"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const SideMenuContainer = (props) => {
    const onLangChange = (e) => {
        props.langChange(e.key);
    }

    const onMenuClick = (e) => {
        props.switchDashBoardContent(e.key);
    }



    const data = {
        avatar: "/avatar",
        name: "name",
        description: "description"
    }

    return (
        <SideMenu
            messages={props.intl.messages}
            data={data}
            menuKey={props.dashBoardContent}
            onMenuClick={onMenuClick}
            onLangChange={onLangChange} />
    );
};

const mapState = state => ({
    dashBoardContent: state.dashBoard.dashBoardContent,
    lang: state.language,
});

const mapDispatch = dispatch => ({
    switchDashBoardContent: dispatch.dashBoard.switchDashBoardContent,
    langChange: dispatch.language.langChange,
});



export default injectIntl(connect(mapState, mapDispatch)(SideMenuContainer));