import React from 'react';
import {Link} from 'react-router-dom';
import './quickComponent.css'



const QuickDisplay = (props) =>

{
    const listMeal =({mealData}) =>
    {
        if(mealData)
        {
            return mealData.map((item)=>{
                return(
                        <Link to={`listing/${item.mealtype_id}`} key={item._id}>
                            <div className="main1">
                                <div className="submain1">
                                    <img src={item.meal_image} alt={item.mealtype} title="Breakfast"/>
                                </div>
                                <div className="submain2">
                                    <h2 className="mainhead1">{item.mealtype}</h2>
                                    <h3 className="mainhead2">{item.content}</h3>
                                </div>
                            </div>
                            
                        </Link>                    )
            })
        }

    }
    return(
        <>
            <div >
                {listMeal(props)}
            </div>
        </>
       
        )
}





export default QuickDisplay;
