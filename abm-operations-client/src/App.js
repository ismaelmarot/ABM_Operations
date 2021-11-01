import React, {Fragment, useState, useEffect} from 'react';
import Navbar from './Components/Navbar';
import OperationsList from './Components/OperationsList';
import Form from './Components/Form';


function App() {

  const [operation, setOperation] = useState({
    concept: '',
    amount:'',
    date:'',
    type:''
  })

  const [operations,setOperations] = useState([])

  const [operationsUpdated,setOperationsUpdated] = useState(false)

  useEffect(()=>{
    const getOperations =()=>{
      fetch('http://localhost:9000/api')
      .then(res => res.json())
      .then(res => setOperations(res))
    }
    getOperations()
    setOperationsUpdated(false)
  },[operationsUpdated]);

  return (
    <Fragment>
      <Navbar brand='ABM APP'/>
      <div className="container">
        <div className="row">
          <div className="col-xl-9 col-sm-12 mt-2">
            <h2 style={{textAlign:'center'}}>Operations List</h2>
            <OperationsList operation={operation} operations={operations} setOperationsUpdated={setOperationsUpdated}/>
          </div>
          <div className="col-xl-3 col-sm-12 border border-primary rounded mt-2 bg-light">
            <h2 style={{textAlign:'center'}}>Operation Form</h2>
          <Form operation={operation} setOperation={setOperation}/>
          </div>
        </div>
      </div>    
    </Fragment>
  )
}

export default App;
