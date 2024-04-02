import { createContext, useState } from "react";

export const FavoritesContext = createContext({
    ids: [],
    addFavorite: (id) => {},
    removeFavorite: (id) => {},
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