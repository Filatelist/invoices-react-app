import React from 'react';
import './invoices.css';


const Invoices =({invoices})=>{

        return(
                <div className="list bg-light">
                    <p className="weight">Invoices</p>
                    <table className="table">
                        <thead className="color ">
                        <tr>
                            <th scope="col">Create</th>
                            <th scope="col">No</th>
                            <th scope="col">Supply</th>
                            <th scope="col" >Comment</th>
                        </tr>
                        </thead>
                        <tbody>
                        {
                            invoices.map(item =>(
                                <tr key={item.inv} className="color-text">
                                    <th >{item.created}</th>
                                    <td>{item.inv}</td>
                                    <td>{item.supply}</td>
                                    <td>{item.comment}</td>
                                </tr>
                            ))
                        }
                        </tbody>
                    </table>
                </div>
        );
}
export default Invoices;
// {
//     "created": "28-06-2019",
//     "id": 1,
//     "inv": "INV-",
//     "supply": "28-06-2019",
//     "comment": "Test invoice"
// }
