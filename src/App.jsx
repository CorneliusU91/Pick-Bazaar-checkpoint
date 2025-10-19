import React from 'react'
import Navbar from './component/Navbar'
import MainText from './component/main/MainText'
import MainSearchBar from './component/main/MainSearchBar'
import Scrollable from './component/Scrollable'

const App = () => {
  return (
    <>
      <Navbar />
      <MainText/>
      <MainSearchBar/>
      <Scrollable/>
    </>
  )
}

export default App