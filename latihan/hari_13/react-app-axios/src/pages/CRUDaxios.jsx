import axios from 'axios';
import { useEffect, useState } from 'react';

function CRUDaxios() {
    const [movies, setMovies] = useState([]);
    const [categories, setCategories] = useState([]);
    const [title, setTitle] = useState('');
    const [year, setYear] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const [editingItem, setEditingItem] = useState(null);
    const [editTitle, setEditTitle] = useState('');
    const [editYear, setEditYear] = useState('');
    const [editCategory, setEditCategory] = useState('');
    const [editErrors, setEditErrors] = useState({});

    useEffect(() => {
        fetchAll();
    }, []);

    const fetchAll = async () => {
        setLoading(true);
        setError(null);
        try {
            const [moviesRes, categoriesRes] = await Promise.all([
                axios.get('http://localhost:3000/api/movies'),
                axios.get('http://localhost:3000/api/categories'),
            ]);
            setMovies(moviesRes.data.data || []);
            setCategories(categoriesRes.data.data || []);
        } catch (err) {
            console.error(err);
            setError('Failed to load data');
        } finally {
            setLoading(false);
        }
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const newMovie = { title, year: Number(year), categoryId: Number(selectedCategory) };
        if (!title || !year || !selectedCategory) {
            alert('Please fill all fields');
            return;
        }

        if (!confirm('Apakah anda yakin ingin menambahkan data ini?')) return;

        try {
            setLoading(true);
            await axios.post('http://localhost:3000/api/movies', newMovie);
            setTitle('');
            setYear('');
            setSelectedCategory('');
            await fetchAll();
        } catch (err) {
            console.error('There was an error creating the movie!', err);
            setError('Failed to create movie');
        } finally {
            setLoading(false);
        }
    };

    const handleOpenEdit = (item) => {
        setEditingItem(item);
        setEditTitle(item.title || '');
        setEditYear(item.year || '');
        setEditCategory(String(item.categoryId || ''));
        setEditErrors({});
    };

    const handleCloseEdit = () => {
        setEditingItem(null);
        setEditTitle('');
        setEditYear('');
        setEditCategory('');
        setEditErrors({});
    };

    const handleSaveEdit = async () => {
        const errors = {};
        if (!editTitle.trim()) errors.title = 'Title is required';
        if (!editYear.toString().trim()) errors.year = 'Year is required';
        if (!editCategory.toString().trim()) errors.categoryId = 'Category is required';
        const parsedYear = Number(editYear);
        const parsedCategory = Number(editCategory);
        if (editYear && isNaN(parsedYear)) errors.year = 'Year must be numeric';
        if (editCategory && isNaN(parsedCategory)) errors.categoryId = 'Category must be numeric';
        setEditErrors(errors);
        if (Object.keys(errors).length) return;

        const updated = { title: editTitle.trim(), year: parsedYear, categoryId: parsedCategory };
        try {
            setLoading(true);
            const res = await axios.put(`http://localhost:3000/api/movies/${editingItem.id}`, updated);
            if (res.data && res.data.data) {
                setMovies((prev) => prev.map((m) => (m.id === editingItem.id ? res.data.data : m)));
            } else {
                await fetchAll();
            }
            handleCloseEdit();
        } catch (err) {
            console.error('There was an error updating the movie!', err);
            setError('Failed to update movie');
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id) => {
        if (!confirm('Are you sure you want to delete this movie?')) return;
        try {
            setLoading(true);
            await axios.delete(`http://localhost:3000/api/movies/${id}`);
            await fetchAll();
        } catch (err) {
            console.error('There was an error deleting the movie!', err);
            setError('Failed to delete movie');
        } finally {
            setLoading(false);
        }
    };

        const handleRefresh = async () => {
            await fetchAll();
        };

        const handleFocusTitle = () => {
            const el = document.getElementById('title');
            if (el) el.focus();
        };

        const handleHelp = () => {
            // open a help page or docs in a new tab; replace with your docs url
            window.open('https://daisyui.com/components/dock/', '_blank');
        };

    return (
        <div className="p-6 max-w-6xl mx-auto">
            <div className="flex items-center justify-between mb-6">
                <h1 className="text-2xl font-bold">CRUD Movies (Axios)</h1>
                {loading && <div className="badge badge-info">Loading...</div>}
            </div>

            {error && (
                <div className="alert alert-error shadow-lg mb-4">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" className="stroke-current flex-shrink-0 h-6 w-6" fill="none" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-12.728 12.728M5.636 5.636l12.728 12.728" />
                        </svg>
                        <span>{error}</span>
                    </div>
                </div>
            )}

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

            <div className="overflow-x-auto">
                <table className="table table-zebra w-full">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>nomor</th>
                            <th>title</th>
                            <th>year</th>
                            <th>category</th>
                            <th>actions</th>
            
                        </tr>
                    </thead>
                    <tbody>
                        {movies.map((item) => (
                            <tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{movies.indexOf(item) + 1}</td>
                                <td>{item.title}</td>
                                <td>{item.year}</td>
                                <td>{categories.find((cat) => cat.id == item.categoryId)?.name}</td>
                                <td>
                                    <div className="flex gap-2">
                                        <button onClick={() => handleOpenEdit(item)} disabled={loading} className="btn btn-sm btn-outline">Edit</button>
                                        <button onClick={() => handleDelete(item.id)} disabled={loading} className="btn btn-sm btn-error">Delete</button>
                                    </div>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>

            {/* Edit modal */}
            {editingItem && (
                <div className={`modal modal-open`}>
                    <div className="modal-box">
                        <h3 className="font-bold text-lg">Edit Movie #{editingItem.id}</h3>
                        <div className="py-4 space-y-3">
                            <div className="form-control">
                                <label className="label"><span className="label-text">Title</span></label>
                                <input className="input input-bordered w-full" value={editTitle} onChange={(e) => setEditTitle(e.target.value)} />
                                {editErrors.title && <span className="text-sm text-error">{editErrors.title}</span>}
                            </div>

                            <div className="form-control">
                                <label className="label"><span className="label-text">Year</span></label>
                                <input className="input input-bordered w-full" value={editYear} onChange={(e) => setEditYear(e.target.value)} />
                                {editErrors.year && <span className="text-sm text-error">{editErrors.year}</span>}
                            </div>

                            <div className="form-control">
                                <label className="label"><span className="label-text">Category</span></label>
                                <select className="w-full" value={editCategory} onChange={(e) => setEditCategory(e.target.value)}>
                                    <option value="">-- choose --</option>
                                    {categories.map((cat) => (
                                        <option key={cat.id} value={cat.id}>{cat.name}</option>
                                    ))}
                                </select>
                                {editErrors.categoryId && <span className="text-sm text-error">{editErrors.categoryId}</span>}
                            </div>
                        </div>
                        <div className="modal-action">
                            <button className="btn btn-success" onClick={handleSaveEdit} disabled={loading}>Save</button>
                            <button className="btn btn-ghost" onClick={handleCloseEdit} disabled={loading}>Cancel</button>
                        </div>
                    </div>
                </div>
            )}
                    {/* Dock (extra small) - bottom-right */}
                    <div className="fixed bottom-6 right-6 z-50">
                        <div className="dock">
                            <div className="tooltip tooltip-left" data-tip="Add (focus title)">
                                <button className="btn btn-primary btn-xs btn-circle dock-item" onClick={handleFocusTitle} aria-label="Add">
                                    +
                                </button>
                            </div>
                            <div className="tooltip tooltip-left" data-tip="Refresh">
                                <button className="btn btn-ghost btn-xs btn-circle dock-item" onClick={handleRefresh} aria-label="Refresh">
                                    ⟳
                                </button>
                            </div>
                            <div className="tooltip tooltip-left" data-tip="Help">
                                <button className="btn btn-info btn-xs btn-circle dock-item" onClick={handleHelp} aria-label="Help">
                                    ?
                                </button>
                            </div>
                        </div>
                    </div>
        </div>
    );
}

export default CRUDaxios;