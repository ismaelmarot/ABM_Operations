const EXPRESS = require('express')
const APP = EXPRESS()
const MYSQL = require('mysql')
const MYCONN = require('express-myconnection') 
const ROUTES = require('./routes')
const CORS = require('cors')

APP.set('port',process.env.PORT || 9000)
const PORT = APP.get('port')
const DBOPTIONS = {
    host: 'localhost',
    port: '3306',
    user: 'root',
    password: '',
    database: 'api',
}

//Middleweres
APP.use(MYCONN(MYSQL,DBOPTIONS,'single'))
APP.use(EXPRESS.json())
APP.use(CORS())

//Routes
APP.get('/',(request,response)=>{
    response.send('Welcome to my API')
})

APP.use('/api',ROUTES)

//Server 
APP.listen(PORT,()=>{
    console.log(`Server running on port ${PORT}`)
})    