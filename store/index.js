export const state = () => ({
    products: [], loading: false, error: "", imagesFromProducts: []
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
                    commit('SET_LOADING', false)
                    state.products.forEach(el => {
                        commit('SET_IMAGES_FROM_PRODUCTS', el.img)
                    })
                })
        } catch (error) {
            commit('SET_ERROR', error.message)
        }
    }
}

export const getters = {
    getProducts: state => state.products,
    getLoading: state => state.loading,
    getError: state => state.error,
    getImagesFromProducts: state => state.imagesFromProducts
}
export const mutations = {
    SET_PRODUCTS: (state, products) => state.products = products,
    SET_LOADING: (state, value) => state.loading = value,
    SET_ERROR: (state, error) => state.error = error,
    SET_IMAGES_FROM_PRODUCTS: (state, image) => state.imagesFromProducts.push(image),
}