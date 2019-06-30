
const invoicesLoaded = (newInvoice) =>{
    return{
        type:'INVOICES_LOADED',
        payload: newInvoice
    }
};
export{
    invoicesLoaded
}
