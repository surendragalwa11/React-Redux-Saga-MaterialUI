import React,{Component} from 'react';

class EditRowForm2 extends Component
{
    render()
    {
        return(
            <div>
            <button type="button" className="btn btn-info btn-lg" 
                data-toggle="modal" data-target="#myModal"
            >
                Edit
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
                            <h2>Edit entry</h2>
                            <form  className="form-inline">
                       
                                First name <br />
                                <input type="text" value={this.state.fname}
                                    onChange={this.onFnameChange}
                                     
                                /> <br />
                    
                                Last name <br />
                                <input type="text" value={this.state.lname}
                                    onChange={this.onLnameChange} 
                                    
                                /> <br />

                                Image url<br />
                                <input type="text" value={this.state.iurl}
                                    onChange={this.onIurlChange} 
                                    
                                /> <br /> <br />
                                
                                <button onClick={ this.onSubmit } data-dismiss="modal"> 
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
   </div>
        )
    }
}

export default EditRowForm2;