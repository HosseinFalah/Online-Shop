const Shorten = (title) => {
    const spletedtitle = title.split(" ")
    const newTitle = `${spletedtitle[0]} ${spletedtitle[1]}`
    return newTitle
}

const checkInCart = (state, id) => {
    const result = !!state.seletedItems.find(item => item.id === id)
    return result
}

const quantityCount = (state, id) => {
    const QuantityFind = state.seletedItems.findIndex(item => item.id === id)
    if (QuantityFind === -1) {
        return false
    } else {
        return state.seletedItems[QuantityFind].quantity
    }
}

export {Shorten, checkInCart, quantityCount}