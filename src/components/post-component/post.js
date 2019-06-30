import React, {Component} from 'react';
import './post.css';
import withService from "../hoc";

class Post extends Component{

    state={
        create:"",
        inv:"",
        supply:"",
        comment:""
    };

    onSave = (event) =>{
        event.preventDefault();
        let formData = {
            id:Math.random()*90,
            created:this.state.create,
            inv:this.state.inv,
            supply:this.state.supply,
            comment:this.state.comment
        };

        const {invoiceService} = this.props;
        invoiceService.postInovice(formData);
        window.location.replace('/')

    };

    render(){
        return(

            <form className="container bg-light bg-white" onSubmit={this.onSave}>
                <div className="block">
                    <div className="row">
                    <span className="input-group col-6">
                        <p>Number:</p>
                        <input type="text" name="number" onChange={(event)=>{this.setState({inv:event.target.value})}} value={this.state.no} placeholder={'INV-2'} className="mar bor"/>
                    </span>
                        <span className="col-6 input-group">
                        <p>Invoice Data:</p>
                        <input type="date" onChange={(event)=>{this.setState({create:event.target.value})}} value={this.state.create} name="first_date" placeholder={'Select date'} className="mar bor"/>
                    </span>
                        <span className="col-6 input-group">
                        <p>Supply Date:</p>
                        <input type="date" onChange={(event)=>{this.setState({supply:event.target.value})}} value={this.state.supply} name="second_date" className="mar bor"/>
                    </span>
                    </div>
                    <p>Comment:</p>
                    <textarea type="textarea" onChange={(event)=>{this.setState({comment:event.target.value})}} value={this.state.comment} className="container-fluid bor form-group"  />
                </div>
                <div className="container-fluid d-flex flex-row-reverse">
                    <button
                        className="btn btn-primary save left-right"
                        type="submit"
                    >Save</button>
                </div>
            </form>
        );
    }
}
export default withService()(Post);
