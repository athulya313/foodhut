import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './components/home/Home.jsx';
import Header from './components/layout/Header.jsx';
import './styles/app.scss';
import './styles/header.scss';
import './styles/home.scss';
import './styles/founder.scss';
import './styles/menu.scss';
import './styles/footer.scss';
import './styles/contact.scss';
import './styles/cart.scss';
import './styles/shipping.scss';
import './styles/confirmorder.scss';
import './styles/paymentsuccess.scss';
import './styles/login.scss';
import './styles/profile.scss';
import './styles/table.scss';
import './styles/orderdetails.scss';
import './styles/dashboard.scss';
import './styles/about.scss';
import Footer from './components/layout/Footer.jsx';
import Contact from './components/contact/Contact.jsx';
import Cart from './components/cart/Cart.jsx';
import Shipping from './components/cart/Shipping.jsx';
import ConfirmOrder from './components/cart/ConfirmOrder.jsx';
import PaymentSuccess from './components/cart/PaymentSuccess.jsx';
import Login from './components/login/Login.jsx';
import Profile from './components/profile/Profile.jsx';
import MyOrders from './components/myorders/MyOrders.jsx';
import OrderDetails from './components/myorders/OrderDetails.jsx';
import Dashboard from './components/admin/Dashboard.jsx';
import Users from './components/admin/Users';
import Orders from './components/admin/Orders.jsx';
import About from './components/about/About.jsx';
import NotFound from './components/layout/NotFound.jsx';
import { useDispatch,useSelector } from 'react-redux';
import { useEffect } from 'react';
import { loadUser } from './redux/actions/user';
import toast, { Toaster } from 'react-hot-toast';


function App() {
  const dispatch=useDispatch();

  const { error, message,isAuthenticated,user}=useSelector((state) => state.auth);
    //(state) => state.auth
  //);

  useEffect(()=>{
    dispatch(loadUser());
  },[dispatch]);

  useEffect(()=>
  {
    if (error){
      toast.error(error);
      dispatch({
        type:"clearError"
      });
    }
    if (message){
      toast.success(message);
      dispatch({
        type:"clearMessage"
      })
    }
  }, [dispatch,error,message]);

  return (
   <Router>
    <Header isAuthenticated={true} />
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/contact' element={<Contact/>} />
      <Route path='/cart' element={<Cart/>} />
      <Route path='/shipping' element={<Shipping/>}/>
      <Route path='/confirmorder' element={<ConfirmOrder/>}/>
      <Route path='/paymentsuccess' element={<PaymentSuccess/>} />
      <Route path='/login' element={<Login/>}/>
      <Route path='/me' element={<Profile/>}/>
      <Route path='/myorders' element={<MyOrders/>}/>
      <Route path='/order/:id' element={<OrderDetails/>}/>
      <Route path='/admin/dashboard' element={<Dashboard/>}/>
      <Route path='/admin/users' element={<Users/>}/>
      <Route path='/admin/orders' element={<Orders/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/*' element={<NotFound/>}/>
    </Routes>
    <Footer/>
    <Toaster/>
   </Router>
  );
}

export default App;
