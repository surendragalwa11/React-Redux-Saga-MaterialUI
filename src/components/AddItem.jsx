import React from 'react';
import {connect} from 'react-redux';
import { addItem } from '../actions/addEdit';



const AddItem =(props)=>{
        console.log(props);
        console.log("We've called AddItem component");

        const onFnameChange=(e)=>{
            console.log(props);
            console.log("onFnameChange called");
            props.fname=e.target.value;
        };
        const onLnameChange=(e)=>{
            console.log("onLnameChange called");
            console.log(e.target.value);
            props.fname=e.target.value; 
        }
        const onIurlChange=(e)=>{
            console.log("onIurlChange called");
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
    console.log(state);
    console.log("AddItem:--mapping state to props in connect");
    return state;
};
  
export default connect(mapStateToProps,mapDispatchToProps)(AddItem);

// class AddItem extends Component
// {

    
//     // onSubmit=(e)=>{
//     //     e.preventDefault();
        
//     //     this.props.addItem(item);
//     // }

//     onFnameChange=(e)=>{
//         this.props.fname=e.target.value;
//     };

//     render()
//     {
//         console.log(this.props);
//         console.log("We've called AddItem component");
//         return(
//         <div>
//             <div  onClick={this.props.onEditClick}>
//                 <button type="button" className="btn btn-info btn-lg" 
//                     data-toggle="modal" data-target="#myModal"
//                 >
//                     Add Item
//                </button>
//             </div>

             
//             <div className="modal fade" id="myModal" role="dialog">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <button type="button" className="close" data-dismiss="modal">&times;</button>
//                             <h4 className="modal-title">Modal Header</h4>
//                         </div>
//                    <div className="modal-body">
//                         <div className="container">
//                             <h2>Add new entry</h2>
//                             <form  className="form-inline">
                       
//                                 <label htmlFor="fname">First name</label><br />
//                                 <input type="text"  placeholder="first name"  
//                                     defaultValue={this.props.fnameDefault}
//                                     onChange={this.onFnameChange}
//                                     className="form-control"  required 
//                                 /> <br />
                    
//                                 <label htmlFor="lname">Last name</label> <br />
//                                 <input type="text" placeholder="last name" name="lname" 
//                                     defaultValue={this.props.lnameDefault}
//                                     onChange={this.props.onLnameChange} 
//                                     className="form-control" required
//                                 /> <br />

//                                 <label htmlFor="iurl">Image url</label> <br />
//                                 <input type="text" placeholder="image url" 
//                                     defaultValue={this.props.iurlDefault}
//                                     onChange={this.props.onIurlChange} name="iurl"
//                                     className="form-control" required
//                                 /> <br /> <br />
                                
//                                 <button onClick={ this.onSubmit } data-dismiss="modal"> 
//                                     Submit 
//                                 </button>
                         
//                            </form>
//                        </div>
//                    </div>
//                    <div className="modal-footer">
//                         <button type="button" className="btn btn-default" data-dismiss="modal">Close</button>
//                    </div>
//                 </div>
//             </div>
//         </div>
//    </div>);
//     }
// }

console.log("AddItem component call finished");
//export default AddItem;

// const mapDispatchToProps = (dispatch) => {
//     console.log("AddItem: mapping dispatch to props");
//     //return  (item) => dispatch(addItem(item));
//     return (item)=>dispatch(fetchItem());
//   };

// const mapDispatchToProps={
//     addItem:addItem
// };

// const mapStateToProps=state=>{
//     console.log(state);
//     console.log("AddItem:--mapping state to props in connect");
//     return state;
// };
  
// export default connect(mapStateToProps,mapDispatchToProps)(AddItem);
























// import React,{Component} from 'react';
// import {connect} from 'react-redux';
// import PopUp from '../components/PopUp';
// import { addItem } from '../actions/addEdit';

// class AddItem extends Component
// {
//     onSubmit= (item) =>{
//         console.log("onSubmit of addItem component called");
//         console.log(item);
//         this.props.addItem(item);
//     };

//     render()
//     {
//         console.log("AddItem component called");
//         return(<PopUp btnName={"Add Item"} onSubmit={this.onSubmit}
//         />);
//     }
// }

// // export default connect(undefined,(dispatch)=>{
// //     console.log("mapping dispatch to props in AddItem component");
// //     return (item)=>dispatch(addItem(item));
// //     // return dispatch();
// // })(AddItem);

// // const mapDispatchToProps = (dispatch) => {
// //     console.log("AddItem : mapping dispacth to pops");
// //     return (item) => dispatch(addItem(item));
// //   };

// const mapDispatchToProps = (dispatch) => ({
//     addItem: (item) => dispatch(addItem(item))
//   });
  
// export default connect(undefined, mapDispatchToProps)(AddItem);