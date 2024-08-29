import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";

import useRemoveFromCart from "../../../hooks/useRemoveFromCart";
import useChangeProductCount from "../../../hooks/useChangeProductCount";

function CartTableProductBox(props) {
  const { mutate: removeFromCart } = useRemoveFromCart();
  const { mutate: changeProductCount } = useChangeProductCount();

  const [productCount, setProductCount] = useState(1);

  const changeProductCountHandler = (event) => {
    setProductCount(event.target.value);
    changeProductCount({
      id: props.id,
      newInfos: {
        productId: props.productId,
        userId: props.userId,
        count: Number(event.target.value),
        price: Number(event.target.value) * props.product.price,
        product: props.product
      },
    });
  };

  useEffect(() => {
    setProductCount(props.count);
  }, [props]);

  return (
    <tr>
      <td>
        <span
          className="cursor-pointer hover:text-primaryBlue transition duration-300"
          onClick={() => removeFromCart(props.id)}
        >
          <DeleteOutlineIcon />
        </span>
      </td>
      <td>
        <Link to={`/product-details/${props.productId}`}>
          <img
            src={props.product.images[0]}
            alt=""
            className="w-28 mx-auto p-2"
          />
        </Link>
      </td>
      <td>
        <Link
          to={`/product-details/${props.productId}`}
          className="text-[15px] hover:text-primaryBlue transition duration-300"
        >
          {props.product.name}
        </Link>
      </td>
      <td>{props.product.price.toLocaleString("fa")} تومان</td>
      <td>
        <div className="flex justify-center items-center gap-2">
          <p>تعداد: </p>
          <input
            type="number"
            className="focus:outline-none border w-14 px-1.5 py-2 text-sm"
            value={productCount}
            onChange={changeProductCountHandler}
            min={1}
            max={props.product.count}
          />
        </div>
      </td>
      <td>{props.price.toLocaleString("fa")} تومان</td>
    </tr>
  );
}

export default CartTableProductBox;
