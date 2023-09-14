
import './App.css';
// let name = "Shahid Afridi"
function App() {
  return (
    <>
    {/* <h1>Shahid Afridi</h1> */}
    {/* <nav>
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
    </div> */}
    
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <a className="navbar-brand" href="/">Navbar</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/">Link</a>
        </li>
        <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul className="dropdown-menu">
            <li><a className="dropdown-item" href="/">Action</a></li>
            <li><a className="dropdown-item" href="/">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="/">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item">
          <a className="nav-link disabled" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form>
    </div>
  </div>
</nav>

    </>
  );
}

export default App;
