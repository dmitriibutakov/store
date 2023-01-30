import axios from "axios";

export const state = () => ({
    shopFilters: ["All Products", "iPhone", "MacBook", "iPad", "Watch", "Accessories"],
    imagesFromProducts: [],
    portionProducts: [],
    quantityCart: 0,
    products: [],
    about: [],
    cart: [],
    activeFilter: "All Products",
    isShowMenu: false,
    isShowModal: false,
    portionNumber: 0,
    totalSumCart: 0,
    isPaying: false,
    loading: false,
    index: 999
})
export const actions = {
    async fetchProducts({commit, state}) {
        try {
            commit('SET_LOADING', true)
            let result;
            await this.$fire.database
                .ref(`products`)
                .on("value", (e) => {
                    result = e.val()
                    commit('SET_PRODUCTS', result)
                    commit('SET_PORTION_PRODUCTS')
                    commit('SET_LOADING', false)
                    state.products.forEach(el => {
                        commit('SET_IMAGES_FROM_PRODUCTS', el.img)
                    })
                })
        } catch (error) {
            commit(error)
        }
    },
    async fetchAbout({commit}) {
        try {
            commit('SET_LOADING', true)
            let result;
            await this.$fire.database
                .ref(`about`)
                .on("value", (e) => {
                    result = e.val()
                    commit('SET_ABOUT', result)
                    commit('SET_LOADING', false)
                })
        } catch (error) {
            console.log(error)
        }
    },
    async contactUs({commit, dispatch}, values) {
        commit('SET_LOADING', true)
        try {
            await axios.post('https://server-istore.herokuapp.com/contactUs', {
                ...values
            })
        } catch (e) {
            console.log(e)
        } finally {
            commit('SET_LOADING', false)
            dispatch("toggleModal")
        }
    },
    async sendPaying({commit}) {
        try {
            commit('SET_LOADING', true)
        } catch (e) {
            console.log(e)
        } finally {
            setTimeout(() => {
                commit('SET_LOADING', false)
                commit('SET_IS_PAYING')
            }, 3000)
        }
    },

    fetchPortionProducts({commit}) {
        commit('SET_PORTION_PRODUCTS')
    },
    setFilteredProducts({commit, dispatch}, event) {
        commit('SET_ACTIVE_FILTER', event.currentTarget.innerText)
        commit('TOGGLE_MENU', false)
        dispatch('fetchPortionProducts')
    },
    toggleMenu({commit}) {
        commit('TOGGLE_MENU')
        commit('SET_PORTION_NUMBER', 0)
    },
    refreshCart({commit}) {
        commit("FETCH_INDEX")
    },
    toggleModal({commit}) {
        commit("SET_IS_SHOW_MODAL")
    },
    routeToShop({commit, dispatch}, name) {
        commit('SET_ACTIVE_FILTER', name)
        dispatch('fetchPortionProducts')
    },
    fetchSumCart({commit, state}, cart) {
        commit("FETCH_SUM_CART", -state.totalSumCart)
        cart.map((product) => {
            let quantity = +localStorage.getItem(`${product.name} quantity`) || 1
            commit("FETCH_SUM_CART", product.price * quantity)
        })
    },
    getCartFromStorage({commit}) {
        commit('CLEAR_CART')
        for (let key in localStorage) {
            if (!localStorage.hasOwnProperty(key)) {
                continue;
            }
            let product = JSON.parse(localStorage.getItem(key))
            if (typeof product === "object" && product !== null) {
                let productQuantity = +localStorage.getItem(`${key} quantity`) || 1
                commit('SET_QUANTITY_CART', productQuantity)
                commit('SET_CART_FROM_STORAGE', product)
            }
        }
    },
    setCartToStorage({dispatch}, product) {
        localStorage.setItem(`${product.name}`, JSON.stringify(product))
        dispatch("getCartFromStorage")
    },
    setQuantityToStorage({dispatch}, {name, quantity}) {
        localStorage.setItem(`${name} quantity`, JSON.stringify(quantity))
        dispatch("getCartFromStorage")
    },
    deleteCartFromStorage({dispatch}, key) {
        localStorage.removeItem(key)
        dispatch("getCartFromStorage")
    },
}
export const getters = {
    getCart: s => s.cart,
    getIndex: s => s.index,
    getAbout: s => s.about,
    getLoading: s => s.loading,
    getIsPaying: s => s.isPaying,
    getProducts: s => s.products,
    getIsShowMenu: s => s.isShowMenu,
    getIsShowModal: s => s.isShowModal,
    getShopFilters: s => s.shopFilters,
    getQuantityCart: s => s.quantityCart,
    getTotalSumCart: s => s.totalSumCart,
    getActiveFilter: s => s.activeFilter,
    getPortionNumber: s => s.portionNumber,
    getPortionProducts: s => s.portionProducts,
    getImagesFromProducts: s => s.imagesFromProducts,
}
export const mutations = {
    SET_ABOUT: (s, about) => s.about = about,
    CLEAR_CART: s => {
        s.cart = []
        s.quantityCart = 0
    },
    FETCH_INDEX: s => s.index++,
    SET_IS_PAYING: (s) => s.isPaying = !s.isPaying,
    SET_LOADING: (s, value) => state.loading = value,
    TOGGLE_MENU: (s) => s.isShowMenu = !s.isShowMenu,
    SET_PRODUCTS: (s, products) => s.products = products,
    FETCH_SUM_CART: (s, number) => s.totalSumCart += number,
    SET_IS_SHOW_MODAL: s => s.isShowModal = !s.isShowModal,
    SET_ACTIVE_FILTER: (s, filter) => s.activeFilter = filter,
    SET_PORTION_NUMBER: (s, num) => s.portionNumber = num,
    SET_QUANTITY_CART: (s, sum) => s.quantityCart += sum,
    SET_PORTION_PRODUCTS: (s) => {
        s.portionNumber += 3
        if (s.activeFilter === "All Products") {
            s.portionProducts = s.products
                .slice(0, s.portionNumber)

        } else {
            s.portionProducts = s.products
                .filter(el => el.filter
                    .includes(s.activeFilter.toLowerCase()))
                .slice(0, s.portionNumber)
        }
    },
    SET_CART_FROM_STORAGE: (s, product) => s.cart.push(product),
    SET_IMAGES_FROM_PRODUCTS: (s, image) => s.imagesFromProducts.push(image),
}
