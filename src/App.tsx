import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { Education } from './components/Education'
import { Experience } from './components/Experience'

import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
    return (
        <Layout>
            <Hero />
            <Experience />
            <Education />
            <Projects />
            <Contact />
        </Layout>
    )
}

export default App
