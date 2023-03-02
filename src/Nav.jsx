import Nullstack from 'nullstack'

import './Nav.css'

class Nav extends Nullstack {
  async connect() {
    if (window.ethereum) {
      await window.ethereum.request({ method: 'eth_requestAccounts' })
      window.web3 = new Web3(window.ethereum)
      console.log(window.web3)
      this.walletAddress = await window.web3.eth.getAccounts()
    } else {
      alert('No wallet found')
    }
  }

  render() {
    return (
      <nav class="bg-green-900">
        <div>
          <a class="" href="/marketplace">
            Marketplace
          </a>
          <a href="#">List NFTs</a>
          <a href="#">About</a>
          <button class="bg-white text-green-900 rounded-full py-2 px-4" onclick={this.connect}>
            Connect Wallet
          </button>
          <span class="text-white">{this.walletAddress}</span>
        </div>
      </nav>
    )
  }
}

export default Nav
