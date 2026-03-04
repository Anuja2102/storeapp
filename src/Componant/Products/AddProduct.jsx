import React from 'react';
import {useForm} from 'react-hook-form'
import axios from 'axios'

function AddProduct()
{

    const {register, handleSubmit , reset ,formState:{errors}}=useForm();

    function saveData(data)
    {
        console.log(data);

        axios.post("http://localhost:3000/products",data),then(response=>{
            alert("Product Added...");
            reset();
        }).catch(err=>{
            console.log(err);
        })
        

    }
    return (
        
        <div className='container w-50 mt-3'>

            <div className='card p-3'>
                <h1 className='card-title text-center text-muted'>Add Product</h1>
                <form onSubmit={handleSubmit(saveData)}>
                
                <div className='mb-3'>
                <input type='text' placeholder='Enter id' className='from-control' {...register("id",{required:{value:true,message:"ID Is REQUIRED"}})}></input>
                <p className='text-danger bg-info'>{errors.id && errors.id.message}</p>
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
                <button type='Submit' className='btn btn-success w-100' >AddProduct</button>
                </div>
                </form>
            </div>
        </div>

    )
}
export default AddProduct;