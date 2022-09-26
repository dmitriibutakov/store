export const state = () => ({
    shopFilters: ["All Products", "iPhone", "MacBook", "iPad", "Watch", "Accessories"],
    imagesFromProducts: [],
    portionProducts: [],
    products: [],
    about: [],
    cart: [],
    activeFilter: "All Products",
    isShowMenu: false,
    isShowModal: false,
    portionNumber: 0,
    totalSumCart: 0,
    loading: false,
    error: "",
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
            commit('SET_ERROR', error.message)
        }
    },
    async fetchAbout({commit, state}) {
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
            commit('SET_ERROR', error.message)
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
    toggleModal({commit}) {commit("SET_IS_SHOW_MODAL")},
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
            commit('SET_CART_FROM_STORAGE', localStorage.getItem(key))
        }
    },
    setCartToStorage({}, product) {
        localStorage.setItem(`${product.name}`, JSON.stringify(product))
    },
    setQuantityToStorage({}, {name, quantity}) {
        localStorage.setItem(`${name} quantity`, JSON.stringify(quantity))
    },
    deleteCartFromStorage({dispatch}, key) {
        localStorage.removeItem(key)
        dispatch("getCartFromStorage")
    },
}
export const getters = {
    getCart: state => state.cart,
    getIndex: state => state.index,
    getError: state => state.error,
    getAbout: state => state.about,
    getLoading: state => state.loading,
    getProducts: state => state.products,
    getIsShowMenu: state => state.isShowMenu,
    getIsShowModal: state => state.isShowModal,
    getShopFilters: state => state.shopFilters,
    getTotalSumCart: state => state.totalSumCart,
    getActiveFilter: state => state.activeFilter,
    getPortionNumber: state => state.portionNumber,
    getPortionProducts: state => state.portionProducts,
    getImagesFromProducts: state => state.imagesFromProducts,
}
export const mutations = {
    SET_ABOUT: (state, about) => state.about = about,
    SET_ERROR: (state, error) => state.error = error,
    CLEAR_CART: state => {
        state.cart = []
    },
    FETCH_INDEX: state => state.index++,
    SET_LOADING: (state, value) => state.loading = value,
    TOGGLE_MENU: (state) => state.isShowMenu = !state.isShowMenu,
    SET_PRODUCTS: (state, products) => {
        state.products = products
    },
    FETCH_SUM_CART: (state, number) => {
        state.totalSumCart += number
    },
    SET_IS_SHOW_MODAL: state => state.isShowModal = !state.isShowModal,
    SET_ACTIVE_FILTER: (state, filter) => state.activeFilter = filter,
    SET_PORTION_NUMBER: (state, num) => state.portionNumber = num,
    SET_PORTION_PRODUCTS: (state) => {
        state.portionNumber += 4
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
    SET_CART_FROM_STORAGE: (state, prod) => {
        const item = JSON.parse(prod)
        if (typeof (item) === "object" && item !== null) {
            state.cart.push(item)
        }
    },
    SET_IMAGES_FROM_PRODUCTS: (state, image) => state.imagesFromProducts.push(image),
}