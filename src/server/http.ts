import HttpServer from "../common/classes/server/httpServer";

export async function startHttp() {
    const httpContext = new HttpServer()
    await httpContext.run(parseInt(process.env.APP_PORT!, 10), process.env.APP_DOMAIN!)
}