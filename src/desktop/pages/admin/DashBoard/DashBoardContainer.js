import React from 'react';
import DashBoard from './DashBoard';
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

const DashBoardContainer = (props) => {
    console.log(props)
    return (
        <DashBoard dashBoardContent={props.dashBoardContent} />
    );
}


const mapState = state => ({
    dashBoardContent: state.dashBoard.dashBoardContent,

});

const mapDispatch = dispatch => ({
    switchDashBoardContent: dispatch.dashBoard.switchDashBoardContent,

});

export default injectIntl(connect(mapState, mapDispatch)(DashBoardContainer));