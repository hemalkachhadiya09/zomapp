import React,{Component} from 'react';
import {Link,withRouter} from 'react-router-dom';
import './search.css';



const url="https://zomatoapidb.herokuapp.com/location"
const resturl="https://zomatoapidb.herokuapp.com/restaurants"


class Search extends Component {

    constructor(props){
        super(props)

        this.state={
            location:'',
            restaurants:''
        }
    }
    renderCity = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.state_id} key={item.state_id}>{item.state}</option>
                )
            })
        }
    }

    renderRest = (data) => {
        if(data){
            return data.map((item) => {
                return(
                    <option value={item.restaurant_id} key={item.restaurant_id}>{item.restaurant_name} | {item.address}</option>
                )
            })
        }
    }

    handleCity = (event) => {
        let stateId = event.target.value;
        console.log(stateId)
        fetch(`${resturl}?stateId=${stateId}`,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({restaurants:data})
        })
    }
    handleRest = (event) => {
        const restId = event.target.value;
        this.props.history.push(`/details?restId=${restId}`)
    }




    render(){
        return(
            <div>
                <div id="search">
                    <div id="logo">

                    </div>
                    <div id="iden">
                        <span>Z!</span>
                    </div>
                    <div id="text">
                        <span>Find Your Restuarnts By City Name</span>
                    </div>
                    <div id="find">
                        <div class="find1">
                            <select onChange={this.handleCity}>
                                <option>------------------Select City--------------------</option>
                                {this.renderCity(this.state.location)}
                            </select>
                        </div>
                        <div class="find1">
                            <select onChange={this.handleRest}>
                                <option>-----------Search Near By Restuarants-----------</option>
                                {this.renderRest(this.state.restaurants)}
                            </select>
                        </div>
                    </div>
                </div>
            </div>
            )
    }
    // api calling on page load
    componentDidMount() {
        fetch(url,{method:'GET'})
        .then((res) => res.json())
        .then((data) => {
            this.setState({location:data})
        })
    }
}

export default withRouter(Search);