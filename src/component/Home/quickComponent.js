import React ,{Component} from 'react';
import QuickDisplay from './quickDisplay';
import './quickComponent.css';

const url='https://zomatoapidb.herokuapp.com/mealtype'


class QuickSearch extends Component {
    constructor() {
        super()
        this.state={mealType:''}
        
    }
    render() {
        return(
                <>
                    <div id="quicksearch">
                        <div id="word">
                            <span id="word1">Quick Search</span>
                            <span id="word2">Find by different categories</span>
                            <QuickDisplay mealData={this.state.mealType}/>
                        </div>
                        
                    </div>
                   
                </>
            
            
            )
    }
    ///api calling
    componentDidMount()
    {
        fetch(url,{method:'GET'})
        .then((res)=>res.json())
        .then((data)=>{
            this.setState({mealType:data})
        })
    }

}


export default QuickSearch;