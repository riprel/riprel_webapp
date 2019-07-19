import React from 'react';
import '../../css/App.css';


const styles = {
  titleBar: {
    backgroundColor: 'black',
    color: 'white',
    font: 'Open Sans',
    textAlign: 'center'
  },
  date: {
    color: 'blue',
    backgroundColor: 'gray',
    textAlign: 'center'
  }
}

function App () {
  return (
    <div>
      <h1 className="title-bar" style={styles.titleBar}>RIPREL</h1>
    </div>
  )
}
export default App;
// export default class App extends React.components{
// return (
//   <div>
//     <h1 className="title-bar" style={styles.titleBar}>Welcome to Riprel!</h1>
//   </div>
// )
// }

// export default App;
