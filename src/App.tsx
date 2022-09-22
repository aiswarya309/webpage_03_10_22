import './App.css';
import Login from './component/Login/Login';
import { Provider } from 'react-redux';
import store from './Redux/store';
import {BrowserRouter as Router ,Route , Switch,} from 'react-router-dom';
import PrivateRoute from './component/PrivateRoute';
import PageHome from './Pages/PageHome/PageHome';
import PageEmployee from './Pages/PageEmployee/PageEmployee'
import PageAbout from './Pages/PageAbout/PageAbout'
import PageFeedback from './Pages/pageFeedback/pageFeedback'
import PageEmployeeFullDetails from './Pages/pageEmployeeFullDetails/pageEmployeeFullDetails'

function App() {
  return (
    <Provider store={store}>
      <Router>
      <div className="App">
        <Switch> 
          <Route  path='/login'>
            <Login />
          </Route>
          <PrivateRoute  component={PageHome} path='/'  exact/>
          <PrivateRoute component={PageEmployee} path='/pageemployee'   exact/>
          <PrivateRoute component={PageAbout} path='/about' exact/>
          <PrivateRoute component={PageFeedback} path='/feedback'  exact/>
          <Route path='/pageEmployeeFullDetails' component={PageEmployeeFullDetails}/>
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

export default App;
