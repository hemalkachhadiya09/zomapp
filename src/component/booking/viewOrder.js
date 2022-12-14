import React,{Component} from 'react';
import axios from 'axios';
import OrderDisplay from './orderDisplay';

const url = "http://localhost:9100/orders";

class ViewOrder extends Component {
    constructor(props) {
        super(props)

        this.state={
            orders:''
        }
    }

    render(){
        return(
            <OrderDisplay orderData={this.state.orders}/>
        )
    }

    //api Call 
    componentDidMount(){
        axios.get(`${url}`).then((res)=>{this.setState({orders:res.data})})
    }

}

export default ViewOrder