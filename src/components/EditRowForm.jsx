import React,{Component} from 'react'
import EditRowForm2 from './EditRowForm2';

class EditRowForm extends Component
{
    constructor(props)
    {
        super(props);
        console.log("Constructor of EditRowForm called");
        console.log(props);
        console.log(props.item);
        console.log(props.item.id);
        this.state={
            fname:props.item ? props.item.first_name : '',
            lname:props.item ? props.item.last_name : '',
            iurl:props.item ? props.item.avatar : ''
        };
        console.log(this.state.fname);
    }

    
   onEditClick=()=>{
        console.log("onEditClick called");
        return this.props.item;
   }

    
    onSubmit=()=>{
    
        console.log("onSubmit of EditROw called");
        console.log(this.props.item.id);
        console.log(this.state);
        this.props.onSubmit({
            "data":[{ 
                "id":this.props.item.id, 
                "first_name":this.state.fname,
                "last_name":this.state.lname,
                "avatar":this.state.iurl
              }]
        });
    }
    

    onFnameChange=(e)=>{
        const Fname=e.target.value;
        console.log("onFnameChange in EditRowForm, called");
        console.log(Fname);
        this.setState({fname:Fname});    
    };
    onLnameChange=(e)=>{
        const Lname=e.target.value;
        console.log("onLnameChange in EditRowForm, called");
        console.log(Lname);
        this.setState({lname:Lname});   
    };
    
    onIurlChange=(e)=>{
        const Iurl=e.target.value;
        console.log("onIurlChange in EditRowForm, called");
        console.log(Iurl);
        this.setState({iurl:Iurl});    
    };

    render()
    {
        console.log(this.props);
        console.log(this.state);
        console.log("We've called EditRowForm component");
        return(
        <div>
            
            <EditRowForm2  fname={this.state.fname} lname={this.state.lname}
                iurl={this.state.iurl} onFnameChange={this.onFnameChange}
                onLnameChange={this.onLnameChange} onIurlChange={this.onIurlChange}
                onEditClick={this.onEditClick} onSubmit={this.onSubmit}
            />
        </div>);
    }
}


export default EditRowForm;