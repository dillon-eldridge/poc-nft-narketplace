// set up nullstack File

import Nullstack from 'nullstack'

import './Listing.scss'

class Listing extends Nullstack {
  render({ title, image, price }) {
    return (
      <div class="listing">
        <img src={image} />
        <div class="flex align-start flex-col space-y-6 p-7">
          <p class="text-xl font-black">{title}</p>
          <button class="bg-green-900 text-white text-bold rounded-full py-3 px-4 w-full">{price} ETH</button>
        </div>
      </div>
    )
  }
}

export default Listing
