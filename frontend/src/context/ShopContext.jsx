import React, { createContext } from 'react'; // Import createContext from react
import all_product from '../components/Assets/all_product.js'; 

export const ShopContext = createContext(null);

const  ShopContextProvider = (props)=> {
    const contextValue = { all_product };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
}

export default ShopContextProvider;
