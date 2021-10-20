//import logo from './logo.svg';
//import './App.css';
import { BrowserRouter as Router,  Switch, Route} from "react-router-dom";
import Login from "./components/login_oauth2/Login";
import Masterproduct from "./components/master_product/Masterproduct";
import Newproduct from "./components/product_register/Productregister";
import Salesmaster from "./components/sales_master/Salesmaster";
import Salesregister from "./components/sales_register/Salesregister";
import Usermaster from "./components/user_master/Usermaster";
import Home from "./components/landing/Home";
//import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {} from '@fortawesome/free-solid-svg-icons'
import {} from '@fortawesome/fontawesome-svg-core'
//import { faGoogle } from '@fortawesome/free-brands-svg-icons'

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path ={['/product', '/product/new']}>
            <Switch>
              <Route path="/product/new">
                <Newproduct/>
              </Route>
              <Route path="/product">
                <Masterproduct/>
              </Route>
            </Switch>
          </Route>

          <Route path={['/sales', '/sales/new']}>
            <Switch>
              <Route path="/sales/new">
                <Salesregister/>
              </Route>
              <Route path="/sales">
                <Salesmaster/>
              </Route>
            </Switch>
          </Route>
          
          <Route path="/user">
            <Usermaster/>
          </Route>

          <Route path={['/', '/login']}>
            <Switch>
              <Route path='/login'>
                <Login />
              </Route>
              <Route path='/'>
                <Home />
              </Route>
            </Switch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
