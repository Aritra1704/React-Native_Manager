import React from 'react';
import {Navigator} from 'react-native';
import {Scene, Router, Actions} from 'react-native-router-flux';
import Loginform from './components/Loginform';
import EmployeeList from './components/EmployeeList';
import EmployeeCreate from './components/EmployeeCreate';
import EmployeeEdit from './components/EmployeeEdit';

const RouterComponent = () => {
  return (
    <Router sceneStyle={{paddingTop: 1}} hideNavBar={true}>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="login" component={Loginform} title="Please login" />
        </Scene>
        <Scene key="main">
          <Scene
            rightTitle="Add"
            onRight={() => {
              Actions.employeeCreate();
            }}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          />
        </Scene>
      </Scene>
    </Router>
  );
};

export default RouterComponent;
