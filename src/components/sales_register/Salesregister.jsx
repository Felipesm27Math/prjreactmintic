import {useState,React} from "react";
import Menu from "../menu";

import "../sales_register/style.css";

const Salesregister = () => {
    

  return (
    <>
      <Menu />
      <main>
        <section class="formulariocont">
          <div class="row1">
            <div class="colum1">
              <div>
                <h3>New Product</h3>
              </div>
              <form id = "frmProduct">
                <label>Customer ID</label>
                <input type="text" />
                <label>Full Name</label>
                <input type="text" />
                <h3>Product Info</h3>
                <label>Product ID number</label>
                <input type="text" />
                <label>Quantity</label>
                <input type="number" min="1" />
                <label>Price</label>
                <input type="number" min="1" />
                <button type="submit" id ="btnAdd">Add to the cart</button>
              </form>
            </div>
            <div class="colum2">
              <div>
                <h3>Sale</h3>
              </div>
              <form>
                <label>Sale ID</label>
                <input type="text" />
                <label>Date of purchase</label>
                <input type="date" />
                <label>Seller</label>
                <input type="text" />
                <div class = "containerTable">
                <label>Cart</label>
                  <table>
                      <tr>
                          <th>Product</th>
                          <th>SubTotal</th>
                      </tr>
                      <tr>
                          <td>Hello</td>
                          <td>World</td>
                      </tr>
                  </table>
                </div>
                <button type="submit" class="btn-crear">
                  New sale
                </button>
              </form>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default Salesregister;
