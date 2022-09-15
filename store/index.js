export const state = () => ({
    products: [],
    loading: false,
    error: "",
})

export const actions = {
    async fetchProducts({commit}) {
        try {
            commit('SET_LOADING', true)
            let result;
            await this.$fire.database
                .ref(`products`)
                .on("value", (e) => {
                    console.log(e.val())
                    commit('SET_PRODUCTS', result)
                    commit('SET_LOADING', false)
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
}
export const mutations = {
    SET_PRODUCTS: (state, products) => state.products = products,
    SET_LOADING: (state, value) => state.isLoading = value,
    SET_ERROR: (state, error) => state.error = error,
}