import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
//import {FormWithConstraints,FieldFeedback,FieldFeedbacks} from 'react-form-with-constraints';


class AddRowForm extends Component
{
    constructor(props)
    {
        super(props);
        console.log("Constructor of AddRowForm called");
        console.log(props);
        
        this.state={
            open:false
        };
    }
    
    onSubmit=(e)=>{
        this.setState({ open: false });
    
        this.props.onSubmit();
    }
    

    handleClickOpen = () => {
        this.setState({ open: true });
      };
    
      handleClose = () => {
        this.setState({ open: false });
      };
    
    
    onFNChange=(e)=>{
        const Fname=e.target.value;
        console.log("onFnameChange in AddRowForm, called");
        console.log(Fname);
        this.setState({fname:Fname});    
    };
    onLNChange=(e)=>{
        const Lname=e.target.value;
        console.log("onLnameChange in AddRowForm, called");
        console.log(Lname);
        this.setState({lname:Lname});   
    };
    
    onIUChange=(e)=>{
        const Iurl=e.target.value;
        console.log("onIurlChange in AddRowForm, called");
        console.log(Iurl);
        this.setState({iurl:Iurl});    
    };

    render()
    {
        console.log(this.props);
        console.log("We've called Add RowForm component");
        return(
            <div >
                <Button variant="extendedFab" color="primary"
                    onClick={this.handleClickOpen} size='large'
                >
                    Edit Row
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    
                >
                    <DialogTitle id="form-dialog-title">Edit Row </DialogTitle>
                    
                    <DialogContent>
                        
                        <DialogContentText>
                            Please provide following details
                        </DialogContentText>
                        
                        <TextField onChange={this.props.onFnameChange}
                            autoFocus defaultValue={this.props.fname}
                            margin="dense"
                            id="fname"
                            label="First Name"
                            type="text"
                            fullWidth
                        />
                        <TextField onChange={this.props.onLnameChange}
                            autoFocus defaultValue={this.props.lname}
                            margin="dense"
                            id="lname"
                            label="Last Name"
                            type="text"
                            fullWidth
                        />
     
                        <TextField onChange={this.props.onIurlChange}
                            autoFocus defaultValue={this.props.iurl}
                            margin="dense"
                            id="pic"
                            label="Image URL:"
                            type="email"
                            fullWidth
                        />
                    </DialogContent>

                    <DialogActions>
                        <Button onClick={this.handleClose} color="primary">
                            Cancel
                        </Button>
                        <Button onClick={this.onSubmit} color="primary">
                            Submit
                        </Button>
                    </DialogActions>

                </Dialog>
            </div>
        );
    }
}


export default AddRowForm;



// import React,{Component} from 'react';

// class EditRowForm2 extends Component
// {
//     render()
//     {
//         return(<div>
//             <div onClick={this.props.onEditClick}>
//                 <button type="button" className="btn btn-info btn-lg" 
//                     data-toggle="modal" data-target="#myModal"
//                 >
//                     Edit
//                 </button>
//            </div>

             
//             <div className="modal fade" id="myModal" role="dialog">
//                 <div className="modal-dialog">
//                     <div className="modal-content">
//                         <div className="modal-header">
//                             <button type="button" className="close" data-dismiss="modal">&times;</button>
//                             <h4 className="modal-title">Modal Header</h4>
//                         </div>
//                    <div className="modal-body">
//                         <div className="container">
//                             <h2>Edit entry</h2>
//                             <form  className="form-inline">
                       
//                                 First name <br />
//                                 <input type="text" defaultValue={this.props.fname}
//                                     onChange={this.props.onFnameChange}
                                     
//                                 /> <br />
                    
//                                 Last name <br />
//                                 <input type="text" defaultValue={this.props.lname}
//                                     onChange={this.props.onLnameChange} 
                                    
//                                 /> <br />

//                                 Image url<br />
//                                 <input type="text" defaultValue={this.props.iurl}
//                                     onChange={this.props.onIurlChange} 
                                    
//                                 /> <br /> <br />
                                
//                                 <button onClick={ this.props.onSubmit } data-dismiss="modal"> 
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
//    </div>
//         )
//     }
// }

// export default EditRowForm2;