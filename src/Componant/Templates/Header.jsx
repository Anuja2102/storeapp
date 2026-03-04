import {Link} from "react-router-dom"

function Header()
{
    return (
        <>
        <div className="bg-dark d-flex jusify-content-between">
            <h1 className="text-warning">storeapp</h1>
            <div className="m-3">
                <Link className="btn btn-warning me-2" to={'addproduct'}>AddProduct</Link>
                  <Link className="btn btn-warning me-2" to={'viewproduct'}>ViewProduct</Link>
                    <Link className="btn btn-warning me-2" >Logout</Link>
            </div>

        </div>
        </>
    )
}
export default Header;