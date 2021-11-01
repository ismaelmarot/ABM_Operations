const EXPRESS = require('express')
const connection = require('express-myconnection')
const ROUTES = EXPRESS.Router()

//Routes
ROUTES.get('/',(request,response)=>{
    request.getConnection((error,connection)=>{
        if(error) return response.send(error)
        connection.query('SELECT * FROM amb_operations',(error,result)=>{
            if(error) return response.send(error)
            response.json(result)
        })
    })
})

ROUTES.post('/',(request,response)=>{
    request.getConnection((error,connection)=>{
        if(error) return response.send(error)
        connection.query('INSERT INTO  amb_operations set ?',[request.body],(error,result)=>{
            if(error) return response.send(error)
            response.send('Operation inserted')
        })    
    })
})

ROUTES.put('/:id',(request,response)=>{
    request.getConnection((error,connection)=>{
        if(error) return response.send(error)
        connection.query('UPDATE amb_operations set ? WHERE id = ?', [request.body , request.params.id],(error,result)=>{
            if(error) return response.send(error)
            response.send('Operation updated')
        })
    })
}) 

ROUTES.delete('/:id',(request,response)=>{
    request.getConnection((error,connection)=>{
        if(error) return response.send(error)
        connection.query('DELETE FROM amb_operations WHERE id = ?',[request.params.id],(error,result)=>{
            if(error) return response.send(error)
            response.send('Operation deleted')
        })
    })
})

module.exports = ROUTES
