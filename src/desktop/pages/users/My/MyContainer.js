import React from "react";
import My from "./My"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';


const MyContainer = (props) => {
    console.log(props)
    return (

        <My myContent={props.myContent} />
    );
};


const mapState = state => ({
    myContent: state.my.myContent,

});

const mapDispatch = dispatch => ({
    switchMyContent: dispatch.my.switchMyContent,

});


export default injectIntl(connect(mapState, mapDispatch)(MyContainer));