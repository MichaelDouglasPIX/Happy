module.exports = {
    index(require, response){
        const city = require.query.city
        return response.render('index')
    },
    orphanage(require, response){
        return response.render('orphanage')
    },
    orphanages(require, response){
        return response.render('orphanages')
    },
    createOrphanage(require, response){
        return response.render('create-orphanage')
    }
}