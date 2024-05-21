import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Login from "./components/Login";
import Header from './components/Header';
import './App.css';
import Home from './components/Home';
import Detail from './components/Detail';
import Upload from './components/Upload';
import AllCourses from './components/AllCourses';
import MyCourses from './components/MyCourses';
import Cart from './components/Cart';
import PurchasedCourses from './components/PurchasedCourses';
import PurchaseDetail from './components/PurchasedDetail';

function App() {

  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route exact path="/">
            <Login></Login>
          </Route>
          <Route path='/cart'>
            <Cart />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/allCourses">
            <AllCourses />
          </Route>
          <Route path='/detail/:id'>
            <Detail />
          </Route>
          <Route path='/purchasedDetail/:id'>
            <PurchaseDetail />
          </Route>
          <Route path='/upload'>
            <Upload />
          </Route>
          <Route path='/myCourses'>
            <MyCourses />
          </Route>
          <Route path='/purchasedCourses'>
            <PurchasedCourses />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
