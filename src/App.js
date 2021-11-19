import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Header from './Pages/Shared/Header/Header';
import Footer from './Pages/Footer/Footer';
import ExploreItems from './Pages/Explore/ExploreItems/ExploreItems';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';
import Purchase from './Pages/Purchase/Purchase';
import ExplorePurchase from './Pages/ExplorePurchase/ExplorePurchase';
import Review from './Pages/Dashboard/Review/Review';
import NotFound from './Pages/NotFound/NotFound';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
          <Switch>
          <Route exact path='/'>
              <Home></Home>
            </Route>

            <Route path="/home">
              <Home/>
            </Route>

            <Route path="/review">
              <Review/>
            </Route>
            
            <Route path="/explore">
              <ExploreItems/>
            </Route>

            <PrivateRoute path="/dashboard">
              <Dashboard/>
            </PrivateRoute>

            <PrivateRoute path="/purchase/:productID">
              <Purchase/>
            </PrivateRoute>

            <PrivateRoute path="/explorePurchase/:allProductID">
              <ExplorePurchase/>
            </PrivateRoute>

            <Route path="/login">
              <Login/>
            </Route>

            <Route path="/register">
              <Register/>
            </Route>

            <Route path='*'>
              <NotFound></NotFound>
            </Route>
          </Switch>

        <Footer></Footer>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
