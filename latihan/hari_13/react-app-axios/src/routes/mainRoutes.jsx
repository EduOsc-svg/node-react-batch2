
import { BrowserRouter, Routes, Route, Link } from 'react-router';
import { MainLayout } from "../layout/mainLayout";
import CRUDaxios from "../pages/CRUDaxios";
import axios from 'axios';
import { useEffect, useState } from 'react';



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
            <Route path="Categories" element={<Category />} />

            {/* Using path="*"" means "match anything", so this route
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


function Category() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [editingItem, setEditingItem] = useState(null);
  const [editName, setEditName] = useState('');

  useEffect(() => {
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('http://localhost:3000/api/categories');
      setCategories(res.data.data || []);
    } catch (err) {
      console.error('Error fetching categories:', err);
      setError('Failed to load categories');
    } finally {
      setLoading(false);
    }
  };

  const handleOpenEdit = (category) => {
    setEditingItem(category);
    setEditName(category.name || '');
  };

  const handleCloseEdit = () => {
    setEditingItem(null);
    setEditName('');
  };

  const handleSaveEdit = async () => {
    if (!editingItem) return;
    if (!editName.trim()) {
      setError('Name is required');
      return;
    }
    try {
      setLoading(true);
      const res = await axios.put(`http://localhost:3000/api/categories/${editingItem.id}`, { name: editName.trim() });
      if (res.data && res.data.data) {
        setCategories((prev) => prev.map((c) => (c.id === editingItem.id ? res.data.data : c)));
      } else {
        await fetchCategories();
      }
      handleCloseEdit();
    } catch (err) {
      console.error('There was an error updating the category!', err);
      setError('Failed to update category');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    if (!confirm('Are you sure you want to delete this category?')) return;
    try {
      setLoading(true);
      await axios.delete(`http://localhost:3000/api/categories/${id}`);
      setCategories((prev) => prev.filter((c) => c.id !== id));
    } catch (err) {
      console.error('There was an error deleting the category!', err);
      setError('Failed to delete category');
    } finally {
      setLoading(false);
    }
  };

  const [title, setTitle] = useState('');
  const [year, setYear] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post('http://localhost:3000/api/movies', {
        title,
        year: parseInt(year),
        categoryId: parseInt(selectedCategory)
      });
      setTitle('');
      setYear('');
      setSelectedCategory('');
    } catch (error) {
      console.error('There was an error creating the movie!', error);
      setError('Failed to create movie');
    } finally {
      setLoading(false);
    }

  return (

    <div>
      <div className="card bg-base-200 shadow mb-6">
                <div className="card-body">
                    <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
                        <div className="form-control">
                            <label className="label"><span className="label-text">Title</span></label>
                            <input id="title" type="text" value={title} onChange={(e) => setTitle(e.target.value)} placeholder="Movie title.." className="input input-bordered w-full" />
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text">Year</span></label>
                            <input id="year" type="text" value={year} onChange={(e) => setYear(e.target.value)} placeholder="Release year.." className="input input-bordered w-full" />
                        </div>

                        <div className="form-control">
                            <label className="label"><span className="label-text">Category</span></label>
                            <select id="category" value={selectedCategory} onChange={(e) => setSelectedCategory(e.target.value)} className="w-full">
                                <option value="">-- choose --</option>
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.id}>{cat.name}</option>
                                ))}
                            </select>
                        </div>

                        <div className="md:col-span-3">
                            <div className="flex gap-2 justify-end">
                                <button type="submit" className={`btn btn-primary ${loading ? 'btn-disabled' : ''}`} disabled={loading}>
                                    {loading ? 'Saving...' : 'Submit'}
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
      <h2>Category</h2>
      {error && <div className="alert alert-error mb-4">{error}</div>}
      <p>List of categories will be displayed here.</p>

      <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              <th>id</th>
              <th>nomor</th>
              <th>name</th>
              <th>action</th>
              <th>createdAt</th>
              <th>updatedAt</th>
            </tr>
          </thead>
          <tbody>
            {categories.map((category, idx) => (
              <tr key={category.id}>
                <td>{category.id}</td>
                <td>{idx + 1}</td>
                <td>{category.name}</td>
                <td>
                  <div className="flex gap-2">
                    <button onClick={() => handleOpenEdit(category)} disabled={loading} className="btn btn-sm btn-outline">Edit</button>
                    <button onClick={() => handleDelete(category.id)} disabled={loading} className="btn btn-sm btn-error">Delete</button>
                  </div>
                </td>
                <td>{category.createdAt}</td>
                <td>{category.updatedAt}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Edit modal (daisyUI) */}
      {editingItem && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Edit Category #{editingItem.id}</h3>
            <div className="py-4">
              <label className="label"><span className="label-text">Name</span></label>
              <input className="input input-bordered w-full" value={editName} onChange={(e) => setEditName(e.target.value)} />
            </div>
            <div className="modal-action">
              <button className="btn btn-primary" onClick={handleSaveEdit} disabled={loading}>Save</button>
              <button className="btn btn-ghost" onClick={handleCloseEdit} disabled={loading}>Cancel</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

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