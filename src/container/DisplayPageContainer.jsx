import React,{Component} from 'react';
import {connect} from 'react-redux';
import DisplayComponent from '../components/DisplayComponent';
import { fetchItem} from '../actions/addEdit';
import ItemSelector from '../selectors/ItemSelector';


class DisplayPageContainer extends Component
{
        componentDidMount()
        {
            this.props.dispatch(fetchItem())  
        }
        
        render()
        {
        return(<div >

                { this.props.isLoading ?
                     <img src="https://media.giphy.com/media/jAYUbVXgESSti/giphy.gif"  alt="pic"/>:
                    <div>
                        <DisplayComponent items={this.props.items} />
                        
                    </div>    
                }
        </div>);
        }
}

const mapStateToProps=(state)=>{
        return {
                items:ItemSelector(state.items),
                isLoading:state.isLoading,
                error:state.error
        };

}

export default connect(mapStateToProps)(DisplayPageContainer);
