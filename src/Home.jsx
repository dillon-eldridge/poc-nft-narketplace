import Nullstack from 'nullstack'

import './Home.css'

class Home extends Nullstack {
  prepare({ project, page, greeting }) {
    page.title = `${project.name} - ${greeting}`
    page.description = `${project.name} was made with Nullstack`
  }

  render() {
    return (
      <section class="py-16">
        <h1 class="text-7xl">Welcome</h1>
      </section>
    )
  }
}

export default Home
