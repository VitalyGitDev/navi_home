import * as fastify from "fastify";


export default class HttpServer {

    private readonly instance: fastify.FastifyInstance = null

    constructor(options: fastify.ServerOptions = { logger: true }) {
        if (!this.instance) {
            this.instance = fastify(options)
        }
    }

    public async run(port: number, host: string): Promise<void> {
        await this.instance.listen(port, host)
        console.log(`HTTP running at http://${host}:${port}`)
    }
}