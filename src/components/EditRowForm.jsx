import React,{Component} from 'react'
import EditRowForm2 from './EditRowForm2';

class EditRowForm extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            fname:props.item ? props.item.first_name : '',
            lname:props.item ? props.item.last_name : '',
            iurl:props.item ? props.item.avatar : ''
        };
    }

    
    onSubmit=()=>{
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
        this.setState({fname:Fname});    
    };
    onLnameChange=(e)=>{
        const Lname=e.target.value;
        this.setState({lname:Lname});   
    };
    
    onIurlChange=(e)=>{
        const Iurl=e.target.value;
        this.setState({iurl:Iurl});    
    };

    render()
    {
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
