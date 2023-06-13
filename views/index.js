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
    parent.innerHTML = parent.innerHTML + `<li id = "${obj.id}">${obj.candyname} ${obj.description} ${obj.price} ${obj.quantity} <button type="submit" onclick="buy1(${obj.id})">BUY-1</button> <button type="submit" onclick="buy2(${obj.id})">BUY-2</button> <button type="submit" onclick="buy3(${obj.id})">BUY-3</button> </li>`

}

async function buy1(id){
    console.log(id,">>>>>>>>>>>>>>>>>>>>>>id")
    await axios.put(`http://localhost:3000/buy-1/${id}`)

    window.location.reload()
}

async function buy2(id){
    console.log(id,">>>>>>>>>>>>>>>>>>>>>>id")
    await axios.put(`http://localhost:3000/buy-2/${id}`)

    window.location.reload()
}

async function buy3(id){
    console.log(id,">>>>>>>>>>>>>>>>>>>>>>id")
    await axios.put(`http://localhost:3000/buy-3/${id}`)

    window.location.reload()
}


document.addEventListener('DOMContentLoaded', async()=>{
    const candies = await axios.get('http://localhost:3000/get-candies')

    console.log(candies.data.candies[0])

    for (let i=0; i<candies.data.candies.length; i++){
        showonscreen(candies.data.candies[i])
    }
    
})