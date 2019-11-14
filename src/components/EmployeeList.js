import _ from 'lodash';
import React, {Component} from 'react';
import {connect} from 'react-redux';
import {FlatList} from 'react-native';
import {employeeFetch} from '../actions';
import ListItem from './ListItem';

class EmployeeList extends Component {
  componentWillMount() {
    this.props.employeeFetch();
    this.renderRow(this.props);
  }

  componentWillReceiveProps(nextProps) {
    this.renderRow(this.nextProps);
  }

  renderRow(employee) {
    return <ListItem employee={employee} />;
  }

  render() {
    return (
      <FlatList
        data={this.props.employees}
        extraData={this.props.employees}
        renderItem={({item}) => this.renderRow(item)}
        keyExtractor={employee => employee.uid}
      />
    );
  }
}

const mapStateToProps = state => {
  const employees = _.map(state.employees, (val, uid) => {
    return {...val, uid};
  });
  return {employees};
};

export default connect(
  mapStateToProps,
  {employeeFetch},
)(EmployeeList);
