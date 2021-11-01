import React from 'react';

const Form =({operation,setOperation})=>{

    const handleChange = e =>{
        setOperation({
            ...operation,
            [e.target.name]: e.target.value
        })
    }
    //Amount date tipe
    let{concept,amount,date,type} = operation

    const handleSubmit =()=>{
        //Validation data
        if(concept ==='' || amount ===''){
            alert('Todos los campos son obligatorios')
            return
        }
        //Consult
        const requestInit = {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify(operation)
        }

        fetch('http://localhost:9000/api',requestInit)
        .then(res => res.json())
        .then(res => console.log('Operation inserted'))

        //Restart operation settings
        setOperation({
            concept:'',
            amount:'',
            date:'',
            type:''
        })
    }

    return(
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label htmlFor="concept" className="form-label">Concept</label>
                <input value={concept} name="concept" onChange={handleChange} text="" id="concept" className="form-control"/>
            </div>
            <div className='mb-1'>
                <label htmlFor="amount" className="form-label">Amount</label>
                <input value={amount} name="amount" onChange={handleChange} type="number" step="0.01" min="0" id="amount" className="form-control"/>
            </div>
            <div className='mb-3'>
                <label htmlFor="date" className="form-label">Date</label>
                <input value={date} name="date" onChange={handleChange} type="date" id="date" className="form-control"/>
            </div>
            <div className='mb-1'>
                <label htmlFor="type" className="form-label">Operation type</label>
                <select value={type} name="type" onChange={handleChange} id="type" className="form-control">
                    <option>egress</option>
                    <option>income</option>
                </select>    
            </div>
            <button type="submit" className="btn btn-primary mb-2">Submit</button>
        </form>
    )
}

export default Form;