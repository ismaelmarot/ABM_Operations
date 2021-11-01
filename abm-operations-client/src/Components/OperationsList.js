import React from 'react';

const OperationsList =({operation,operations,setOperationsUpdated})=>{

    const handleDelete = id =>{
        const requestInit = {
            method: 'DELETE'
        }
        fetch('http://localhost:9000/api/' + id,requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        setOperationsUpdated(true)
    }

    let{concept,amount,date} = operation
    const handleUpdate = id =>{
        //Validation
        if(concept==='' || amount===''|| date===''){
            alert('All fields are required')
            return
        }    
        const requestInit = {
            method: 'PUT',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(operation)
        }
        fetch('http://localhost:9000/api/' + id,requestInit)
        .then(res => res.text())
        .then(res => console.log(res))
        setOperationsUpdated(true)
    }

    return(
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Concept</th>
                    <th>Amount</th>
                    <th>Date</th>
                    <th>Type</th>
                </tr>
            </thead>
            <tbody>
                {operations.map(op => (                    
                    <tr key={op.id}>
                        <td>{op.id}</td>
                        <td>{op.concept}</td>
                        <td>{op.amount}</td>
                        <td>{op.date}</td>
                        <td>{op.type}</td>
                        <td>
                            <div className="d-grid gap-2 d-md-block">
                                
                                    <button onClick={()=>handleDelete(op.id)} className="btn btn-m btn-danger mx-1">Delete</button>
                                
                                
                                    <button onClick={()=>handleUpdate(op.id)} className="btn btn-secondary mx-1">Update</button>
                                
                            </div>
                        </td>
                    </tr>    
                ))}
            </tbody>
    </table>
    );
}

export default OperationsList;