import logo from "./images/logo.png"
export default function NavbarComponent() {
return (
<>
<nav class="navbar navbar-expand-lg bg-light">
  <div class="container-fluid" style={{backgroundColor:"#000"}}>
    <img src={logo}></img>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a class="nav-link active" aria-current="page" href="#home">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#new-arrivals">New Arrivals</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#products">Products</a>
            </li> 
            <li class="nav-item">
              <a class="nav-link" href="#deal">Deal of the day</a>
            </li> 
            <li class="nav-item">
              <a class="nav-link" href="#blog">Blog</a>
            </li> 
          </ul>
    </div>
  </div>
</nav>
</>
);
}