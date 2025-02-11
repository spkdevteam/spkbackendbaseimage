
const express = require('express')
const transRoutes = require('./transactions.routes')
const swaggerRouter = require('./swagger.routes')

const mainRouter = express.Router()
mainRouter
    .use('/api-docs', swaggerRouter)

    .get('/alluserByBranch', (req, res, next) => {

        try {
            const params = req.params
            function getAllusersByBranch({ clientId, branchId }) {
                return {
                    status: true, message: 'result fetched Succefull ', data: [{
                        userName: 'sandeep',
                        secondName: 'pachat',
                        phone: '79048322123'
                    },
                    {
                        userName: 'sandeep',
                        secondName: 'pachat',
                        phone: '79048322123'
                    },
                    {
                        userName: 'sandeep',
                        secondName: 'pachat',
                        phone: '79048322123'
                    }]
                }
            }
            const result = getAllusersByBranch({ clientId: '10001', branchId: '1001' })
            res.json(result)

        } catch (error) {
            next(error)
        }
    })
    .use('/', (req, res) => {
        res.json({ message: 'Request received From ' + req.hostname + req.originalUrl })
    })

module.exports = mainRouter


