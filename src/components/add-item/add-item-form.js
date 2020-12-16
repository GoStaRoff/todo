import React from 'react';
import './add-item-form.css';

export default class AddItemForm extends React.Component{

    state = {
        label: ''
    }

    onLabelChange = (e) =>{
      this.setState({
        label: e.target.value
      })
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.onAdded(this.state.label);
        this.setState({
            label: ''
        });
    };


    render() {
        return(
            <form className="item-add-form d-flex"
                    onSubmit={this.onSubmit}>
                <input type="text" 
                       className="form-control"
                       onChange={this.onLabelChange}
                       placeholder="Что ещё нужно сделать?"
                       value={this.state.label}></input>
                <button onClick={this.onSubmit} type='button' className="btn btn-outline-secondary">Add item</button>
            </form>
        )
    }
}