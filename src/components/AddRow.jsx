import React,{Component} from 'react';
import {connect} from 'react-redux';
import { addItem } from '../actions/addEdit';
import AddRowForm from './AddRowForm';



class AddRow extends Component
{
    onSubmit=(item)=>{
        console.log("onSubmit of AddRow called.");
        console.log(item);
        this.props.addItem(item);
    }
    
    render()
    {
        console.log("AddRow rendered,Rendering===AddRowForm");
        return(<AddRowForm onSubmit={this.onSubmit} />);
    }
}

// const mapDispatchToProps=(dispatch)=>({
// addItem:(item)=>dispatch(addItem(item))
// });

// const mapDispatchToProps = (dispatch) => {
//     console.log("AddItem: mapping dispatch to props");
//     return  (item) => dispatch(addItem(item));
//     // return (item)=>dispatch(fetchItem());
//   };

const mapDispatchToProps={
addItem:addItem
}

export default connect(undefined,mapDispatchToProps)(AddRow);
