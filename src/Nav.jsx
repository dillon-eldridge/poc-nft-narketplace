import Nullstack from 'nullstack'

import './Nav.css'

class Nav extends Nullstack {
    render() {
        return (
            <nav>
                <div>
                    <a href="#">Marketplace</a>
                    <a href="#">List NFTs</a>
                    <a href="#">About</a>
                    <button>Connect Wallet</button>
                </div>
            </nav> 
        )
    }
}

export default Nav