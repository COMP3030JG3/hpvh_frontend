import React, { Component } from "react";
import Tracks from "./Tracks"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

class TracksContainer extends Component {

    componentWillMount() {

        return this.props.firstLoading ? this.props.getTracks(1) : {};
    }

    render() {
        const data = {
            index: 1,
            total: 3,
            count: 3,
            items:
                [
                    {
                        id: 1,
                        index: 0,
                        customerName: 'John',
                        petName: 'Kitty',
                        gender: 'Male',
                        species: 'Cat',
                        meetingCity: 'Beijing',
                        description: 'Good pet',
                        image: '',
                        surgeryTime: '2020.4.8',
                        appointmentDate: '2020.1.31'
                    },
                    {
                        id: 2,
                        index: 1,
                        customerName: 'Zhang San',
                        petName: 'Wang Cai',
                        gender: 'Male',
                        species: 'Dog',
                        meetingCity: 'Shanghai',
                        description: 'Pretty pet',
                        image: '',
                        surgeryTime: '2020.5.6',
                        appointmentDate: '2020.4.29'
                    },
                    {
                        id: 3,
                        index: 2,
                        customerName: 'John',
                        petName: 'Kitty',
                        gender: 'Male',
                        species: 'Cat',
                        meetingCity: 'Beijing',
                        description: 'Good pet',
                        image: '',
                        surgeryTime: '2020.4.8',
                        appointmentDate: '2020.1.31'
                    },

                ]
        };
        const onPageChange = (e) => {
            this.props.getTracks(e.current);
        }


        return (
            <Tracks data={data} onPageChange={onPageChange} />
        );
    }
};

const mapState = state => ({
    //lang: state.language,
    tracksData: state.my.tracksData,
    firstLoading: state.my.firstLoading,
});

const mapDispatch = dispatch => ({
    langChange: dispatch.language.langChange,
    getTracks: dispatch.my.getTracks,
});

export default injectIntl(connect(mapState, mapDispatch)(TracksContainer));