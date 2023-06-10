import { NavLink, Outlet } from "react-router-dom"


const RouteLayout = () => {
  return (
    <div>
        <header>
      <nav>
        <h1>Joby</h1>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about">About</NavLink>
        <NavLink to="help">Help</NavLink>
        <NavLink to="careers">Careers</NavLink>
      </nav>
    </header>

    <main>
        <Outlet/>
    </main>
    </div>
  )
}

export default RouteLayout