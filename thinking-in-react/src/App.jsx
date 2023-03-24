import React from 'react';
import ReactDOM from 'react-dom';

/*
Thinking in React: https://reactjs.org/docs/thinking-in-react.html

Step 1: Break The UI Into A Component Hierarchy

FilterableProductTable (orange)
  SearchBar (blue)
  ProductTable (green)
    ProductCategoryRow (turquoise)
    ProductRow (red)

Step 2: Build A Static Version in React
Step 3: Identify The Minimal (but complete) Representation Of UI State
Step 4: Identify Where Your State Should Live
Step 5: Add Inverse Data Flow
*/

function App() {
  return (
    <img src="https://reactjs.org/static/eb8bda25806a89ebdc838813bdfa3601/6b2ea/thinking-in-react-components.png" alt="Thinking in React" />
  );
}

// ReactDOM.render(<App />, document.getElementById('root'));

export default App;