const images = [
    "https://source.unsplash.com/random/300x200?sig=1",
    "https://source.unsplash.com/random/300x200?sig=2",
    "https://source.unsplash.com/random/300x200?sig=3",
    "https://source.unsplash.com/random/300x200?sig=4",
    "https://source.unsplash.com/random/300x200?sig=5",
  ];
  
  export const getRandomImage = () => {
    return images[Math.floor(Math.random() * images.length)];
  };
  