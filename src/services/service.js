
const base = `http://localhost:3000/invoices`;

export default class InvoicesService {


    getAllInvoices = async () =>{
        const res = await fetch(base);
        const body = await res.json();
        return body
    }

    postData = (url = '', data = {})=> {
        return fetch(url, {
            method: 'POST',
            mode: 'cors',
            cache: 'no-cache',
            credentials: 'same-origin',
            headers: {
                'Content-Type': 'application/json'
            },
            redirect: 'follow',
            referrer: 'no-referrer',
            body: JSON.stringify(data),
        })
            .then(response => response.json());
    }

    postInovice = async (formData)=>{
        this.postData(base, formData)
            .then(data => console.log(JSON.stringify(data)))
            .catch(error => console.error(error));
    }

}
