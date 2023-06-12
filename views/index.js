function addcandy (event) {

    event.preventDefault()

    const candyname = event.target.candyname.value
    const description = event.target.description.value
    const price = event.target.price.value
    const quantity = event.target.quantity.value

    const obj = {
        candyname,
        description,
        price,
        quantity
    }

    // axios.post('/','http://localhost:/3000')

}