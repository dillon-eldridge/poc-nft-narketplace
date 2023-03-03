import Nullstack from 'nullstack'

import './Application.scss'
import Home from './Home'
import Marketplace from './Marketplace'
import Nav from './Nav'
import '../tailwind.css'

class Application extends Nullstack {
  prepare({ page }) {
    page.locale = 'en-US'
  }

  renderHead() {
    return (
      <head>
        <link href="https://fonts.gstatic.com" rel="preconnect" />
        <link href="https://fonts.googleapis.com/css2?family=Crete+Round&family=Roboto&display=swap" rel="stylesheet" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/web3/1.7.4-rc.1/web3.min.js"></script>
      </head>
    )
  }

  render() {
    return (
      <body>
        <Head />
        <Nav />
        <Home route="/" greeting="NFT Skunkworks" />
        <Marketplace route="/marketplace" />
      </body>
    )
  }
}

export default Application
