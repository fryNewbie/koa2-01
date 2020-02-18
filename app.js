const Koa = require('koa')
const middleware =require('./middleware')
const router =require('./routes')

const app = new Koa()
middleware(app)
router(app)

app.listen(3000)