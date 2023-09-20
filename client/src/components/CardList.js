import { useState, useEffect, memo } from "react";
import Card from "./Card";

import './CardList.css'

function CardList({items, cart, setCart}) {
  const itemsCard = items.map((item) => <Card key={item._id} item={item} setCart={setCart} cart = {cart}/>)
  
  return (
    <div className="CardList">
      <div className="CardList-heading">
        {items[0] ? items[0].category : "Category"}
      </div>
      <div className="CardList-body">{itemsCard}</div>
         
    </div>
    
  )
}

function CardLists({setCart, cart}) {
  const [allItems, setAllItems] = useState(
    () => JSON.parse(localStorage.getItem("items")) || []
  );

  // useEffect(() => {
  //   async function getItems() {
  //     const resData = await(await fetch("http://localhost:3001/api/item/get")).json()
      
      
  //     if (resData) {
  //       console.log(resData.message)
  //     } else {
  //       resData.items = resData.items.map((item) => {
  //         item.quantity = 0;
  //         return item;
  //       })
  //       const grouped = Object.values(resData.items.reduce((acc, item) => {
  //         acc[item.category] = [...(acc[item.category] || []), item];
  //         return acc;
  //       }, {}))
  //       setAllItems(grouped)
  //       localStorage.setItem("items", JSON.stringify(grouped))
  //     } 
  //   }

  //   // Only fetch items from database, if user is visiting for the first time
  //   // if (!localStorage.getItem("items")) {
  //   //   console.log("Items loaded from the database")
  //     getItems()
  //   // }
  // }, [])

  useEffect(() => {
    async function getItems() {
      const cachedItems = JSON.parse(localStorage.getItem("items"));
  
      const resData = await (await fetch("http://localhost:3001/api/item/get")).json();
      
      if (resData.error) {
        console.error(resData.error);
        return;
      }
  
      const newItems = resData.items.map((item) => {
        item.quantity = 0;
        return item;
      });
  
      // Check if new items have been added
      const itemsChanged = !cachedItems || JSON.stringify(newItems) !== JSON.stringify(cachedItems);
  
      if (itemsChanged) {
        const grouped = Object.values(
          newItems.reduce((acc, item) => {
            acc[item.category] = [...(acc[item.category] || []), item];
            return acc;
          }, {})
        );
  
        setAllItems(grouped);
        localStorage.setItem("items", JSON.stringify(grouped));
  
        // Notify the user that new items have been added
        console.log("New items have been added.");
      } else {
        // Items are the same as before, no need to update
        console.log("Items are up to date.");
      }
    }
  
    // Always fetch items from the database
    getItems();
  }, []);
  


  

  const itemsCardList = allItems.map(
    (items) => {
      console.log(items)
      return(<CardList key={items[0]._id} items={items} setCart={setCart} cart={cart}/>)
    }
  ) 

  console.log("CardLists rendered!")
  return(
    <div>
      { itemsCardList }
    </div>
  )
}

export default memo(CardLists);