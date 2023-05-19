import { Router } from 'express';
import { readdirSync} from 'fs'

const PATH_ROUTER = `${__dirname}`
const router = Router()

const clearFileName = (fileName:string)=>{
    const file = fileName.split('.').shift()
    return file
}

readdirSync(PATH_ROUTER).filter((fileName) =>{
    const clearName = clearFileName(fileName)
    if(clearName !== 'index')
    {
        import(`./${clearName}`).then((moduleRouter)=>{
            console.log(`se esta cargando la ruta.../${clearName}`)
            router.use(`/${clearName}`, moduleRouter.router)
        })
    }
})

export { router}