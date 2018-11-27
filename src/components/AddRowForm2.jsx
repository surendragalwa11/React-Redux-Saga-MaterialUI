import React,{Component} from 'react'

class AddRowForm2 extends Component
{
    constructor(props)
    {
        super(props);
        this.state={
            lname:'',
            fname:'',
            iurl:''
        };
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
        return(<div>

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
                                <input type="text"  placeholder="first name"  autoFocus
                                    onChange={this.onFnameChange}
                                    className="form-control"  required 
                                /> <br />
                    
                                <label htmlFor="lname">Last name</label> <br />
                                <input type="text" placeholder="last name" name="lname" 
                                    onChange={this.onLnameChange} 
                                    className="form-control" required
                                /> <br />

                                <label htmlFor="iurl">Image url</label> <br />
                                <input type="text" placeholder="image url" 
                                    onChange={this.onIurlChange} name="iurl"
                                    className="form-control" required
                                /> <br /> <br />
                                
                                <button onClick={ this.props.onSubmit } data-dismiss="modal"> 
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
}


export default AddRowForm2;
