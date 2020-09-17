import React, {useState,useEffect} from 'react';
import {Route, Switch,Redirect} from 'react-router-dom';
import './App.css';
import axios from "axios";
import ItemsDisplayed from './Components/ItemsDisplayed';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import FoodApp from './Components/FoodApp';
import LoginRegister from './Components/LoginRegister';
import ItemsList from './Components/ItemsList';
import Cart from './Components/Cart'


function App() {
    const[items,setItems]=useState([]);
    const[category,setCategory]=useState("Appetizer");
    const[cartItems,setCartItems]=useState([]);
    const[allItems,setAllItems]=useState([]);
    const[updatedCart,setUpdatedCart]=useState([]);
    
        useEffect(()=>{
        const fetchItems = async () => {
            const response = await axios.get("http://localhost:4000/itemslist");
               const fetchedItems = response.data;
               const filterData=fetchedItems.filter((item)=>item.category===category)
               
            setItems(filterData);
          };
          
          
          fetchItems();
          
        },[category]);
        
        useEffect(()=>{
          const fetchAllItems=async()=>{
            const response = await axios.get("http://localhost:4000/itemslist");
            const fetchedAllItems = response.data;
            //console.log(fetchedAllItems);
            setAllItems(fetchedAllItems);

          }
          const fetchCartItems= async()=>{
          const response = await axios.get("http://localhost:4000/cart");
          const fetchedCartItems = response.data;
         // console.log(fetchedCartItems);
          setCartItems(fetchedCartItems);
          }
          fetchCartItems();
          fetchAllItems();
        },[]); 
          


       const handleChangeCategory=(categ)=>{
            setCategory(categ);
       }


       const handleAddToCart = async (item) => {
        const existingCartItem = cartItems.find(
          (cartItem) => item.id === cartItem.itemId
        );
          
        if (existingCartItem) {
          
          increaseQuantity(existingCartItem);
        } else {
          addNewItem(item);
        }
      };
    
      const increaseQuantity = async (existingCartItem) => {
        const updatedCartItems = cartItems.map((cartItem) => {
          
          return cartItem.itemId === existingCartItem.itemId
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem;
        });
        const updatedCartItem = updatedCartItems.find(
          (cartItem) => cartItem.itemId === existingCartItem.itemId
        );
       console.log(updatedCartItem);
        const response = await axios.put(
          `http://localhost:4000/cart/${updatedCartItem.id}`,
          updatedCartItem
        );
        if (response.status < 400) {
          setCartItems(updatedCartItems);
        }
      };
    
      const addNewItem = async (item) => {
        const cartItem = {
          itemId: item.id,
          quantity: 1,
        };
        const response = await axios.post("http://localhost:4000/cart", cartItem);
        if (response.status < 400) {
          const updatedCartItems = [...cartItems, cartItem];
          setCartItems(updatedCartItems);
        }
      };
      
      const setCartItemsValues = () => {
        const updatedCartNew= cartItems.map((cartItem) => {
          const item = allItems.find((item) => item.id === cartItem.itemId)
          if(item)
          {
          return {
            ...cartItem,
            name: item.name,
            image: item.image,
            Price: item.Price,
          }}
          else
          return null;
        });
        setUpdatedCart(updatedCartNew);
        
      };


  return (
   <div className="container">
     <Header setCartItemsValues={setCartItemsValues}></Header>
     <ItemsDisplayed handleChangeCategory={handleChangeCategory}></ItemsDisplayed>
     <Switch>
     <Route
          path="/appetizers"
          render={() => (<ItemsList items={items} addToCart={handleAddToCart}></ItemsList>)}
      ></Route>
      <Route
          path="/vegetables"
          render={()=>(<ItemsList items={items} addToCart={handleAddToCart}/>)}
      ></Route>
       <Route
          path="/Fish"
          render={()=>(<ItemsList items={items} addToCart={handleAddToCart}/>)}
      ></Route>
      <Route
          path="/Drinks"
          render={()=>(<ItemsList items={items} addToCart={handleAddToCart}/>)}
      ></Route>
      <Route
          path="/Sweets"
          render={()=>(<ItemsList items={items} addToCart={handleAddToCart}/>)}
      ></Route>
      
      <Route
           path="/ContactUs"
          render={()=>(<ContactUs/>)}>
      </Route>
      <Route
           path="/LoginRegister"
          render={()=>(<LoginRegister/>)}>
      </Route>
      <Route
           path="/cart"
          render={()=>(<Cart items={updatedCart}/>)}>
      </Route>
      <Redirect to="/appetizers"></Redirect>
      </Switch>
      <FoodApp></FoodApp>
      <Footer></Footer>
     
   </div>

  );
}

export default App;
