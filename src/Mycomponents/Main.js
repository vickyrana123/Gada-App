import React from 'react';
import { useNavigate } from 'react-router-dom';
import downloadImage from './rough.png'; // Adjust path according to the actual file location

export default function Main() {
  const navigate = useNavigate();
  const cardContent = [
    {
      text: (
        <center>
          <h1>MRP. <s>2000</s>&nbsp;599</h1>
          <h2>50% OFF</h2>
        </center>
      ),
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRx5rKupDfCBfhpB24-Z_F4hQaXBnKCzPpWdLsA7OZ1IkTeft5cMuZW89wYBNz7wZ3cqMS9XSgyy3ZTS5QwENUS2JzmOektkYSDeNtGkGVrRkPJ-1NCAR_j29aEYntzQinvxK7rock&usqp=CAc"
    },
    {
      text: (
        <center>
          <h1>MRP. <s>1500</s>&nbsp;999</h1>
          <h2>30% OFF</h2>
        </center>
      ),
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQz_3BX0JelKpMMOYOKcMpnY8zugDPttpHFn19TTfPJY71sGKjacmr6z_JeEdfawMkm1f7p_pBmL5e3xzBNxhz42QyigqKD2PpnwZZTcaZQYRxZHX0wlAVxgaB4GiLgcRF-3Lh3Rg0&usqp=CAc"
    },
    {
      text: (
        <center>
          <h1>MRP. <s>1500</s>&nbsp;999</h1>
          <h2>30% OFF</h2>
        </center>
      ),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKEt7iuy0tWdjdTcDMATsPwLI4IsbyO8vJHQ&s"
    },
    {
      text: (
        <center>
          <h1>MRP. <s>1500</s>&nbsp;999</h1>
          <h2>30% OFF</h2>
        </center>
      ),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZYzcNaqrNbceM6S291oasbJwFQ4GypdAmA&s"
    },
    {
      text: (
        <center>
          <h1>MRP. <s>1500</s>&nbsp;999</h1>
          <h2>30% OFF</h2>
        </center>
      ),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbljbdHGrqfZ7NzQO24e3XztUDCw0A3oJWQ&s"
    },
    {
      text: (
        <center>
          <h1>MRP. <s>1500</s>&nbsp;999</h1>
          <h2>30% OFF</h2>
        </center>
      ),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMJd9FrIrhnKsZT2L2sQFsTJcpaLI1oE5zA&s"
    },
    {
      text: (
        <center>
          <h1>MRP. <s>1500</s>&nbsp;999</h1>
          <h2>30% OFF</h2>
        </center>
      ),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQthSDCRYCiTJ1AbG2qKKIwUsMqqQHF6ZpDQ&s"
    },
    {
      text: (
        <center>
          <h1>MRP. <s>1500</s>&nbsp;999</h1>
          <h2>30% OFF</h2>
        </center>
      ),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfF2AXkpM7HI6rNhKIKLUYiFavc2IHFLy7Min65oVk1S1H4Tx7R2zZqE5XFHajxeopZy8&usqp=CAU"
    },
    {
      text: (
        <center>
          <h1>MRP. <s>1500</s>&nbsp;999</h1>
          <h2>30% OFF</h2>
        </center>
      ),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rPM1lMKWB0-IW1F5YZsAcgRu4BgVSI3psg&s"
    },
    {
      text: (
        <center>
          <h1>MRP. <s>1500</s>&nbsp;999</h1>
          <h2>30% OFF</h2>
        </center>
      ),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUtDyF-FAxYMtKuDvrOnISIieBSt130YZgg&s"
    },
    {
      text: (
        <center>
          <h1>MRP. <s>1500</s>&nbsp;999</h1>
          <h2>30% OFF</h2>
        </center>
      ),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_ozcFziVhwRvtaAlu-6Bs0Chhttk_WVQ3Q&s"
    },
    {
      text: (
        <center>
          <h1>MRP. <s>1500</s>&nbsp;999</h1>
          <h2>30% OFF</h2>
        </center>
      ),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePe6pcwsy6HYs5N0mpp5foI0omNeYUqY8EA&s"
    },
    {
      text: (
        <center>
          <h1>MRP. <s>1500</s>&nbsp;999</h1>
          <h2>30% OFF</h2>
        </center>
      ),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ifqDCIdRLJUcCdflgZW2-Pfi1dQ4e2WdoA&s"
    },
    {
      text: (
        <center>
          <h1>MRP. <s>1500</s>&nbsp;999</h1>
          <h2>30% OFF</h2>
        </center>
      ),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWzEQCIQoVUEnr0RlunglpuxXKHi2jfSlpg&s"
    },
    {
      text: (
        <center>
          <h1>MRP. <s>1500</s>&nbsp;999</h1>
          <h2>30% OFF</h2>
        </center>
      ),
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUsaBzc3562s9R9i7fleaBLa1eYeJa1aTmAQ&s"
    }
  ];

  const handleBuyNow = (index) => {
    navigate(`/buy-now/${index}`);
  };

  return (
    <>
    <div style={{ display: 'flex', alignItems: 'center', padding: '20px' }}>
      <img 
        src={downloadImage} 
        alt="Description of the image" 
        style={{ width: '500', height: '500', marginRight: '100px', marginBottom: 100, marginTop: 100 }} // Image on the left
      />
      <div style={{ flex: 1}}> {/* This allows the text div to take up remaining space */}
        <h1 style={{fontSize: 100, color: 'darkviolet'}}>Shop Smart, Live Well!</h1>
        <p style={{fontSize: 50}}>Discover a world of unbeatable deals and quality products tailored for your lifestyle.</p>
      </div>
    </div>
    <div>
      <marquee className="he" direction="right" ><img src={downloadImage}></img>
      </marquee>
      <h1 style={{fontSize: 70, marginBottom: 100, marginTop: 100, marginLeft: 900, color: 'darkviolet'}}>Top Products</h1>
    </div>
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
      {cardContent.map((card, index) => (
        <div className="col" key={index}>
          <div className="card shadow-sm" style={{ height: '100%' }}>
            <img
              className="bd-placeholder-img card-img-top"
              style={{
                width: '100%',
                height: '225px', // Consistent height for all images
                objectFit: 'contain', // Ensures the entire image is visible
                backgroundColor: '#f8f9fa', // Background color to fill the space
                padding: '10px' // Optional padding to ensure better fit
              }}
              src={card.img}
              alt={`Discounted product ${index + 1}`} // Modified alt attribute
            />
            <div className="card-body" style={{ height: '100%' }}>
              <p className="card-text">{card.text}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    style={{ marginRight: '20px' }} // Adds space between the buttons
                  >
                    Add To Cart
                  </button>
                  <button
                    type="button"
                    className="btn btn-sm btn-outline-secondary"
                    style={{ marginLeft: '30px' }} 
                    onClick={() => handleBuyNow(index)}
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
    </>
  );
}
