import Nullstack from 'nullstack'

import Application from './src/Application'

const { MongoClient } = require('mongodb')

const context = Nullstack.start(Application)

context.start = async function start() {
  const { secrets } = context
  try {
    console.log('[INFO] Connecting to database...')
    const databaseClient = new MongoClient(secrets.mongodbUri)
    await databaseClient.connect()
    context.database = await databaseClient.db(secrets.databaseName)
    console.log(`[INFO] Connected to database ${secrets.databaseName}`)
  } catch (error) {
    console.error(error)
  }
}

export default context
