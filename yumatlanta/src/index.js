import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './home.js'

/**
 * Navigation page for all components
 */
class Index extends React.Component {
  render() {
    return(
      <div>
        <Home/>
      </div>
    );
  }
} export default Index;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);
