
const NavBar = () => {
  return (
    <nav className=" max-w-2xl w-full bg-white flex justify-between items-center px-2.5 py-1 rounded-full h-14 scale-105">
        {/* <img src={logo} alt="website logo" className="h-7"/> */}
        <p className=" font-medium text-lg px-2">Cetfar</p>

        <ul className="flex button-nav space-x-1.5">
            <li><a href="#features" >Features</a></li>
            <li><a href="#properties" >Properties</a></li>
            <li><a href="#blog" >Blog</a></li>
            <li><a href="#faq" >Faq</a></li>
        </ul>

        <button className=" button-black">Get Started</button>
    </nav>
  )
}

export default NavBar