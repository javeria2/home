// special thanks to https://github.com/drcmda/react-spring for react spring

import React from 'react'
import ReactDOM from 'react-dom'
import { Parallax } from 'react-spring'
import resume from './resume.pdf'
import './styles.css'

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

class App extends React.Component {
  scroll = to => this.refs.parallax.scrollTo(to)
  render() {
    return (
      <div>
        <Parallax className="container" ref="parallax" pages={4} horizontal scrolling={true}>
          <Page offset={0} gradient="pink" caption="I am" first="Sanchay Javeria" second="" onClick={() => this.scroll(1)} />
          <Page offset={1} gradient="teal" caption="what I do" first="Software Engineer at Pinterest" second="past Yahoo! Inc." onClick={() => this.scroll(2)} />
          <Page offset={2} gradient="tomato" caption="Besides programming, I like" first="Working out, Traveling, comics" second="EDM, Billiards, Swimming, anime" onClick={() => this.scroll(3)} />
          <Page offset={3} gradient="potato" caption="Get in touch 🍻" first="sanchayjaveria [at] gmail.com" second="" onClick={() => this.scroll(0)} />
        </Parallax>
        <div style={styles.footer}>
          <p>
            <a title="Resume" href={ resume }><i class="fas fa-file-alt"></i></a>
            <a title="Github" href="https://www.github.com/javeria2/"><i class="fab fa-github-alt"></i></a>
            <a title="LinkedIn" href="https://www.linkedin.com/in/javeria2/"><i class="fab fa-linkedin"></i></a>
            <a title="Medium" href="https://medium.com/@sanchay.javeria"><i class="fab fa-medium"></i></a>
            <a title="Facebook" href="https://www.facebook.com/sanchay.javeria"><i class="fab fa-facebook"></i></a>
          </p>
          <p>Built with <a class="anchor" href="https://github.com/drcmda/react-spring">react spring ♡</a></p>
        </div>
      </div>
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
