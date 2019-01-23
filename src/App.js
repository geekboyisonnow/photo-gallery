import React, {
  Component
} from 'react'
import {
  Link,
  BrowserRouter as Router,
  Route
} from 'react-router-dom'
import Home from './Home'
import PhotoIndex from './PhotoIndex'
import PhotoDetails from './PhotoDetails'
import IndexOfPics from './PicInfo'

class App extends Component {
  render() {
    return ( <
      Router >
      <
      main >
      <
      section className = "hero" >
      <
      div className = "hero-body" >
      <
      div className = "container" >
      <
      h1 className = "title" >
      <
      Link to = "/" > Things I Like < /Link> <
      /h1> <
      h2 className = "subtitle" > Photo Gallery < /h2> <
      /div> <
      /div> <
      /section> <
      section className = "section" >
      <
      Route exact path = "/"
      component = {
        Home
      }
      /> <
      Route path = "/:category"
      exact component = {
        IndexOfPics
      }
      /> <
      Route path = "/:category/:id"
      exact component = {
        PicInfo
      }
      /> <
      /section> <
      /main> <
      /Router>
    )
  }
}

export default App