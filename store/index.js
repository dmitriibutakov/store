export const state = () => ({
    products: [],
    loading: false,
    error: "",
    imagesFromProducts: [],
    portionProducts: [],
    minPortion: 0,
    maxPortion: 4,
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
    fetchPortionNumbers({commit}) {
        console.log("portion numbers")
        commit('SET_PORTION_PRODUCTS')
    }
}

export const getters = {
    getProducts: state => state.products,
    getLoading: state => state.loading,
    getError: state => state.error,
    getImagesFromProducts: state => state.imagesFromProducts,
    getPortionProducts: state => state.portionProducts
}
export const mutations = {
    SET_PRODUCTS: (state, products) => {
        state.products = products
        console.log("products")
    },
    SET_LOADING: (state, value) => state.loading = value,
    SET_ERROR: (state, error) => state.error = error,
    SET_PORTION_PRODUCTS: (state) => {
        state.portionProducts = state.products.slice(state.minPortion, state.maxPortion)
        state.maxPortion += state.maxPortion
    },
    SET_IMAGES_FROM_PRODUCTS: (state, image) => state.imagesFromProducts.push(image),
}