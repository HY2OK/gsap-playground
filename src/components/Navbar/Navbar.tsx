import { Link, Outlet } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className="h-screen flex flex-col justify-between text-white">
      <nav className="sticky top-0 left-0 flex flex-col justify-between gap-5 px-10 py-3">
        <Link to="/" className="text-3xl font-bold cursor-pointer text-center">
          gsap playground
        </Link>
        <div className="flex items-center flex-wrap gap-x-3 gap-y-2">
          <Link
            to="/button-toggle"
            className="border border-black p-2 rounded-lg hover:bg-zinc-700"
          >
            button-toggle
          </Link>
        </div>
      </nav>
      <div className="flex-grow  bg-slate-200 relative">
        <Outlet />
      </div>
    </div>
  )
}

export default Navbar
