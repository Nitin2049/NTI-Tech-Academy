import React from 'react';
import "../home_pages/UpcomingBatches.css"
import mern from "../../public/images/MERN STACK + GEN AI.webp"
import mean from "../../public/images/Mean Stack.webp"
import cyberSecurity from "../../public/images/CYBER SECURITY + GEN AI.webp"
import javaFullStack from "../../public/images/Java Full Stack Developer.png"


const batches = [
  {
    title: "WEB DESIGNING",
    branch: "Pitampura",
    date: "31-05-2025",
    img: javaFullStack
  },

  {
    title: "MERN STACK",
    branch: "Noida Sector 16",
    date: "31-05-2025",
    img: mern
  },
  {
    title: "CYBER SECURITY",
    branch: "Noida Sector 16",
    date: "31-05-2025",
    img: cyberSecurity
  },
  {
    title: "WEB DESIGNING",
    branch: "Pitampura",
    date: "31-05-2025",
    img: javaFullStack
  },

  {
    title: "MERN STACK",
    branch: "Noida Sector 16",
    date: "31-05-2025",
    img: mern
  },
  {
    title: "CYBER SECURITY",
    branch: "Noida Sector 16",
    date: "31-05-2025",
    img: cyberSecurity
  }, {
    title: "WEB DESIGNING",
    branch: "Pitampura",
    date: "31-05-2025",
    img: javaFullStack
  },

  {
    title: "MERN STACK",
    branch: "Noida Sector 16",
    date: "31-05-2025",
    img: mern
  },
  {
    title: "CYBER SECURITY",
    branch: "Noida Sector 16",
    date: "31-05-2025",
    img: cyberSecurity
  },
];

export default function UpcomingBatches() {
  const handleScroll = (direction) => {
    const box = document.getElementById('scrollBox');
    const distance = 300;

    if (box) {
      box.scrollBy({
        left: direction === 'left' ? -distance : distance,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className="container py-5 upcoming-batches">
      <h2 className="text-center mb-4 learners-underline">Upcoming Batches (Select a Branch)</h2>

      {/* Dropdown */}
      <div className="text-center mb-4">
        <select className="form-select mx-auto" style={{ width: '150px' }}>
          <option>All</option>
          <option>Ghaziabad</option>
          <option>Gurugram</option>
          <option>Noida</option>
        </select>
      </div>

      {/* Scroll Buttons and Cards */}
      <div style={{ position: 'relative' }}>
        {/* Left Scroll Button */}
        <button
          className="btn btn-primary"
          style={{
            position: 'absolute',
            top: '50%',
            left: 0,
            transform: 'translateY(-50%)',
            zIndex: 2
          }}
          onClick={() => handleScroll('left')}
        >
          ‹
        </button>

        {/* Scrollable Cards Container */}
        <div
          id="scrollBox"
          className="d-flex overflow-auto px-2"
          style={{
            scrollBehavior: 'smooth',
            paddingLeft: '50px',
            gap: '1rem'
          }}
        >
          {batches.map((item, index) => (
            <div key={index} style={{ minWidth: '250px', flex: '0 0 auto' }} >
              <div
                className="card border-0 shadow text-center"
                style={{
                  background: 'linear-gradient(to bottom right, #cce5ff, #e6f0ff)',
                  borderRadius: '10px'
                }}
              >
                {/* Badge */}
                <div style={{ position: 'absolute', top: 5, left: 10 }}>
                  <span className="badge text-dark">⭐⭐⭐⭐⭐</span>
                </div>

                {/* Image */}
                <div className="d-flex justify-content-center mt-4 mb-3">
                  <div
                    className="bg-white d-flex align-items-center justify-content-center"
                    style={{
                      width: '100px',
                      height: '100px',
                      borderRadius: '50%',
                      border: '2px solid #007bff',
                      overflow: 'hidden'
                    }}
                  >
                    <img loading="lazy"
                      src={item.img}
                      alt={item.title}
                      style={{ width: '80%', height: '80%', objectFit: 'contain' }}
                    />
                  </div>
                </div>

                {/* Info */}
                <div className="card-body">
                  <h6 className="fw-bold text-uppercase text-primary">{item.title}</h6>
                  <p><strong>Branch:</strong> {item.branch}</p>
                  <p><strong>Starting Date:</strong> {item.date}</p>
                  <button className="btn btn-success w-100">📞 Request A Call Back</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Right Scroll Button */}
        <button
          className="btn btn-primary"
          style={{
            position: 'absolute',
            top: '50%',
            right: 0,
            transform: 'translateY(-50%)',
            zIndex: 2
          }}
          onClick={() => handleScroll('right')}
        >
          ›
        </button>
      </div>
    </div>
  );
}
