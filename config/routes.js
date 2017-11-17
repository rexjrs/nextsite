const routes = module.exports = require('next-routes')()

routes
.add('/:lang/', 'index')
.add('/:lang/:page', 'index')