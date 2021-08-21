import React from 'react'
import {HashRouter, Route, Switch} from 'react-router-dom';
import Login from '../pages/login';
import NewCar from '../pages/newCar';
import Rank from '../pages/rank';

// 使用store的方法
import { useLocalReducer } from '../store/useLocalReducer';
import { context } from '../hooks/useLocalContext';

const BasicMap = () => {

  const [state, dispatch] = useLocalReducer();

  return (
    <context.Provider value={{ state, dispatch }}>
      <HashRouter>
        <Switch>
          {/* App页面 */}
          <Route path="/login" component={Login}/>
          <Route path="/new-car" component={NewCar} />
          <Route path="/rank" component={Rank} />
        </Switch>
      </HashRouter>
    </context.Provider>
  );
}

export default BasicMap
