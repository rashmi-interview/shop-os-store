import React, { Suspense } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom"
import PageLoader from "./componets/PageLoader/PageLoader";
import "./App.css"

const Agents = React.lazy(() => import('./pages/Agents/Agents'))
const Stores = React.lazy(() => import('./pages/Stores/Stores'))
const Home = React.lazy(() => import('./pages/Home/Home'))
const Workflows = React.lazy(() => import('./pages/Workflows/Workflows'))

function App() {
  return (
    <Router>
      <Suspense fallback={<PageLoader />}>
        <Routes>
          <Route path="/"
            element={<Home />} />
          <Route path="/agents"
            element={<Agents />} />
          <Route path="/stores"
            element={<Stores />} />
          <Route path="/workflows"
            element={<Workflows />} />
        </Routes>
      </Suspense>
    </Router>
  )
}

export default App
