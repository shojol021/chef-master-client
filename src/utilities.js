import Swal from 'sweetalert2'

const addToLocalStorage = (recipe) => {
    let favourites = [];
    const storedRecipes = JSON.parse(localStorage.getItem('favourite-recipe'))
    if (storedRecipes) {
        const isExist = storedRecipes.find(findRecipe => findRecipe.recipeName === recipe.recipeName)
        if (!isExist) {
            favourites.push(...storedRecipes, recipe)
            localStorage.setItem('favourite-recipe', JSON.stringify(favourites))
        }
        else {
           
            Swal.fire({
                icon: 'error',
                text: 'Already in your favourite!',
              })
        }
    }
    else {
        favourites.push(recipe)
        localStorage.setItem('favourite-recipe', JSON.stringify(favourites))
    }
}

const getFavouriteFromLocalStorage = () => {
    const storedRecipes = JSON.parse(localStorage.getItem('favourite-recipe'))
    return storedRecipes;
}

export { addToLocalStorage, getFavouriteFromLocalStorage }