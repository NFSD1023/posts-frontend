import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'
import LatestPosts from './components/LatestPosts'
import UsersList from './components/UsersList'

function App() {

  return (
    <>
      <div id="app">
        <div id="header">
          <Header />
        </div>
        <div id="content-left">
          <LatestPosts />
        </div>
        <div id="content-right">
          <UsersList />
        </div>
        <div id="footer">
          <Footer />
        </div>
      </div>

    </>
  )
}

export default App
