import pizzaVid from "../../assets/video/rotatingpizza.mp4";
import AppNavigationMenu from "../AppNavigationMenu/AppNavigationMenu";

const PageContainer = () => {
  return (
    <main className="h-screen">
      <div className="h-full w-full bg-black relative">
        <AppNavigationMenu />
        <video
          className="absolute inset-0 h-full w-full object-cover z-0"
          autoPlay
          playsInline
          muted
          loop
        >
          <source src={pizzaVid} type="video/mp4" />
        </video>
      </div>
    </main>
  );
};

export default PageContainer;
