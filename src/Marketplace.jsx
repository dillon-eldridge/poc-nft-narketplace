import Nullstack from 'nullstack'

import './Marketplace.scss'

import Listing from './Listing'

class Marketplace extends Nullstack {
  prepare({ page }) {
    page.title = 'Marketplace'
    page.description = 'Find the latest and greatest NFTs from top artists.'
  }

  nfts = []

  static async getNFTs({ database }) {
    return database.collection('nfts').find().toArray()
  }

  async initiate() {
    this.nfts = await this.getNFTs()
  }

  render() {
    return (
      <section class="py-16">
        <div class="grid grid-cols-3 gap-x-8">
          {this.nfts.map((nft) => (
            <Listing title={nft.title} image={nft.properties.image.description} price={nft.price} />
          ))}
        </div>
      </section>
    )
  }
}

export default Marketplace
