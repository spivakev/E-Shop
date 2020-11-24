import React from 'react'
import CreateProduct from './screens/CreateProduct'
import SearchProduct from './screens/SearchProduct'
import { BrowserRouter as Router, Route } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/search" component={SearchProduct} />
        <Route path="/" exact component={CreateProduct} />
      </Router>

    </div>
  );
}

export default App;
