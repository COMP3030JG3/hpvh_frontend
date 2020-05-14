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
        avatar: "employee",
        name: props.eloginInfo.username,
        description: props.eloginInfo.level,
    }

    return (
        <SideMenu
            messages={props.intl.messages}
            data={data}
            menuKey={props.dashBoardContent}
            onMenuClick={onMenuClick}
            elogout={props.elogout}
            onLangChange={onLangChange} />
    );
};

const mapState = state => ({
    dashBoardContent: state.dashBoard.dashBoardContent,
    lang: state.language,
    eloginInfo: state.validation.eloginInfo
});

const mapDispatch = dispatch => ({
    switchDashBoardContent: dispatch.dashBoard.switchDashBoardContent,
    langChange: dispatch.language.langChange,
    elogout: dispatch.validation.elogout
});



export default injectIntl(connect(mapState, mapDispatch)(SideMenuContainer));