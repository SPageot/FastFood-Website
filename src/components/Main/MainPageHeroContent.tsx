import pizzaVid from "../../assets/video/rotatingpizza.mp4";

const MainPageHeroContent = () => {
  return (
    <video
      className="absolute inset-0 h-full w-full object-cover z-0"
      autoPlay
      playsInline
      muted
      loop
    >
      <source src={pizzaVid} type="video/mp4" />
    </video>
  );
};

export default MainPageHeroContent;
