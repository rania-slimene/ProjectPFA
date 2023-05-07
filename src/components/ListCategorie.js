import React from 'react'
import axios from 'axios'

export default function ListCategorie() {
    const [categorie,setGategorie]=React.useState([])
    
    useEffect(()=>{
        //console.log(location)
        
            axios.get("http://localhost:5000/categorie").then(res=>{
                //console.log(res.data)
                setGategorie(res.data)

            })
 

    })

    return (
      <>
        {categorie===[]?<>loading...</>:categorie.map(item=>(
        <tr className="hover-table">
         
          <td>{item.nomCategorie}</td>
        </tr>
        ))}
      </>
    );
  
  }

