import React from 'react';
import {ServiceConsumer} from "../service-context";


const withService = () =>(Wrapped) =>{
    return (props)=>{
        return(
            <ServiceConsumer>
                {
                    (invoiceService)=>{
                        return(
                            <Wrapped
                                {...props}
                                invoiceService={invoiceService} />
                        );
                    }
                }
            </ServiceConsumer>);
    }
}
export default withService;
