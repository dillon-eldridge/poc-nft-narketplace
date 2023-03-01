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
      <nav>
        <div>
          <a href="#">Marketplace</a>
          <a href="#">List NFTs</a>
          <a href="#">About</a>
          <button onclick={this.connect}>Connect Wallet</button>
          <span class="wallet__address">{this.walletAddress}</span>
        </div>
      </nav>
    )
  }
}

export default Nav
