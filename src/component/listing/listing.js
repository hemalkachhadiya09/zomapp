import React,{Component} from 'react';
import axios from 'axios';
import './listing.css';
import ListingDisplay from './listingDisplay';
import CuisineFilter from '../filter/cuisineFilter';
import CostFilter from '../filter/costFilter';


const url='https://zomatoapidb.herokuapp.com/restaurants'


class Listing extends Component {

    constructor(props)
    {
        super(props)
        
        this.state = {restaurants:''}
    }
    setDataPerFilter = (data) => {
        this.setState({restaurants:data})
    }

    render()
    {
        return(
            <>
                    <p class="headingText">List of Restuarants</p>
                    <div id="content">
                        <div id="filterDiv">
                            <h1 id="fil">Filter</h1>
                            <hr/>
                            <CuisineFilter mealId={this.props.match.params.id}
                            restPerCuisine={(data) => {this.setDataPerFilter(data)}}/>
                            <hr/>
                            <CostFilter restPerCost={(data) => {this.setDataPerFilter(data)}}/>
                        </div>
                        <div  className="content1">
                            <ListingDisplay listData={this.state.restaurants}/>
                        </div>
                        
                        
                    </div>
            </>

        )
    }

    //api calling
    componentDidMount()
    {
       let meal_Id=this.props.match.params.id?this.props.match.params.id:'5';  
       sessionStorage.setItem('mealId',meal_Id)
       axios.get(`${url}?mealId=${meal_Id}`)
       .then((res)=>{this.setState({restaurants:res.data})})
    }
}

export default Listing;