import React from 'react';
import {Link} from 'react-router-dom';
import './listing.css';

const ListingDisplay =(props)=>{
    
    const renderData = ({listData}) => {
        if(listData){
            if(listData.length>0){
                return listData.map((item) => {
                    return(
                       
                           <div  className="content1">
                                
                                <div className="subcontent1">
                                    <img src={item.restaurant_thumb} alt="Burger"/>
                                </div>
                                <div className="subcontent2">
                                    <span className="head"><Link to={`/details?restId=${item.restaurant_id}`}>{item.restaurant_name}</Link></span>
                                    <p> Burger, Fast Food, Desserts, Beverages</p>
                                    <p>{item.address}</p>
                                    <p> Open now</p>
                                    <p>RS. {item.cost}</p>
                                    <div className="labelDiv">
                                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span className="label label-primary">
                                                {item.mealTypes[0].mealtype_name}
                                            </span> &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span className="label label-success">
                                                {item.mealTypes[1].mealtype_name}
                                            </span>
                                        </div>
                                        <br/>
                                        <div className="labelDiv">
                                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                                            <span className="label label-info">
                                                {item.cuisines[0].cuisine_name}
                                            </span> &nbsp;
                                            <span className="label label-danger">
                                                {item.cuisines[1].cuisine_name}
                                            </span>
                                        </div>
                                </div>
                                
                           </div>
                                
                            
                        
                    )
                })

            }else{
                return(
                    <div>
                        <h2>No Data For the Filter</h2>
                    </div>
                )
            }
        }else{
            return(     
                <div>
                    <img src="Loader.gif" alt="loader"/>
                    <h2>Loading....</h2>
                </div>
            )
        }
    }


    return(
        <div >
            {renderData(props)}
        </div>
    )

}

export default ListingDisplay;