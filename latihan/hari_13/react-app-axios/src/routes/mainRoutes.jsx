
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import { MainLayout } from "../layout/mainLayout";
import CRUDaxios from "../pages/CRUDaxios";
import CategoryPage from "../pages/CategoryPage";


export default function MainRoutes() {
  return (
    <div>
      {/* Routes nest inside one another. Nested route paths build upon
            parent route paths, and nested route elements render inside
            parent route elements. See the note about <Outlet> below. */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainLayout />}>
            <Route index element={<CRUDaxios />} />
            <Route path="categories" element={<CategoryPage />} />

            {/* Using path="*" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
            <Route path="*" element={<NoMatch />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );

}

function Home() {
  return (
    <div>
      <h2>Home</h2>
    </div>
  );

}

// CategoryPage moved to src/pages/CategoryPage.jsx

function NoMatch() {
  return (
    <div>
      <h2>404 - Not Found</h2>
      <p>The requested page was not found. <br />
        <Link to="/">Go to the home page</Link>
      </p>
    </div>
  );
}