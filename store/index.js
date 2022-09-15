export const state = () => ({
    products: [state.product, state.product, state.product],
    product: {
        img: "https://mega.nz/file/AkVmQSZA#OR__8bmDK9z4_-1mGAKFug_JHOEYP3aMxdRtv65l-_A",
        name: "phoeeeene",
        about: "some about phone",
        price: 333
    }
})

export const actions = {

}

export const getters = {
    getProducts: state => state.products,
}
export const mutations = {
    SET_PRODUCTS: (state, products) => state.products = products,
}