import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';

function CRUDaxios() {
    const [dataMovies, setDataMovies] = useState([]);
    const [categoryId, setCategoryId] = useState([]);

    useEffect(() => {
        fetchData();
    }, []);

    
    useEffect(() => {
        fetchCategoriesId();
    }, []);

    

    const fetchCategoriesId = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/categories');
            setCategoryId(response.data.data);
            console.log(response.data.data);
        } catch (error) {
            console.error('There was an error fetching the data!', error);
        }
    };

    const fetchData = async () => {
        try {
            const response = await axios.get('http://localhost:3000/api/movies');
            console.log(response);
            setDataMovies(response.data.data);
        } catch (error) {
            console.error('There was an error fetching the data!', error);
        }
    };

    return (
        <div>
<h1>CRUD Operations with Axios</h1>
<form action="">
<label for="title">Title</label>
<input type="text" id="title" name="title" placeholder="Movie title.." />
<label for="year">Year</label>
  <input type="text" id="year" name="year" placeholder="Release year.." />
  
  <label for="category">Category</label>
  <select id="category" name="category">
   {categoryId.map((cat, index) => (
    <option key={index} value={cat.id}>{cat.name}</option>
   ))}
  </select>
  <input type="submit" value="Submit"/>
</form>
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>year</th>
                        <th>createdAt</th>
                        <th>updatedAt</th>
                        <th>categoryId</th>
                    </tr>
                </thead>
                <tbody>
                    {dataMovies.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.title}</td>
                            <td>{item.year}</td>
                            <td>{item.createdAt}</td>
                            <td>{item.updatedAt}</td>
                            <td>{item.categoryId}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}
export default CRUDaxios;