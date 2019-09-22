import React, { Component } from 'react';
// import Card from "./Card";

export default class Home extends Component {
    constructor(){
        super();
        this.state={
            list:{name:"",
            color:"",
            isfavorite: false},
            newarr:[]
        }
    }
    handlechange=(e)=>{
        this.setState({
            name:e.target.value
        })
    }
    handlechangecolor=(eve)=>{
        this.setState({
            color:eve.target.value
        })
    }
    handleSubmit =(event)=>{
            event.preventDefault();
            const myarray =this.state.newarr;
            this.setState({
                newarr:myarray.push(event)
            })
    }

    handlefavorite=()=>{
        this.setState({
            isfavorite: !this.state.isfavorite

        })
    }
// [1,2,3]
    handlermv=(item)=>{
        const myarr = this.state.newarr;
        this.setState({
            newarr: myarr.pop(item)
        })
    }

    render() {
        const fresharr = this.state.newarr;
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                Name:<input type="text" onChange={this.handlechange}/>
                color:<input type="text" onChange={this.handlechangecolor}/>
                <input type="submit" value="add item" />
                </form>
                <p>{fresharr.map(function(data){
                    return(
                        <div>
                            <p>{data.name}</p>
                            <p>{data.color}</p>
                            <p>{data.isfavorite}</p>
                            <input type="button" value="Favorite" handlefav={this.handlefavorite}/>
                            <input type="button" value="Delete" onclick={this.handlermv}/>
                        </div>
                    );
                })}</p>
                {/* <Card name={this.state.list.name} color={this.state.list.color} isvorite={this.state.list.isfavorite}/> */}
                
            </div>
        )
    }
}
