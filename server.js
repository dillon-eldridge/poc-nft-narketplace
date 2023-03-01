import Nullstack from 'nullstack'

import Application from './src/Application'
const { MongoClient } = require('mongodb');

const context = Nullstack.start(Application)

context.start = async function start() {
  try {
    const databaseClient = new MongoClient('mongodb://localhost:27017')
    await databaseClient.connect();
    context.database = await databaseClient.db('nft-marketplace')
  } catch (error) {
    console.error(error)
  }
}

export default context
