import React,{Component} from 'react';
import {connect} from 'react-redux';
import { addItem } from '../actions/addEdit';
import AddRowForm from './AddRowForm';



class AddRow extends Component
{
    onSubmit=(item)=>{
        this.props.addItem(item);
    }
    
    render()
    {
        return(<AddRowForm onSubmit={this.onSubmit} />);
    }
}

const mapDispatchToProps={
addItem:addItem
}

export default connect(undefined,mapDispatchToProps)(AddRow);
