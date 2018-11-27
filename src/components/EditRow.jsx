import React,{Component} from 'react';
import {connect} from 'react-redux';
import { editItem } from '../actions/addEdit';
import EditRowForm from './EditRowForm';



class EditRow extends Component
{
    onSubmit=(item)=>{
        console.log("onSubmit of EditRow called.");
        console.log(item.data);
        console.log(this.props);
        this.props.editItem(this.props.item.id,item.data);
    }
    
    render()
    {
        console.log("EditRow rendered,Rendering===EditRowForm");
        console.log(this.props.item);
        return(<EditRowForm onSubmit={this.onSubmit} 
                            item={this.props.item}
                />
            );
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
editItem:editItem
};

// const mapStateToProps = (state, props) => ({
//     item: state.items.find((item) => item.id === props.match.params.id)
//   });

  const mapStateToProps=(state,props)=>{
    console.log("EditRow:mapStateToProps called");
    console.log(state);
    console.log(props);
    return {
            //items:startFetchAPISuccess(state.items.data)
            item: state.items.find((item) => (item.id === props.id))
    };
}

export default connect(mapStateToProps,mapDispatchToProps)(EditRow);
