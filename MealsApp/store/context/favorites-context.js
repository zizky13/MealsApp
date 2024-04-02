import { createContext, useState } from "react";

export const FavoritesContext = createContext({ //create a context for the favorites
    ids: [], //initialize the ids to an empty array (default value)
    addFavorite: (id) => {}, //initialize the addFavorite function to an empty function (default value)
    removeFavorite: (id) => {}, //initialize the removeFavorite function to an empty function  (default value)
});

export default FavoritesContextProvider = ({ children }) => {
    const [favoriteMealIds, setFavoriteMealIds] = useState([]);

    function addFavorite(id){
        setFavoriteMealIds((current) => [...current, id]);
    }

    function removeFavorite(id){
        setFavoriteMealIds((current) => {
            return current.filter((mealId) => mealId !== id);
        });
    }
    

    const value ={
        ids: favoriteMealIds,
        addFavorite: addFavorite,
        removeFavorite: removeFavorite,
    }

    return <FavoritesContext.Provider value={value}>{children}</FavoritesContext.Provider>
}