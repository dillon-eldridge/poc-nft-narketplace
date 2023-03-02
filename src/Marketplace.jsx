import Nullstack from 'nullstack'

import './Marketplace.scss'

class Marketplace extends Nullstack {
  prepare({ page }) {
    page.title = 'Marketplace'
    page.description = 'Find the latest and greatest NFTs from top artists.'
  }

  nfts = []

  static async getNFTs({ database }) {
    return await database.collection('nfts').find().toArray()
  }

  async initiate({ params }) {
    this.nfts = await this.getNFTs()
  }

  render() {
    return (
      <div class="grid grid-cols-3 gap-x-6">
        {this.nfts.map((nft) => (
          <div class="nft__tile">
            {/* <div
              style={{
                backgroundImage: `url(${nft.properties.image.description})`,
              }}
            ></div> */}
            <img src={nft.properties.image.description} />
            <div class="flex align-start flex-col space-y-4 p-6">
              <p class="text-xl font-black">{nft.title}</p>
              <button class="bg-green-900 text-white rounded-full py-2 px-4 w-full">
                Buy @ <span>{nft.price} ETH</span>
              </button>
            </div>
          </div>
        ))}
      </div>
    )
  }
}

export default Marketplace
