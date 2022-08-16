import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import Home from './component/Home/Home';
import Listing from './component/listing/listing';
import RestDetails from './component/details/resDetails';
import Header from './header';
import Footer from './footer';
import PlaceOrder from './component/booking/placeOrder';
import ViewOrder from './component/booking/viewOrder';
import Login from './component/login/login';
import Register from './component/login/register';

const Routing =() =>{
    return(
            <BrowserRouter>
                <Header/>
                    <Route  exact path="/" component={Home}/>
                    <Route  path="/listing/:id" component={Listing}/>
                    <Route path="/details" component={RestDetails}/>
                    <Route path="/placeOrder/:restName" component={PlaceOrder}/>
                    <Route path="/viewOrder" component={ViewOrder}/>
                    <Route path="/login" component={Login}/>
                    <Route path="/register" component={Register}/>
                   
                <Footer/>
            </BrowserRouter>
        )
}


export default Routing