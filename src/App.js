import './App.css';
import {
  BrowserRouter as Router,
  Routes,
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
import Pay from './Pages/Dashboard/Pay/Pay';
import MyOrders from './Pages/Dashboard/MyOrders/MyOrders';
import ManageAllOrders from './Pages/Dashboard/ManageAllOrders/ManageAllOrders';
import AddAProduct from './Pages/Dashboard/AddAProduct/AddAProduct';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';
import ManageProducts from './Pages/Dashboard/ManageProducts/ManageProducts';


function App() {
  return (
    <div className="App">
      <AuthProvider>
      <Router>
        <Header></Header>
          <Routes>
          <Route exact path='/' element={<Home></Home>}>
          </Route>

            <Route path="/home" element={<Home/>}> 
            </Route>

            <Route path="/review" element={<Review/>}>
            </Route>
            
            <Route path="/explore" element={<ExploreItems/>}>   
            </Route>

            <Route path="/dashboard" element={<PrivateRoute><Dashboard/></PrivateRoute>}>
              <Route exact path="/dashboard" element={
                <h3 className="text-primary mt-5 fs-1 fw-bold"
                >Please select from dashboard</h3>
              }> 
              </Route>

              <Route path={`/dashboard/pay`} element={<Pay></Pay>}>           
              </Route>

              <Route path={`/dashboard/myOrders`} element={<MyOrders></MyOrders>}>
              </Route>

              <Route path={`/dashboard/review`} element={<Review></Review>}>           
              </Route>

              <Route path={`/dashboard/manageAllOrders`} element={<ManageAllOrders></ManageAllOrders>}>
              </Route>

              <Route path={`/dashboard/addAProduct`} element={<AddAProduct></AddAProduct>}>
              </Route>

              <Route path={`/dashboard/makeAdmin`} element={<MakeAdmin></MakeAdmin>}>
              </Route>

              <Route path={`/dashboard/manageProducts`} element={<ManageProducts></ManageProducts>}>
              </Route>
            </Route>

            <Route path="/purchase/:productID" element={<PrivateRoute><Purchase/></PrivateRoute>}>
            </Route>

            <Route path="/explorePurchase/:allProductID" element={<PrivateRoute><ExplorePurchase/></PrivateRoute>}>
            </Route>

            <Route path="/login" element={<Login/>}> 
            </Route>

            <Route path="/register" element={<Register/>}>  
            </Route>

            <Route path='*' element={<NotFound></NotFound>}>
            </Route>
          </Routes>

        <Footer></Footer>
        </Router>
      </AuthProvider>
      
    </div>
  );
}

export default App;
