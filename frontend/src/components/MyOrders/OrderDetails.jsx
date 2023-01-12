import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrderDetails } from "../../redux/actions/order";
import Loader from "../layouts/Loader";

const OrderDetails = () => {
  const params = useParams();

  const { order, loading } = useSelector((state) => state.orders);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getOrderDetails(params.id));
  }, [params.id, dispatch]);

  return (
    <section className="orderDetails">
      {loading === false ? (
        <main>
          <h1>Order Details</h1>
          <div>
            <h1>Shipping</h1>
            <p>
              <b>Address</b>
              {`${order.shippingInfo.hNo} ${order.shippingInfo.city} ${order.shippingInfo.state} ${order.shippingInfo.country} ${order.shippingInfo.pinCode}`}
            </p>
          </div>
          <div>
            <h1>Contact</h1>
            <p>
              <b>Name</b>
              {order.user.name}
            </p>
          </div>

          <div>
            <h1>Status</h1>
            <p>
              <b>Order Status</b>
              {order.orderStatus}
            </p>
            <p>
              <b>Placed At</b>
              {order.createdAt.split("T")[0]}
            </p>
            <p>
              <b>Delivered At</b>
              {order.deliveredAt ? order.deliveredAt.split("T")[0] : "NA"}
            </p>
          </div>

          <div>
            <h1>Payment</h1>
            <p>
              <b>Payment Method</b>
              {order.paymentMethod}
            </p>
          </div>

          <div>
            <h1>Amount</h1>
            <p>
              <b>Items Total</b>
              {order.itemsPrice}
            </p>
            <p>
              <b>Shipping Charges</b>
              {order.shippingCharges}
            </p>
            <p>
              <b>Tax</b>
              {order.taxPrice}
            </p>
            <p>
              <b>Total Amount</b>
              {order.totalAmount}
            </p>
          </div>

          <article>
            <h1>Ordered Items</h1>
            <div>
              <h4>Bamboo Plant</h4>
              <div>
                <span>{order.orderItems.bambooPlant.quantity}</span> x{" "}
                <span>{order.orderItems.bambooPlant.price}</span>
              </div>
            </div>
            <div>
              <h4>Croton Plant</h4>
              <div>
                <span>{order.orderItems.crotonPlant.quantity}</span> x{" "}
                <span>{order.orderItems.crotonPlant.price}</span>
              </div>
            </div>
            <div>
              <h4>Philodendron Plant</h4>
              <div>
                <span>{order.orderItems.philodendronPlant.quantity}</span> x{" "}
                <span>{order.orderItems.philodendronPlant.price}</span>
              </div>
            </div>

            <div>
              <h4
                style={{
                  fontWeight: 800,
                }}
              >
                Sub Total
              </h4>
              <div
                style={{
                  fontWeight: 800,
                }}
              >
                {order.itemsPrice}
              </div>
            </div>
          </article>
        </main>
      ) : (
        <Loader />
      )}
    </section>
  );
};

export default OrderDetails;