import React from 'react';
import {connect} from 'react-redux';
import { addItem } from '../actions/addEdit';



const AddItem =(props)=>{

        const onFnameChange=(e)=>{
            props.fname=e.target.value;
        };
        const onLnameChange=(e)=>{
            props.fname=e.target.value; 
        }
        const onIurlChange=(e)=>{
            props.fname=e.target.value;
        }
        
        const onSubmit=(e)=>{
            e.preventDefault();
        }

        return(
        <div>
            
                <button type="button" className="btn btn-info btn-lg" 
                    data-toggle="modal" data-target="#myModal"
                >
                    Add Item
               </button>
            

             
            <div className="modal fade" id="myModal" role="dialog">
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button type="button" className="close" data-dismiss="modal">&times;</button>
                            <h4 className="modal-title">Modal Header</h4>
                        </div>
                   <div className="modal-body">
                        <div className="container">
                            <h2>Add new entry</h2>
                            <form  className="form-inline">
                       
                                <label htmlFor="fname">First name</label><br />
                                <input type="text"  placeholder="first name"  
                                    onChange={ onFnameChange }
                                    className="form-control"  required 
                                /> <br />
                    
                                <label htmlFor="lname">Last name</label> <br />
                                <input type="text" placeholder="last name" name="lname" 
                                    onChange={onLnameChange} 
                                    className="form-control" required
                                /> <br />

                                <label htmlFor="iurl">Image url</label> <br />
                                <input type="text" placeholder="image url" 
                                    onChange={onIurlChange} name="iurl"
                                    className="form-control" required
                                /> <br /> <br />
                                
                                <button onClick={ onSubmit } data-dismiss="modal"> 
                                    Submit 
                                </button>
                         
                           </form>
                       </div>
                   </div>
                   <div className="modal-footer">
                        <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
                   </div>
                </div>
            </div>
        </div>
   </div>);
}

const mapDispatchToProps={
    addItem:addItem
};

const mapStateToProps=state=>{
    return state;
};
  
export default connect(mapStateToProps,mapDispatchToProps)(AddItem);
