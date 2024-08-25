import "./App.css";

const Header = () => {
  return (
    <>
      <div className="header-section">
        <div className="logo">
          <img
            className="app-logo"
            src="https://png.pngtree.com/png-clipart/20230520/original/pngtree-burger-logo-png-image_9166715.png"
            alt="logo"
          />
        </div>
        <div className="nav-items">
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Instamart</li>
            <li>Contact Us</li>
            <li>Cart</li>
          </ul>
        </div>
      </div>
    </>
  );
};

const Body = () => {
  return (
    <>
      <div className="main">
        <div className="search-btn">
          <input type="text"></input>
          <button>Search restaurant here...</button>
        </div>
        <div className="res-list">
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        <RestaurantCard />
        </div>
      </div>
    </>
  );
};



const RestaurantCard = () => {


  return (
    <>
      <div className="resCard">
        <img
          className="resImage"
          src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/7491ab47fd5a4774cd16af84310a25ab"
          alt="res-image"
        />
        <h5>Hungry Kitchen</h5>
        <h5>North Indian, South Indian</h5>
        <h5>4.4 Stars</h5>
      </div>
    </>
  );
};

function App() {
  return (
    <>
      <Header />
      <Body />
    </>
  );
}

export default App;
