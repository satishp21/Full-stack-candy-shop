async function addcandy (event) {

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

    await axios.post('http://localhost:3000/add-candy',obj)

    showonscreen(obj)

}

function showonscreen(obj){

    const parent = document.getElementById('candylist')
    parent.innerHTML = parent.innerHTML + `<li>${obj.candyname} ${obj.description} ${obj.price} ${obj.quantity}</li>`

}

document.addEventListener('DOMContentLoaded', async()=>{
    const candies = await axios.get('http://localhost:3000/get-candies')

    console.log(candies.data.candies[0])

    for (let i=0; i<candies.data.candies.length; i++){
        showonscreen(candies.data.candies[i])
    }
    
})