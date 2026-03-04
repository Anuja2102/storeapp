
import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";


function ViewProduct()
{
    const [products,setProducts]=useState([]);

    let getSingleProduct=()=>{
        axios.get("http://localhost:3000/products").then(response=>{
           setProducts(response.data);
          
        }).catch(err=>console.log(err))
    }

   useEffect(getSingleProduct,[]);

   function deleteProduct(id)
   {
    axios.delete(`http://localhost:3000/products/${id}`).then(response=>{
        if(response.status==200){
            alert("Product deleted...");
            getProducts();

        }
    }).catch(err=>console.log(err))

   }

   

    return (
        <div className='container w-50 mt-3'>
            <table className='table table-bordered'>
                <thead>
                <tr className='bg-dark text-white'>
                    <th>Id</th>
                     <th>ProductName</th>
                      <th>ProductPrice</th>
                       <th>ProductCategory</th>
                        <th>ProductCategory</th>
                         <th>Action</th>
                </tr>
                </thead>
                <tbody>
                {
                    products.map((p,i)=><tr key={i}>
                        <td>{p.id}</td>
                         <td>{p.productName}</td>
                          <td>{p.productPrice}</td>
                           <td>{p.productCategory}</td>
                            <td><input type='checkbox' value={p.isAvailable==true} checked></input></td>
                             <td><button className='btn btn-success' onClick={()=>deleteProduct(p.id)}>Delete</button>
                             <Link className='btn btn-danger' to={'/editproduct/${p.id}'}>Edit </Link></td>
                    </tr>)
                    
                }
                </tbody>
            </table>
        </div>
    )
}
export default ViewProduct;