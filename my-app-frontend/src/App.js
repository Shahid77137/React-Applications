import logo from './logo.svg';
import './App.css';
let name = "Shahid"
function App() {
  return (
    <>
    
    <nav>
      <li>Home</li>
      <li>About</li>
      <li>Contact</li>
      <li>Details</li>
      <li>CV</li>
    </nav>
    <img src="https://camo.githubusercontent.com/150f174fdef69e8576712f8b99ca21344073d83cc8375ce47cc3dfcfb6c51f85/68747470733a2f2f63302e77616c6c7061706572666c6172652e636f6d2f707265766965772f3637322f3938342f3934322f6c6170746f702d636f6d70757465722d6b6579626f6172642d746563686e6f6c6f67792e6a7067" alt="" />
    <div className='container'>
      <h1>Welcom {name} to react learning course</h1>
      <h3 className='color'>We are Providing a full stack Developer Course for 7months</h3>
    <p>Lorem ipsum, dolor sit amet <b>consectetur adipisicing</b>  elit. Recusandae reiciendis quae velit quia, impedit assumenda, temporibus eum culpa eligendi obcaecati alias ab! Dolorem asperiores rerum repellendus consequuntur illum, obcaecati blanditiis, fugiat placeat vitae porro eligendi totam aspernatur maxime aperiam quaerat?</p>
    </div>
    </>
    
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React With Shahid
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
