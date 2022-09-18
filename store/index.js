export const state = () => ({
    products: [],
    loading: false,
    error: "",
    imagesFromProducts: [],
    portionProducts: [],
    maxPortion: 4,
    activeFilter: "All Products",
    isShowMenu: false,
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
    fetchPortionProducts({commit}) {
        console.log("portion numbers")
        commit('SET_PORTION_PRODUCTS')
    },
    setFilteredProducts({commit, dispatch}, event) {
        commit('SET_ACTIVE_FILTER', event.currentTarget.innerText)
        commit('TOGGLE_MENU', false)
        dispatch('fetchPortionProducts')
    },
    toggleMenu({commit}, menu) {
        commit('TOGGLE_MENU', menu)
    }
}

export const getters = {
    getProducts: state => state.products,
    getLoading: state => state.loading,
    getError: state => state.error,
    getImagesFromProducts: state => state.imagesFromProducts,
    getPortionProducts: state => state.portionProducts,
    getActiveFilter: state => state.activeFilter,
    getIsShowMenu: state => state.isShowMenu
}
export const mutations = {
    SET_PRODUCTS: (state, products) => {
        state.products = products
        console.log("products")
    },
    SET_LOADING: (state, value) => state.loading = value,
    SET_ERROR: (state, error) => state.error = error,
    SET_PORTION_PRODUCTS: (state) => {
        if (state.activeFilter === "All Products" ) {
            state.portionProducts = state.products
            .slice(state.minPortion, state.maxPortion)
        } else {
            state.portionProducts = state.products
            .filter(el => el.name.toLowerCase()
            .includes(state.activeFilter.toLowerCase()))
            .slice(state.minPortion, state.maxPortion)
        }
        state.maxPortion += state.maxPortion
    },
    SET_IMAGES_FROM_PRODUCTS: (state, image) => state.imagesFromProducts.push(image),
    SET_ACTIVE_FILTER: (state, filter) => state.activeFilter = filter,
    TOGGLE_MENU: (state, isShow) => state.isShowMenu = isShow
}