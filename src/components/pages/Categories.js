import React, { useEffect } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import "../pages/categories.css"
export default function Categories() {
    const location = useLocation();
    const [categories, setCategories] = React.useState([]);
  
    useEffect(() => {
      if (location.pathname === '/categorie') {
        axios.get('http://localhost:5000/categorie/').then(res => {
          const data = res.data.map(category => ({
            nomCategorie: category.nomCategorie,
            image: category.image
          }));
          setCategories(data);
        });
      }
    }, []);
  
    return (
      <div className="categories">
        <h1>LA LISTE DES CATEGORIES</h1>
        {categories.length === 0 ? (
          <div>Loading...</div>
        ) : (
          <div className="categories__container">
            {categories.map(category => (
              <div className="categories__card" key={category.nomCategorie}>
                <h2 className="categories__card-title">{category.nomCategorie}</h2>
                <img
                  src={category.image}
                  alt={category.nomCategorie}
                  style={{width:"460",height:"auto"}}

                  className="categories__card-image"
                />
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }