import React, { Component } from 'react'
import './App.scss'
class App extends Component {
    constructor(props){
        super(props)
        this.state={color:'#f44336',quote:""}
        this.randomColor=this.randomColor.bind(this)
    }
    componentDidMount(){
        this.randomColor();
        this.randomQuotes();
    }
    randomQuotes=() =>{
        const Quotes=[
        'Happy is he who says, "I am a Turk".',
        'As they have come, so they will go.',
        "I have been able to teach many things to this nation, but I haven't been able to teach how to be lackeys.",
        "I am not ordering you to attack, I am ordering you to die.",
        "Do not be afraid of telling the truth.",
        "You will see my children, in the future everything will be done from the sky. All wars and civilizations will be in the skies above. That's why we must give great importance to the air force. The future is in the sky.",
        "Teachers are the one and only people who save nations.",
        "We Turks are a people who, throughout our history, have been the very embodiment of freedom and independence."
            
    ]
    this.setState({quote:Quotes[Math.floor(Math.random()*Quotes.length)]})
        
    }
    randomColor =() =>{
        
        const colors=['#f44336','#9c27b0','#673ab7','#3f51b5','#2196f3','#009688']
        
        this.setState({color:colors[Math.floor(Math.random()*colors.length)]})
    }
    render() {
        return (
            <div className="container" style={{backgroundColor:this.state.color}}>
                <div id="quote-box">
                    <div id="quote">
                    <p id="text" style={{color:this.state.color}}><i style={{marginRight:'5px'}} className="fas fa-quote-left"></i>{this.state.quote}</p>
                    <small style={{color:this.state.color}} id="author">--  M.Kemal Ataturk</small>
                    </div>
                    <div id="button-area">
                    <a href={`https://www.twitter.com/intent/tweet?hashtags=quotes&related=ataturk&text="${this.state.quote}"`} target="_blank" style={{backgroundColor:this.state.color}} id="tweet-quote"><i className="fab fa-twitter"></i></a>
                    <button type="button"style={{backgroundColor:this.state.color}} id="new-quote" onClick={()=>{this.randomColor();this.randomQuotes()}}>New Quote</button>
                    
                    </div>
                    
                </div>
            </div>
        )
    }
}
export default App