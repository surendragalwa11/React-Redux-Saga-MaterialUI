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
        this.setState({fname:Fname});    
    };
    onLNChange=(e)=>{
        const Lname=e.target.value;
        this.setState({lname:Lname});   
    };
    
    onIUChange=(e)=>{
        const Iurl=e.target.value;
        this.setState({iurl:Iurl});    
    };

    render()
    {
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
