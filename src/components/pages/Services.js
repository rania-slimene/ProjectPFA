import React, { useEffect } from 'react';
import '../../App.css';
import axios from 'axios';
import { useLocation, useParams } from 'react-router-dom';

export default function Services() {
  const location = useLocation();
  const [services, setServices] = React.useState([]);
  const { id } = useParams();

  useEffect(() => {
    if (location.pathname.includes('/services/')) {
      axios.get(`http://localhost:5000/categorie/${id}/services`).then(res => {
        setServices(res.data);
      });
    }
  }, [location.pathname, id]);

  return (
    <>
      {services.length === 0 ? (
        <>loading...</>
      ) : (
        services.map(item => (
          <tr className="hover-table" key={item._id}>
            <td>{item.nomCategorie}</td>
            <td>{item.nomService}</td>
            <td>{item.description}</td>
          </tr>
        ))
      )}
    </>
  );
}