import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Login from './Pages/Authentication/Login/Login';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import Register from './Pages/Authentication/Register/Register';
import BuyCar from './Pages/Shared/BuyCar/BuyCar';
import PrivateRoute from './Pages/Authentication/PrivateRoute/PrivateRoute';
import MyOrder from './Pages/Dashboard/MyOrder/MyOrder';
import ManageAllOrder from './Pages/Dashboard/ManageAllOrder/ManageAllOrder';
import AddCar from './Pages/Dashboard/AddCar/AddCar';
import AddReview from './Pages/Dashboard/AddReview/AddReview';
import ManageCars from './Pages/Dashboard/ManageCars/ManageCars';
import MakeAdmin from './Pages/Dashboard/MakeAdmin/MakeAdmin';



function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Switch>
            <Route exact path="/">
              <Home></Home>
            </Route>
            <Route path="/home">
              <Home></Home>
            </Route>
            <Route path="/login">
              <Login></Login>
            </Route>
            <Route path="/register">
              <Register></Register>
            </Route>
            <PrivateRoute path="/myorder">
              <MyOrder></MyOrder>
            </PrivateRoute>
            <PrivateRoute path="/managecars">
              <ManageCars></ManageCars>
            </PrivateRoute>
            <PrivateRoute path="/makeadmin">
              <MakeAdmin></MakeAdmin>
            </PrivateRoute>
            <PrivateRoute path="/addcar">
              <AddCar></AddCar>
            </PrivateRoute>
            <PrivateRoute path="/addreview">
              <AddReview></AddReview>
            </PrivateRoute>
            <PrivateRoute path="/manageAllOrder">
              <ManageAllOrder></ManageAllOrder>
            </PrivateRoute>
            <PrivateRoute path="/buycar/:orderId">
              <BuyCar></BuyCar>
            </PrivateRoute>
          </Switch>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
