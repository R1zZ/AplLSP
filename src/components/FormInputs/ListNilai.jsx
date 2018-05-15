import React, {Component} from 'react';
import {button} from 'react-bootstrap';

const nilai = [];

localStorage.setItem('nilai', JSON.stringify(nilai));
class ListNilai extends Component{
    constructor(props){
        super(props);

        this.state={
            isEdit:false
        };
        this.state = {
            nilai: JSON.parse(localStorage.getItem('nilai'))
        };

        this.onDelete=this.onDelete.bind(this);
        this.onEdit=this.onEdit.bind(this);
        this.onEditSubmit=this.onEditSubmit.bind(this);
    }

    onDelete(){
        const {onDelete, firstName}=this.props;
        onDelete(firstName);
    }

    onEdit(){
        this.setState({isEdit:true});
    }

    onEditSubmit(event){
        event.preventDefault();
        this.props.onEditSubmit(
            this.firstName.value,
            this.lastName.value,
            this.props.firstName
        );
        this.setState({isEdit:false});
    }

    render(){
        const{firstName, lastName}= this.props;
        return(
            <div>
                {
                    this.state.isEdit?(
                        <form onSubmit={this.onEditSubmit}>
                            <input 
                                placeholder="firstName" 
                                ref={firstName =>this.firstName=firstName} defaultValue={firstName}
                            />
                            <input 
                                placeholder="lastName" 
                                ref={lastName => this.lastName=lastName} defaultValue={lastName}
                            />
                            <button>Save</button>
                        </form>
                    ):(
                        <div>
                            <span>{firstName}</span> 
                            {' | '}
                            <span>{lastName}</span> 
                            {' | '}
                            <button onClick={this.onDelete}>Delete</button>
                            {' | '}
                            <button onClick={this.onEdit}>Edit</button>
                        </div>
                    )
                }
                
            </div>
        )
    }
}

export default ListNilai;