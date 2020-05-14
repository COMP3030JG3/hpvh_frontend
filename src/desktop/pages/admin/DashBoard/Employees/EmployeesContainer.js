import React from "react";
import Employees from "./Employees"
import { connect } from 'react-redux';
import { injectIntl } from 'react-intl';

class EmployeesContainer extends React.Component {



    componentDidMount() {
        if (this.props.firstLoad.employees) {
            this.props.getEmployees({ index: 1 });
        }
    }


    render() {

        let d
        let data = null;
        let page = {};
        if (!this.props.firstLoad.employees) {
            d = this.props.employees.item;
            if (d !== undefined) {
                data = d.map(e => {
                    return {
                        ...e,
                    }
                })
            }
            let { item, ...p } = this.props.employees
            page = p
        }
        const onPageChange = (e) => {
            this.props.getEmployees({ index: e.current });
        }
        const onComplete = (v) => {
            console.log(v)
        }

        const onEditClick = (v) => {
            this.props.modifyEmployee(v);

        }
        const onAddClick = (v) => {
            this.props.addEmployee(v);
        }

        return (
            <Employees
                messages={this.props.intl.messages}
                data={data}
                page={page}
                onPageChange={onPageChange}
                onEditFinish={onEditClick}
                onAddFinish={onAddClick}
            />
        );
    }
}
const mapState = state => ({
    employees: state.employeesApi.employees,
    firstLoad: state.employeesApi.firstLoad
});

const mapDispatch = dispatch => ({
    firstLoadReducer: dispatch.employeesApi.firstLoadReducer,
    getEmployees: dispatch.employeesApi.getEmployees,
    modifyEmployee: dispatch.employeesApi.modifyEmployee,
    addEmployee: dispatch.employeesApi.addEmployee,
});

export default injectIntl(connect(mapState, mapDispatch)(EmployeesContainer));