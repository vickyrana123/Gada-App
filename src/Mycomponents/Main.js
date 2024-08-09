import React from 'react';

export default function Main() {
  const cardContent = [
    {
      text: <center><h1>MRP. <s>2000</s>&nbsp;599</h1><h2>50% OFF</h2></center>,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcRx5rKupDfCBfhpB24-Z_F4hQaXBnKCzPpWdLsA7OZ1IkTeft5cMuZW89wYBNz7wZ3cqMS9XSgyy3ZTS5QwENUS2JzmOektkYSDeNtGkGVrRkPJ-1NCAR_j29aEYntzQinvxK7rock&usqp=CAc" // Replace with your actual image URLs
    },
    {
      text: <center><h1>MRP. <s>1500</s>&nbsp;999</h1><h2>30% OFF</h2></center>,
      img: "https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcQz_3BX0JelKpMMOYOKcMpnY8zugDPttpHFn19TTfPJY71sGKjacmr6z_JeEdfawMkm1f7p_pBmL5e3xzBNxhz42QyigqKD2PpnwZZTcaZQYRxZHX0wlAVxgaB4GiLgcRF-3Lh3Rg0&usqp=CAc"
    },
    {
      text: <center><h1>MRP. <s>1000</s>&nbsp;799</h1></center>,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTKEt7iuy0tWdjdTcDMATsPwLI4IsbyO8vJHQ&s"
    },
    {
      text: <center><h1>MRP. <s>899</s>&nbsp;799</h1></center>,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQkZYzcNaqrNbceM6S291oasbJwFQ4GypdAmA&s"
    },
    {
      text: <center><h1>MRP. <s>1000</s>&nbsp;799</h1></center>,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkbljbdHGrqfZ7NzQO24e3XztUDCw0A3oJWQ&s"
    }
    ,
    {
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRFMJd9FrIrhnKsZT2L2sQFsTJcpaLI1oE5zA&s"
    }
    ,
    {
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQthSDCRYCiTJ1AbG2qKKIwUsMqqQHF6ZpDQ&s"
    }
    ,
    {
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfF2AXkpM7HI6rNhKIKLUYiFavc2IHFLy7Min65oVk1S1H4Tx7R2zZqE5XFHajxeopZy8&usqp=CAU"
    }
    ,
    {
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_rPM1lMKWB0-IW1F5YZsAcgRu4BgVSI3psg&s"
    }
    ,
    {
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdUtDyF-FAxYMtKuDvrOnISIieBSt130YZgg&s"
    }
    ,
    {
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQr_ozcFziVhwRvtaAlu-6Bs0Chhttk_WVQ3Q&s"
    }
    ,
    {
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRePe6pcwsy6HYs5N0mpp5foI0omNeYUqY8EA&s"
    }
    ,
    {
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-ifqDCIdRLJUcCdflgZW2-Pfi1dQ4e2WdoA&s"
    }
    ,
    {
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWWzEQCIQoVUEnr0RlunglpuxXKHi2jfSlpg&s"
    }
    ,
    {
      text: "This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.",
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUsaBzc3562s9R9i7fleaBLa1eYeJa1aTmAQ&s"
    }
  ];

  return (
    <div className="row row-cols-1 row-cols-sm-2 row-cols-md-5 g-3">
      {cardContent.map((card, index) => (
        <div className="col" key={index}>
          <div className="card shadow-sm">
            <img
              className="bd-placeholder-img card-img-top"
              width="225"
              height="225"
              src={card.img}
              alt={`Card image ${index + 1}`}
            />
            <div className="card-body">
              <p className="card-text">{card.text}</p>
              <div className="d-flex justify-content-between align-items-center">
                <div className="btn-group">
                  <button type="button" className="btn btn-sm btn-outline-secondary">
                    Buy
                  </button>
                </div>

              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
