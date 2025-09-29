import * as NavigationMenu from "@radix-ui/react-navigation-menu";

const AppNavigationMenu = () => {
  return (
    <nav className="flex justify-between items-center absolute z-20 top-0 right-0 p-4 w-screen">
      <h6 className="text-white text-2xl font-bold">Goooooood Lookin Pizza</h6>
      <NavigationMenu.Root>
        <NavigationMenu.List className="flex gap-4">
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text-white">
              Order
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text-white">
              Location
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text-white">
              About
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
          <NavigationMenu.Item>
            <NavigationMenu.Trigger className="text-white">
              Home
            </NavigationMenu.Trigger>
          </NavigationMenu.Item>
        </NavigationMenu.List>
      </NavigationMenu.Root>
    </nav>
  );
};

export default AppNavigationMenu;
