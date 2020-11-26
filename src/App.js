import { Route, Switch, Link, Redirect, withRouter } from 'react-router-dom';
import { routerConfig } from '@/router/index';
function App() {
  return (
    <div className="App">
      <Link to="/a">A</Link>
      <Link to="/b">B</Link>
      <Switch>
        {routerConfig.map((item) => {
          return (
            <Route path={item.path} component={item.component} exact={item.exact} key={item.path} />
          );
        })}
        <Redirect to="/a" />
      </Switch>
    </div>
  );
}

export default withRouter(App);
