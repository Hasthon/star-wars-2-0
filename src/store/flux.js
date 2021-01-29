const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            c: 0,
            characters: null,
            planets: null,
            naves: null,
            imagenes: null,
            favorite: [],
        },
        actions: {
            llamarCaractere: async (url) => {
                if (url.includes("page")) {
                    let page = url.split("=")[1];
                    if (page > 1) {
                        setStore({
                            c: parseInt(page) * 10 - 10
                        })
                    } else {
                        setStore({
                            c: 0
                        })
                    }
                } else {
                    setStore({
                        c: 0
                    })
                }
                const response = await fetch(url)
                const data = await response.json();
                setStore({
                    characters: data,
                })
            },

            llamarPlanetas: async (url) => {
                if (url.includes("page")) {
                    let page = url.split("=")[1];
                    if (page > 1) {
                        setStore({
                            c: parseInt(page) * 10 - 10
                        })
                    } else {
                        setStore({
                            c: 0
                        })
                    }
                } else {
                    setStore({
                        c: 0
                    })
                }
                const response = await fetch(url)
                const data = await response.json();
                setStore({
                    planets: data,
                })
            },
            llamarNaves: async (url) => {
                if (url.includes("page")) {
                    let page = url.split("=")[1];
                    if (page > 1) {
                        setStore({
                            c: parseInt(page) * 10 - 10
                        })
                    } else {
                        setStore({
                            c: 0
                        })
                    }
                } else {
                    setStore({
                        c: 0
                    })
                }
                const response = await fetch(url)
                const data = await response.json();
                setStore({
                    naves: data,
                })
            },

            addFavorite: (personaje) => {
                if (getStore().favorite.includes(personaje)) {
                    alert("Ya se encuentra en tus favoritos")
                }
                else {
                    setStore({
                        favorite: getStore().favorite.concat(personaje)
                    })
                    getActions().guardarCorazon()
                }
            },
            deleteFavorite: personaje => {
                setStore({
                    favorite: getStore().favorite.filter(fav => fav !== personaje)
                })
                getActions().guardarCorazon()

            },
            guardarCorazon: () => {
                localStorage.setItem("lista", JSON.stringify(getStore().favorite))

            },
            cargarLista: () => {
                if (localStorage.getItem("lista")) {
                    let data = localStorage.getItem("lista");
                    setStore({ favorite: JSON.parse(data) })
                }
            },
       
        },

    }

}

export default getState;