import React from 'react';
import ReactDOM from 'react-dom/client';

/**
 * Navigation page for all components
 * Test
 */
class Index extends React.Component {
  render() {
    return(
      <div className='Navigation'>
        <p>Blog landing page</p>
      </div>
    )
  }
} export default Index;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Index/>);

