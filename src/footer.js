import React,{Fragment} from 'react';
import './Footer.css'



const Footer =(props) =>{
    console.log(">>>>Props",props)
    return(
        <div id="footer">
            <div className="vl">
                <h4 className="footerlast"><u>MOST POPULAR CATEGORIES</u></h4>
                <p >Staple</p>
                <p>Dinner</p>
                <p>lunch</p>
                <p>Snacks</p>
            </div>
            <div className="vl">
                <h4 className="footerlast"><u>CUSTOMER SERVICES</u></h4>
                <p>About Us</p>
                <p>FAQ</p>
                <p>Term and Conditions</p>
                <p>Cancellation and Return Policy</p>
            </div>
            <div classNamel="vl noborder">
                <h4 className="footerlast"><u>CONTACT US ON</u></h4>
                <div id="web">
                    <div className="done">
                        <a href="http://instagram.com" target="__blank">
                            <img src="https://i.ibb.co/YRjrxhC/insta.png" alt="Instagram " className="slogo"/>
                        </a>
                    </div>
                    <div className="done">
                        <a href="http://youtube.com" target="__blank">
                            <img src="https://i.ibb.co/zRSTJ0w/youtube1.png" alt="Youtube" className="slogo"/>
                        </a>
                    </div>
                    <div className="done">
                        <a href="https://www.facebook.com" target="__blank">
                            <img src="https://i.ibb.co/sv7zMKm/facebook.png" alt="Facebook" className="slogo"/>
                        </a>
                    </div>
                    
                </div> 

            </div>
        </div>
        )
}


export default Footer