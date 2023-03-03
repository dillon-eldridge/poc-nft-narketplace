import Nullstack from 'nullstack'

import './Nav.scss'

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
      <nav class="flex items-center justify-around bg-green-900">
        <a href="/">
          <img href="/" src="/logo.svg" class="logo" />
        </a>
        <div>
          <a href="/marketplace">Marketplace</a>
          <a href="/">Create</a>
          <button class="bg-white text-green-900 rounded-full py-2 px-4" onclick={this.connect}>
            Connect Wallet
          </button>
          {this.walletAddress && <span class="text-white ml-4">{this.walletAddress}</span>}
        </div>
      </nav>
    )
  }
}

export default Nav
