import React, {Component} from "react";

class MemeGenerator extends Component {
    constructor() {
        super();
        this.state = {
            topText: "",
            bottomText: "",
            randomImg: "http://i.imgflip.com/1bij.jpg",
            allMemeImgs: []
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({[name]:value})
    }

    handleSubmit(event) {
        event.preventDefault();
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMemeImg = this.state.allMemeImgs[randNum].url
        this.setState({ randomImg: randMemeImg}) 
    }

    async componentDidMount() {
        const response = await fetch("https://api.imgflip.com/get_memes");
        const dataMemes = await response.json();
        this.setState({ allMemeImgs: dataMemes.data.memes })
    }

    render(){
        return (
            <div>
                <form onSubmit={this.handleSubmit} className="meme-form">
                    <input
                        className="top" 
                        type="text"
                        placeholder="Top Text" 
                        name="topText" 
                        value={this.state.topText} 
                        onChange={this.handleChange}/>
                    <br />

                    <input
                        className="bottom" 
                        type="text"
                        placeholder="Bottom Text" 
                        name="bottomText" 
                        value={this.state.bottomText} 
                        onChange={this.handleChange}/>

                    <button>Gen</button>
                </form>
                <div className="meme">
                        <img src={this.state.randomImg} alt="" />
                        <h2 className="top">{this.state.topText}</h2>
                        <h2 className="bottom">{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default MemeGenerator