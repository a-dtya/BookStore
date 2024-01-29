import React, { useState } from 'react'
import Order from './order'
import { createContext } from 'react';

export const orderActivePageCntxt=createContext()
function OrderRoute() {

    const [orderActivePage,setOrderActivePage]=useState('nav-delivery')
  
    function updatePage(activePage){
      setOrderActivePage(activePage)
    }

    return <>
    
    <orderActivePageCntxt.Provider value={{orderActivePage,updatePage}}>
    
     <Order/>

     </orderActivePageCntxt.Provider>
    
    </>
}

export default OrderRoute;