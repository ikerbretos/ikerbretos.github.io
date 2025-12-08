import { Layout } from './components/Layout'
import { Hero } from './components/Hero'
import { Education } from './components/Education'
import { Skills } from './components/Skills'
import { Projects } from './components/Projects'
import { Contact } from './components/Contact'

function App() {
    return (
        <Layout>
            <Hero />
            <Education />
            <Skills />
            <Projects />
            <Contact />
        </Layout>
    )
}

export default App
