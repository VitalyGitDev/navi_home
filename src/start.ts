// import dotenv from 'dotenv'
import dotenvSafe from 'dotenv-safe'
import path from 'path'

dotenvSafe.config({
    path: path.resolve(process.cwd(), '.env')
})

const appStart = async () => {
    const { startHttp } = require('./server/http')
    startHttp()
}

appStart()
    .then(() => (console.log('Service UP and Running . . .')))
    .catch((err) => {
        if (err) {
            console.log('An ERROR occurs during application start: ', err.message)
        }
        setTimeout(() => process.exit(1), 1000)
    })