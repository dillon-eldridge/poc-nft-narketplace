import Nullstack from 'nullstack'

import './Marketplace.scss'

class Marketplace extends Nullstack {
  nfts = []

  static async getNFTs({ database }) {
    return await database.collection('nfts').find().toArray()
  }

  async initiate() {
    this.nfts = await this.getNFTs()
  }

  render() {
    return (
      <div class="grid">
        {this.nfts.map((nft) => (
          <div class="nft__tile">
            {/* <div
              style={{
                backgroundImage: `url(${nft.properties.image.description})`,
              }}
            ></div> */}
            <img src={nft.properties.image.description} />
            <h4>{nft.title}</h4>
            <button>Buy</button>
          </div>
        ))}
      </div>
    )
  }
}

export default Marketplace
