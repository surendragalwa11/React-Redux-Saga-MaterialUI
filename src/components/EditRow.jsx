import React,{Component} from 'react';
import {connect} from 'react-redux';
import { editItem } from '../actions/addEdit';
import EditRowForm from './EditRowForm';



class EditRow extends Component
{
    onSubmit=(item)=>{
        this.props.editItem(this.props.item.id,item.data);
    }
    
    render()
    {
        return(<EditRowForm onSubmit={this.onSubmit} 
                            item={this.props.item}
                />
            );
    }
}

const mapDispatchToProps={
editItem:editItem
};

  const mapStateToProps=(state,props)=>{
    return {
            item: state.items.find((item) => (item.id === props.id))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditRow);
