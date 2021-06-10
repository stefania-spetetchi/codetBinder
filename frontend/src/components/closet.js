import { useSelector, useDispatch } from "react-redux";
import { useEffect, useState } from "react";
import { getItems } from "../actions";
import NavBar from "./navBar";
import Items from "./items";
import AddItem from "./add-item";
import "./style.css";

const ClosetItems = () => {
  const {items} = useSelector((state) => state.items);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getItems());
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getItems]);

  return (
    <div>
      <NavBar />
      <AddItem />
      <div className="closet-container main-layout">
      <Items items={items} /> 
      </div>
      
    </div>
  )
};

export default ClosetItems;