import axios from "axios";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";


function EditProduct()
{
    // const {register,handleSubmit,reset,setvalue}=useForm();

       const navigate=useNavigate();

         const {id}=useParams();

    let getSingleProduct=()=>{
        axios.get(`http://localhost:3000/products/${id}`).then(response=>{
            for(let props in response.data){
                setValue(props,response.data[props])
            }

        }).catch()
    }

    useEffect(getSingleProduct,[])

    function updateData(data)
    {
        console.log(data);

        axios.put(`http://localhost:3000/products/${data.id}`,data).then(response=>{
           
            navigate("/viewproduct")

        }).catch(err=>{
            console.log(err);
        })
    }
     return (
        
        <div className='container w-50 mt-3'>

            <div className='card p-3'>
                <h1 className='card-title text-center text-muted'>Edit Product</h1>
                <form onSubmit={handleSubmit(updateData)}>
                
                <div className='mb-3'>
                <input type='text' placeholder='Enter id' className='from-control' {...register("id")}></input>
                
                </div>

                <div className='mb-3'>

                <input type='text' placeholder='Enter Product Name' className='from-control' {...register("productName")}></input>
                </div>

                 <div className='mb-3'>
                <input type='text' placeholder='Enter Product Price' className='from-control' {...register("productPrice")}></input>
                </div>
                 
                 <div className='mb-3'>
                <input type='text' placeholder='Product Catagory' className='from-control' {...register("productCategory")}></input>
                </div>

                <div className='mb-3'>
                <input type='checkbox' className='from-control-check '  {...register("isAvailable")}></input> isAvailable
                </div>

                 <div className='mb-3'>
                <button type='Submit' className='btn btn-success w-100' >UPDATE</button>
                </div>
                </form>
            </div>
        </div>

    )
}
export default EditProduct;