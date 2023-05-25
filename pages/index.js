import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Project from '../components/Project'
import Skills from '../components/Skills'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Thinn Thazin Win |  Front-End Developer</title>
        <meta name="description" content="I’m a front-end web and mobile developer specializing in building  exceptional digital experiences." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Project />
    <Contact />
    </div>
  )
}