
import { Outlet, Link } from "react-router";


export function MainLayout() {
  return (
    <div>
      {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
        
      <nav className="navbar bg-base-100 shadow-sm">
        <div className="flex-1">
    <a style={{ color: 'black' }} className="btn btn-ghost text-xl">daisyUI</a>
  </div>
        <ul className="flex-1 menu menu-horizontal px-1">
          <li className="nav-item">
            <Link className="nav-link" to="/">Movie</Link>
          </li>
          <li className="nav-item">
            <Link className="nav-link" to="/categories">Categories</Link>
          </li>
          {/* <li className="nav-item">
            <Link className="nav-link" to="/nothing-here">Nothing Here</Link>
          </li> */}
        </ul>
      </nav>

      <hr />

      {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
      <Outlet />
    </div>
  );
}