const Shorten = (title) => {
    const spletedtitle = title.split(" ")
    const newTitle = `${spletedtitle[0]} ${spletedtitle[1]}`
    return newTitle
}

export {Shorten}