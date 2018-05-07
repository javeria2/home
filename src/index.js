// special thanks to https://github.com/drcmda/react-spring for react spring

import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring'
import resume from './resume.pdf'
import './styles.css'
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom'

const Page = ({ offset, caption, first, second, gradient, onClick }) => (
  <React.Fragment>
    <Parallax.Layer offset={offset} speed={0.2} onClick={onClick}>
      <div className="slopeBegin" />
    </Parallax.Layer>

    <Parallax.Layer offset={offset} speed={-0.2} onClick={onClick}>
      <div className={`slopeEnd ${gradient}`} />
    </Parallax.Layer>

    <Parallax.Layer className="text number" offset={offset} speed={0.3}>
      <span>0{offset + 1}</span>
    </Parallax.Layer>

    <Parallax.Layer className="text header" offset={offset} speed={0.4}>
      <div>
        <div>
          <p style={{ fontSize: 20 }}>{caption}</p>
          <div className={`stripe ${gradient}`} />
          <p>{first}</p>
          <p>{second}</p>
        </div>

      </div>
    </Parallax.Layer>
  </React.Fragment>
)

class Home extends React.Component {
  render() {
    return (
      <div>
        <Parallax className="container" ref="parallax" pages={4} horizontal scrolling={false}>
          <Page offset={0} gradient="pink" caption="I am 👋" first="Sanchay Javeria" second=""
            onClick={() => this.refs.parallax.scrollTo(1)} />
          <Page offset={1} gradient="teal" caption="what I do 💻" first="SWE Intern at Pinterest" second="past Yahoo! Inc."
            onClick={() => this.refs.parallax.scrollTo(2)} />
          <Page offset={2} gradient="tomato" caption="Besides programming, I like 🌊" first="Working out, Traveling, comics" second="EDM, Billiards, anime"
            onClick={() => this.refs.parallax.scrollTo(3)} />
          <Page offset={3} gradient="potato" caption="Get in touch 🍻" first="sanchay [dot] javeria" second="[at] gmail [dot] com"
            onClick={() => this.refs.parallax.scrollTo(0)} />
        </Parallax>
        <div style={styles.footer}>
          <p>
            <a title="Resume" href={ resume } target="_blank"><i className="fas fa-file-alt"></i></a>
            <a title="Github" href="https://www.github.com/javeria2/" target="_blank"><i className="fab fa-github-alt"></i></a>
            <a title="LinkedIn" href="https://www.linkedin.com/in/javeria2/" target="_blank"><i className="fab fa-linkedin"></i></a>
            <a title="Medium" href="https://medium.com/@sanchay.javeria" target="_blank"><i className="fab fa-medium"></i></a>
            <a title="Facebook" href="https://www.facebook.com/sanchay.javeria" target="_blank"><i className="fab fa-facebook"></i></a>
          </p>
          <p>Built with <a className="anchor" href="https://github.com/drcmda/react-spring">react spring ♡</a></p>
        </div>
      </div>
    )
  }
}

class App extends React.Component {
  render() {
    return (
      <Router>
        <Route component= {Home} />
      </Router>
    )
  }
}

const styles = {
  footer: {
    position: 'absolute',
    bottom: '0',
    width: '100%',
    height: '100px',   /* Height of the footer */
    textAlign: 'center',
    verticalAlign: 'middle',
    fontSize: '14px',
    fontFamily: 'Lato',
    fontWeight: '300',
    color: '#fff'
  },
}

ReactDOM.render((
    <App />
), document.getElementById('root'))
