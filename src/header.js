import React,{Component} from 'react';
import {Link} from 'react-router-dom';
import './Header.css';
const authUrl = "https://developerjwt.herokuapp.com/api/auth/userinfo"

class Header extends Component {
    constructor(props){
        super(props)

        this.state={
            
            userData:''  
            
        }
    }

    handleLogout = () => {
        sessionStorage.removeItem('userinfo');
        sessionStorage.setItem('loginStatus',false);
        sessionStorage.removeItem('ltk');
        this.props.history.push('/')
    }
    conditionalHeader = () => {
       
        if(sessionStorage.getItem('ltk'))
        {
            let data=this.state.userData;
            let outArray = [data.name, data.email, data.phone, data.role];
            sessionStorage.setItem('userinfo',outArray);
            sessionStorage.setItem('loginStatus',true)
            return(
                <>
                    <ul className="nav navbar-nav navbar-right">
                        <li><Link to="/" style={{color:"white"}}>
                            <span className="glyphicon glyphicon-user"></span>Hi {data.name}
                            </Link>
                        </li>
                        
                        <button style={{fontSize:13,backgroundColor:"black",marginTop:7}}onClick={this.handleLogout} className="btn btn-danger bt">Logout</button>
                    </ul>
                </>
            )

        }
        else {
            return(
                <>
                <ul className="nav navbar-nav navbar-right">
                    <li><Link to="/register" style={{color:"white"}}><span className="glyphicon glyphicon-user"></span> Sign Up</Link></li>
                    <li><Link to="/login" style={{color:"white"}}><span className="glyphicon glyphicon-log-in"></span> Login</Link></li>
                </ul>
                    
                </>
            )
        }
        
    
        
    
    
        
        
}
    render(){
        
        
        return(
            <div>
                <nav className="navbar navbar-inverse ">
            <div className="container-fluid bgcolor">
                
              <div class="navbar-header">
                  <button type="button" className="navbar-toggle" data-toggle="collapse" data-target="#bar">
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                      <span class="icon-bar"></span>
                  </button>
                  
                <Link  to='/' className="navbar-brand" ><span className="tagi">Food</span></Link>
              </div>
              
                <div class="navbar-collapse collapse" id="bar">
                    <ul>
                        {this.conditionalHeader()}
                    </ul>
                
                </div>    
            </div>
        </nav>
            </div>
            )
    }
    componentDidMount() {
        
        fetch(authUrl,{method:'GET',headers:{
            'x-access-token':sessionStorage.getItem('ltk')
        }})
        .then((res) => res.json())
        .then((data) => {
            this.setState({userData:data})
        })
    }
}

export default Header;