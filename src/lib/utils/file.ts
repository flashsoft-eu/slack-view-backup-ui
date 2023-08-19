import { resolve } from 'path'
import fs from 'fs/promises'

export const getJsonFromDataFile = async (path: string) => {
    const dataDir = resolve('./src/data')
    const dataPath = `${dataDir}/${path}`
    const dataText = await fs.readFile(dataPath, 'utf-8')
    const data = JSON.parse(dataText)
    return data
}