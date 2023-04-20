import React, { useState } from 'react';
const items =[
    {title: "Abc",
    description: "jxbnsjknSJKnbcjbj",
    image: "https://images.pexels.com/photos/268533/pexels-photo-268533.jpeg?cs=srgb&dl=pexels-pixabay-268533.jpg&fm=jpg"
    },
    {title: "jec",
    description: "jxbnsjknSJKnbcjbj",
    image: "https://media.gettyimages.com/id/912853916/photo/shah-faisal-masjid-islamabad-pakistan.jpg?s=612x612&w=gi&k=20&c=lPgl9nhwINrmnG9a98QirEZXIeAS6vrDPZSWLxacps0="
    },
    {title: "pok",
    description: "jxbnsjknSJKnbcjbj",
    image: "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg"
    },
]
const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrevClick = () => {
    const newIndex = currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const handleNextClick = () => {
    const newIndex = currentIndex === items.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  return (
    <div className="slider">
      <div className="slider-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {items.map((item, index) => (
          <div className="slider-item" style={{backgroundImage: `url(${item.image})`, backgroundPosition: "center", backgroundRepeat: "no-repeat", backgroundSize: "cover" }} key={index}>
            {/* <img src={item.image} alt={item.title} /> */}
          
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </div>
        ))}
      </div>
      <button className="slider-prev" onClick={handlePrevClick}>
        Prev
      </button>
      <button className="slider-next" onClick={handleNextClick}>
        Next
      </button>
    </div>
  );
};

export default Slider;
