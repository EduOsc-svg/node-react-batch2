import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function CategoryPage() {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const [newName, setNewName] = useState('');

  const [editingItem, setEditingItem] = useState(null);
  const [editName, setEditName] = useState('');
  // pagination
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5; // items per page

  useEffect(() => {
    // fetch once on mount
    fetchCategories();
  }, []);

  const fetchCategories = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await axios.get('http://localhost:3000/api/categories');
      const list = res.data.data || [];
      setCategories(list);
      // clamp current page based on fetched length
      const total = Math.max(1, Math.ceil(list.length / pageSize));
      setCurrentPage((p) => (p > total ? total : p));
    } catch (err) {
      console.error('Error fetching categories:', err);
      setError('Failed to load categories');
    } finally {
      setLoading(false);
    }
  };

  const handleCreate = async (e) => {
    e.preventDefault();
    if (!newName.trim()) {
      setError('Name is required');
      return;
    }
    setLoading(true);
    setError(null);
    try {
      const res = await axios.post('http://localhost:3000/api/categories', { name: newName.trim() });
      const created = res.data && res.data.data ? res.data.data : null;
      if (created) {
        setCategories((prev) => [created, ...prev]);
        setNewName('');
      } else {
        await fetchCategories();
      }
    } catch (err) {
      console.error('There was an error creating the category!', err);
      setError('Failed to create category');
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
    setError(null);
  };

  const handleSaveEdit = async () => {
    if (!editingItem) return;
    if (!editName.trim()) {
      setError('Name is required');
      return;
    }
    try {
      setLoading(true);
      const res = await axios.put(
        `http://localhost:3000/api/categories/${editingItem.id}`,
        { name: editName.trim() }
      );
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
    if (!window.confirm('Are you sure you want to delete this category?')) return;
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

  return (
    
    <div>
        <div className="flex items-center justify-between mb-6">
            <h1 className="text-2xl font-bold">CRUD Categories (Axios)</h1>
            {loading && <div className="badge badge-info">Loading...</div>}
        </div>
      <div className="card bg-base-200 shadow mb-6">
        <div className="card-body">
          <form onSubmit={handleCreate} className="grid grid-cols-1 md:grid-cols-3 gap-4 items-end">
            <div className="form-control">
              <label className="label"><span className="label-text">Category name</span></label>
              <input id="name" type="text" value={newName} onChange={(e) => setNewName(e.target.value)} placeholder="Category name.." className="input input-bordered w-full" />
            </div>

            <div className="md:col-span-2 flex justify-end items-end">
              <div className="flex gap-2">
                <button type="submit" style={{ color: 'black', backgroundColor: 'white' }} className={`btn btn-primary ${loading ? 'btn-disabled' : ''}`} disabled={loading}>{loading ? 'Saving...' : 'Add Category'}</button>
                <button type="button" style={{ color: 'black', backgroundColor: 'white' }} className="btn btn-primary" onClick={() => { setNewName(''); setError(null); }} disabled={loading}>Clear</button>
              </div>
            </div>
          </form>
        </div>
      </div>

      <h2 className="mb-4">Categories</h2>
      {error && <div className="alert alert-error mb-4">{error}</div>}

      <div className="pagination">
    <div className="overflow-x-auto">
        <table className="table table-zebra w-full">
          <thead>
            <tr>
              
              <th>nomor</th>
              <th>name</th>
              <th>action</th>
             
            </tr>
          </thead>
          <tbody>
            {(() => {
              const totalPages = Math.max(1, Math.ceil(categories.length / pageSize));
              // ensure currentPage is within bounds
              const current = Math.min(Math.max(1, currentPage), totalPages);
              const start = (current - 1) * pageSize;
              const pageItems = categories.slice(start, start + pageSize);
              return pageItems.map((category, idx) => (
                <tr key={category.id}>
                  <td>{start + idx + 1}</td>
                  <td>{category.name}</td>
                  <td>
                    <div className="flex gap-2">
                      <button onClick={() => handleOpenEdit(category)} disabled={loading} className="btn btn-sm btn-outline">Edit</button>
                      <button onClick={() => handleDelete(category.id)} disabled={loading} className="btn btn-sm btn-error">Delete</button>
                    </div>
                  </td>
                </tr>
              ));
            })()}
          </tbody>
        </table>
      </div>
      {/* Pagination controls (max 5 visible page buttons) */}
      <div className="flex items-center gap-2 justify-center mt-4">
        {(() => {
          const totalPages = Math.max(1, Math.ceil(categories.length / pageSize));
          const current = Math.min(Math.max(1, currentPage), totalPages);

          const goTo = (p) => setCurrentPage(p);

          // compute visible page window (max 5)
          let startPage = 1;
          let endPage = Math.min(totalPages, 5);
          if (totalPages > 5) {
            if (current <= 3) {
              startPage = 1;
              endPage = 5;
            } else if (current >= totalPages - 2) {
              startPage = totalPages - 4;
              endPage = totalPages;
            } else {
              startPage = current - 2;
              endPage = current + 2;
            }
          }

          const pages = [];
          for (let p = startPage; p <= endPage; p++) pages.push(p);

          return (
            <div className="btn-group">
              <button className="btn" onClick={() => goTo(Math.max(1, current - 1))} disabled={current === 1}>Prev</button>
              {pages.map((p) => (
                <button key={p} className={`btn ${p === current ? 'btn-active' : ''}`} onClick={() => goTo(p)}>{p}</button>
              ))}
              <button className="btn" onClick={() => goTo(Math.min(totalPages, current + 1))} disabled={current === totalPages}>Next</button>
            </div>
          );
        })()}
      </div>
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
