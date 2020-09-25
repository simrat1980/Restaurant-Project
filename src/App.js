import React, {useState,useEffect} from 'react';
import {Route, BrowserRouter,Redirect} from 'react-router-dom';

import './App.css';
import axios from "axios";
import ItemsDisplayed from './Components/ItemsDisplayed';
import Header from './Components/Header';
import Footer from './Components/Footer';
import ContactUs from './Components/ContactUs';
import FoodApp from './Components/FoodApp';
import LoginRegister from './Components/LoginRegister';
import ItemsList from './Components/ItemsList';
import Cart from './Components/Cart';
import MainImage from './Components/MainImage';
import BuyNow from './Components/BuyNow';
import Customer from './Components/Customer';
import SectionFeatures from './Components/SectionFeatures';
import MenuItems from './Components/MenuItems';



function App() {
    const[items,setItems]=useState([]);
    const[category,setCategory]=useState("Appetizer");
    const[cartItems,setCartItems]=useState([]);
    const[allItems,setAllItems]=useState([]);
    const[updatedCart,setUpdatedCart]=useState([]);
    const[product,setProduct]=useState({});
    const[cartQuantity,setCartQuantity]=useState(0);
    const[subTotal,setSubTotal]=useState(0);
    
    const buyNow=(item)=>{
      setProduct(item);
    }
    
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
        console.log(cartQuantity);
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
            ? { ...cartItem, quantity: cartQuantity }
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
          quantity:cartQuantity,
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
     <BrowserRouter>
        <Route
        exact={true}
        path="/"
        render={()=>(
          <div>
            <Header setCartItemsValues={setCartItemsValues} changeCategory={handleChangeCategory}></Header>
            <MainImage></MainImage>
            <ItemsDisplayed handleChangeCategory={handleChangeCategory}></ItemsDisplayed> 
            <ItemsList items={items}  buyNow={buyNow}></ItemsList>
            <Customer/>
            <SectionFeatures/>
            <FoodApp/>
            <Footer/> 
          </div>
        )}/>
       <Route
          exact={true}
          path="/ContactUs" 
          render={()=>(
            <div>
              <Header setCartItemsValues={setCartItemsValues} changeCategory={handleChangeCategory}></Header>
              <ContactUs></ContactUs>
              <FoodApp/>
              <Footer/>
            </div>
          )}/>
          <Route
          path="/LoginRegister" 
          render={()=>(
            <div>
              <Header setCartItemsValues={setCartItemsValues} changeCategory={handleChangeCategory}></Header>
              <LoginRegister/>
              <FoodApp/>
              <Footer/>
            </div>
          )}/>
      <Route
          path="/cart" 
          render={()=>(
            <div>
              <Header setCartItemsValues={setCartItemsValues} changeCategory={handleChangeCategory}></Header>
              <Cart items={updatedCart} subTotal={subTotal} setSubTotal={setSubTotal} />
              <FoodApp/>
              <Footer/>
            </div>
          )}/>
          <Route
          path="/product" 
          render={()=>(
            <div>
              <Header setCartItemsValues={setCartItemsValues} changeCategory={handleChangeCategory}></Header>
              <BuyNow item={product}  addToCart={handleAddToCart} setCartQuantity={setCartQuantity}/>
              <FoodApp/>
              <Footer/>
            </div>
          )}/>
          <Route
          path="/product-category" 
          render={()=>(
            <div>
              <Header setCartItemsValues={setCartItemsValues} changeCategory={handleChangeCategory}></Header>
              <MenuItems items={items}  buyNow={buyNow} category={category}></MenuItems>
              <FoodApp/>
              <Footer/>
            </div>
          )}/>
          <Redirect to="/"></Redirect>
    </BrowserRouter>
    
    
     
   </div>

  );
}

export default App;
