import React from 'react'

const AddSales = () => {
    return (
        <div className='container mt-5'>
            <h1 className="text-center mb-3">ADD SALE ENTERY</h1>
            <form>

                <div className="mb-3">
                    <label for="productName" className="form-label">Product Name</label>
                    <input type="text" className="form-control" id="productName" />
                </div>
                <div className="mb-3">
                    <label for="productName" className="form-label">Quantity</label>
                    <input type="text" className="form-control" id="productName" />
                </div>
                <div className="mb-3">
                    <label for="productName" className="form-label">Amount</label>
                    <input type="text" className="form-control" id="productName" />
                </div>

                <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="button">Submit</button>
                </div>
            </form>

        </div>
    )
}

export default AddSales