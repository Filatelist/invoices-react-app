import React, {Fragment, Component} from 'react';
import Header from '../header';
import Invoices from '../invoices';
import {invoicesLoaded} from '../../actions';
import {connect} from "react-redux";
import withService from '../hoc';
import './first-page.css'
import InvoiceService from '../../services/service';
import Action from '../action-component';

const invoicesService = new InvoiceService();
class FirstPage extends Component{

    componentDidMount() {

        invoicesService.getAllInvoices().then(body=>{
            this.props.invoicesLoaded(body)
        });
    }

    render() {
        return(
            <div className="container ">
                <Header title={'Invoices'} />
                <Action />
                <Invoices invoices={this.props.invoices} />
            </div>
        );
    }
};

const mapStateToProps = ({invoices}) =>{
    return{invoices}
};
const mapDispatchToProps ={
    invoicesLoaded
};
export default connect(mapStateToProps,mapDispatchToProps)(withService()(FirstPage));
