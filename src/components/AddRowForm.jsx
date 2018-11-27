import React,{Component} from 'react';
import Button from '@material-ui/core/Button';
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import {FormWithConstraints,FieldFeedback,FieldFeedbacks} from 'react-form-with-constraints';


class AddRowForm extends Component
{
    constructor(props)
    {
        super(props);
        console.log("Constructor of AddRowForm called");
        console.log(props);
        
        this.state={
            lname:'',
            fname:'',
            iurl:'',
            open:false
        };
    }
    
    onSubmit=(e)=>{
        this.setState({ open: false });
        e.preventDefault();
        console.log(!this.state.lname.trim()|| !this.state.fname.trim());
        if(!this.state.lname.trim()|| !this.state.fname.trim()|| !this.state.iurl.trim())
        {
        }
        else
        {
            this.props.onSubmit({
                "data":[{ 
                    "id":Math.random(), 
                    "first_name":this.state.fname,
                    "last_name":this.state.lname,
                    "avatar":this.state.iurl
                  }]
            });
        }
        
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
                    Add Row
                </Button>
                <Dialog
                    open={this.state.open}
                    onClose={this.handleClose}
                    aria-labelledby="form-dialog-title"
                    
                >
                    <DialogTitle id="form-dialog-title">Add Row (Material UI Dialog)</DialogTitle>
                    
                    <DialogContent>
                        
                        <DialogContentText>
                            Please provide following details
                        </DialogContentText>
                        
                        <TextField onChange={this.onFNChange}
                            autoFocus
                            margin="dense"
                            id="fname"
                            label="First Name"
                            type="text"
                            fullWidth
                        />
                        <TextField onChange={this.onLNChange}
                            autoFocus 
                            margin="dense"
                            id="lname"
                            label="Last Name"
                            type="text"
                            fullWidth
                        />
     
                        <TextField onChange={this.onIUChange}
                            autoFocus
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