import React from 'react'

const TopFiveSales = () => {
  return (
    <div className='container mt-5'>
        <h1 className="text-center mb-4">TOP 5 SALES</h1>
        <table class="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Sales Id:</th>
      <th scope="col">Product Name</th>
      <th scope="col">Quantity</th>
      <th scope="col">Sale Amount</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">1</th>
      <td>S1232</td>
      <td>Laptop</td>
      <td>2</td>
      <td>90000</td>
    </tr>
    <tr>
      <th scope="row">2</th>
      <td>S1232</td>
      <td>Computer</td>
      <td>8</td>
      <td>150000</td>
    </tr>
    <tr>
      <th scope="row">3</th>
      <td>S1232</td>
      <td>Refridgerator</td>
      <td>14</td>
      <td>27000</td>
    </tr>
    <tr>
      <th scope="row">4</th>
      <td>S1232</td>
      <td>TV</td>
      <td>21</td>
      <td>30000</td>
    </tr>
    <tr>
      <th scope="row">5</th>
      <td>S1232</td>
      <td>Mobile</td>
      <td>15</td>
      <td>18000</td>
    </tr>
  
   
    
  </tbody>
</table>

    </div>
  )
}

export default TopFiveSales