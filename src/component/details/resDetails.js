import React,{Component} from 'react';
import axios from 'axios';
import './details.css';
import {Link} from 'react-router-dom';
import MenuDisplay from './menuDisplay';

const url = "https://zomatoapidb.herokuapp.com";

class RestDetails extends Component {
    constructor(){
        super()

        this.state={
            details:'',
            menuList:'',
            userItem:'',
            mealId:sessionStorage.getItem('mealId')?sessionStorage.getItem('mealId'):'1'
        }
    }
    addToCart = (data) => {
        this.setState({userItem:data})
    }
    proceed = () => {
        sessionStorage.setItem('menu', this.state.userItem);
        this.props.history.push(`/placeOrder/${this.state.details.restaurant_name}`)
    }

    render()
    {   let details=this.state.details
        return(
            <>
                <div id="demain">
                    <div id="subdemain1">
                        <img src={details.restaurant_thumb} alt="image"/>

                    </div>
                    <div id="subdemain2">
                        <h1>{details.restaurant_name}</h1>
                        
                        <h3>{details.average_rating} Rating</h3>
                        <h3>Price :{details.cost} </h3>
                        <h3>Price:<strike>₹1600</strike></h3>
                        <h3>You Save:₹799</h3>
                        <div id="feature">
                            <div id="subfeature">
                                <img src="https://i.ibb.co/wdLKNTG/veg.jpg" alt="Vegetarian" class="f1"/>
                                <p>pure veg</p>
                                
                            </div>
                            <div id="subfeature">
                                <img src="https://i.ibb.co/mz81Ptf/sanitized.jpg" alt="Fully Sanitized" class="f1"/>
                                <p>Fully senitized</p>
                            </div>
                            <div id="subfeature">
                                <img src="https://i.ibb.co/VvrHv4c/free.png" alt="Free Delivery" class="f1"/>                        
                                <p>Free Delivery</p>                            
                            </div>

                        </div>
                        <h1 id="a1">Available</h1>
                        <div className="dn">
                            <Link to="/" className="btn btn-success bn"> Add to cart </Link>
                            <button className="btn btn-danger bn" onClick={this.proceed}> Checkout </button>
                        </div>


                    </div>
                    
                </div>
                <div className="col-md-12">
                    <MenuDisplay menudata={this.state.menuList} finalOrder={(data) => {this.addToCart(data)}}/>
                </div>
                
            </>
            )
    }

           
    

    // calling with async await 
    async componentDidMount(){
        let restId = this.props.location.search.split('=')[1];
        let response = await axios.get(`${url}/details/${restId}`)
        console.log(">>>>",restId)
        let menu = await axios.get(`${url}/menu/${restId}`)
        this.setState({details:response.data[0],menuList:menu.data})
    }
}


export default RestDetails;