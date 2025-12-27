import React, { useContext, useEffect, useRef, useState } from "react";
import { useLoaderData } from "react-router";

import { AuthContext } from "../../Context/AuthContext";
import Product from "./Product";
import Swal from "sweetalert2";

const ProductDetails = () => {
  const { _id: Product } = useLoaderData();
  const [bids, setBids] = useState([]);

  const { user } = useContext(AuthContext);

  const bidModalRef = useRef(null);

  useEffect(() => {
    fetch(`http://localhost:3000/products/bids/${Product}`)
      .then((res) => res.json())
      .then((data) => {
        console.log("bids for the products", data);
        setBids(data);
      });
  }, [Product]);

  const handleBidModalOpen = () => {
    bidModalRef.current.showModal();
  };

  const handleBid = (e) => {
    e.preventDefault();

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const bid = form.bid.value;

    const newBid = {
      Product: Product,
      buyer_name: name,
      buyer_email: email,
      buyer_image: user?.photoURL,
      bid_price: bid,
      status: "pending",
    };

    fetch("http://localhost:3000/bids", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newBid),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          bidModalRef.current.close();

          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Bid Successful",
            showConfirmButton: false,
            timer: 1500,
          });
          // add the new bid to the state
          newBid._id = data.insertedId;
          const newBids = [...bids, newBid];
          newBids.sort((a, b) => (a.bid_price - b.bid_price));
          setBids(newBids);
        }
      });
  };
  return (
    <div>
      {/* product info */}
      <div>
        <div></div>
        <div>
          <button onClick={handleBidModalOpen} className="btn btn-primary">
            Buy Product
          </button>

          {/* Open the modal using document.getElementById('ID').showModal() method */}

          <dialog
            ref={bidModalRef}
            className="modal modal-bottom sm:modal-middle"
          >
            <div className="modal-box">
              <h3 className="font-bold text-lg">Give the best offer</h3>
              <p className="py-4">Offer something seller can not resist</p>
              <form onSubmit={handleBid}>
                <fieldset className="fieldset">
                  {/* name */}
                  <label className="label">Name</label>
                  <input
                    type="text"
                    className="input"
                    readOnly
                    defaultValue={user?.displayName}
                    name="name"
                  />
                  {/* email */}
                  <label className="label">Email</label>
                  <input
                    type="email"
                    className="input"
                    readOnly
                    defaultValue={user?.email}
                    name="email"
                  />

                  {/* bid amount */}
                  <label className="label">Bid</label>
                  <input
                    type="text"
                    className="input"
                    placeholder="Your Bid"
                    name="bid"
                  />
                  <button className="btn btn-neutral mt-4">
                    Place Your Bid
                  </button>
                </fieldset>
              </form>
              <div className="modal-action">
                <form method="dialog">
                  {/* if there is a button in form, it will close the modal */}
                  <button className="btn btn-primary">Close</button>
                </form>
              </div>
            </div>
          </dialog>
        </div>
      </div>
      {/* bids for this products */}
      <div>
        <h3 className="text-3xl">
          Bids for this Product:{" "}
          <span className="text-primary">{bids.length}</span>
        </h3>

        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>SL NO</th>
                <th>Buyer Name</th>
                <th>Buyer Email</th>
                <th>Bid Price</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              {bids.map((bid, index) => (
                <tr>
                  <th>{index + 1}</th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src="https://img.daisyui.com/images/profile/demo/2@94.webp"
                            alt="Avatar Tailwind CSS Component"
                          />
                        </div>
                        <div className="font-bold ">{bid.buyer_name}</div>
                        <div className="text-sm opacity-50">United States</div>
                      </div>
                    </div>
                  </td>
                  <td>{bid.buyer_email}</td>
                  <td>{bid.bid_price}</td>
                  <th>
                    <button className="btn btn-ghost btn-xs">details</button>
                  </th>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
