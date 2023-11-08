import NavItem from "./NavItem"
const Navbar = () => {
  return (
    <nav className="flex justify-between w-11/12 md:w-10/12 mx-auto items-center navitem">
      <h1 className="text-2xl font-bold robo">RoboAdvisor</h1>
      <div className="flex items-center gap-8">
        <NavItem text={"About"} url={"#about"} />
        <NavItem text={"Login"} url={"login"} />
        <NavItem text={"Sign Up"} url={"signup"} />
      </div>
    </nav>
  );
};
export default Navbar;  
