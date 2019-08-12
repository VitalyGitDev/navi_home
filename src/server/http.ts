const fastify = require('fastify')({ logger:true })
    // { FastifyReply, Middleware, Plugin, RegisterOptions }
// import http from 'http'

export async function startHttp() {
    fastify.listen(process.env.APP_PORT, (err: any, address: any) => {
        if (err) throw err
        fastify.log.info(`server listening on ${address}`)
    })
}