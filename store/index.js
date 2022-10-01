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
    getCart: state => state.cart,
    getIndex: state => state.index,
    getAbout: state => state.about,
    getLoading: state => state.loading,
    getProducts: state => state.products,
    getIsShowMenu: state => state.isShowMenu,
    getIsShowModal: state => state.isShowModal,
    getShopFilters: state => state.shopFilters,
    getQuantityCart: state => state.quantityCart,
    getTotalSumCart: state => state.totalSumCart,
    getActiveFilter: state => state.activeFilter,
    getPortionNumber: state => state.portionNumber,
    getPortionProducts: state => state.portionProducts,
    getImagesFromProducts: state => state.imagesFromProducts,
}
export const mutations = {
    SET_ABOUT: (state, about) => state.about = about,
    CLEAR_CART: state => {
        state.cart = []
        state.quantityCart = 0
    },
    FETCH_INDEX: state => state.index++,
    SET_LOADING: (state, value) => state.loading = value,
    TOGGLE_MENU: (state) => state.isShowMenu = !state.isShowMenu,
    SET_PRODUCTS: (state, products) => state.products = products,
    FETCH_SUM_CART: (state, number) => state.totalSumCart += number,
    SET_IS_SHOW_MODAL: state => state.isShowModal = !state.isShowModal,
    SET_ACTIVE_FILTER: (state, filter) => state.activeFilter = filter,
    SET_PORTION_NUMBER: (state, num) => state.portionNumber = num,
    SET_QUANTITY_CART: (state, sum) => state.quantityCart += sum,
    SET_PORTION_PRODUCTS: (state) => {
        state.portionNumber += 3
        if (state.activeFilter === "All Products") {
            state.portionProducts = state.products
                .slice(0, state.portionNumber)

        } else {
            state.portionProducts = state.products
                .filter(el => el.filter
                    .includes(state.activeFilter.toLowerCase()))
                .slice(0, state.portionNumber)
        }
    },
    SET_CART_FROM_STORAGE: (state, product) => state.cart.push(product),
    SET_IMAGES_FROM_PRODUCTS: (state, image) => state.imagesFromProducts.push(image),

}