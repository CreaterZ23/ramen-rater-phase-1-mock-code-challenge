function getRamen () {
    fetch( "http://localhost:3000/ramens")
    .then(resp => resp.json())
    .then(data => data.forEach(ramenItem => renderRamen(ramenItem)))
}

function renderRamen (ramenItem){
    const img = document.createElement('img')
    const div = document.querySelector('div#ramen-menu')
    img.src = ramenItem.image
    div.appendChild(img)
    img.addEventListener('click', (e) => {
    const newImage = document.querySelector(".detail-image")
    newImage.src = ramenItem.image

    const h2 = document.querySelector('h2')
    h2.textContent = ramenItem.name 

    const h3 = document.querySelector('.restaurant')
    h3.textContent = ramenItem.restaurant

    const span = document.querySelector('span')
    span.textContent = ramenItem.rating

    const p = document.querySelectorAll('p')[1]
    p.textContent = ramenItem.comment

    })

}
function createRamenForm (){
const ramenForm = document.querySelector('form#new-ramen')

ramenForm.addEventListener('submit', (e) => {
    e.preventDefault()
    const imageInput = e.target.image.value
        const restaurantInput = e.target.restaurant.value
        const nameInput = e.target.name.value
        const ratingInput = e.target.rating.value
        const commentInput = e.target["new-comment"].value
    // const newComment = document.querySelector()
    const newRamen = {
        name: nameInput,
        restaurant: restaurantInput,
        image: imageInput,
        rating: ratingInput,
        comment: commentInput
    }
    renderRamen(newRamen)
    e.target.reset()

}
)
}

getRamen()
createRamenForm()


















// const newName = document.querySelector('input#new-name')
// newName.textContent = ramenItem.name

// const newRestaurant = document.querySelector('input#new-restaurant')
// newRestaurant.textContent = ramenItem.restaurant

// const newImage = document.querySelector('input#new-image')
// newImage.textContent = ramenItem.image

// const newRating = document.querySelector('input#new-rating')
// newRating.textContent = ramenItem.rating





fetch('http://localhost:3000/ramens')
.then((resp) => resp.json())
.then(ramenDataArray => renderThings(ramenDataArray))
function renderThings(rdArray) {
    rdArray.forEach(ramenBowlObject => {
        const img = document.createElement('img')
        const ramenImgDiv =  document.getElementById("ramen-menu")
        img.src = ramenBowlObject.image
        img.addEventListener('click', () => {
            const bigImgLocale = document.querySelector('.detail-image')
            const namePop = document.querySelector('h2.name')
            const restaurantPop = document.querySelector('h3.restaurant')
            const ratingPop = document.querySelector('span')
            const commentPop = document.querySelectorAll('p')[1]
            bigImgLocale.src = ramenBowlObject.image
            namePop.textContent = ramenBowlObject.name
            restaurantPop.textContent = ramenBowlObject.restaurant
            ratingPop.textContent = ramenBowlObject.rating
            commentPop.textContent = ramenBowlObject.comment
        })
        ramenImgDiv.appendChild(img)
    })
}
function createNewForm() {
    let formThatIHate = document.getElementById('new-ramen')
    formThatIHate.addEventListener('submit', (s) => {
        console.log('i fired')
        s.preventDefault()
        const imageSubmit = s.target.image.value
        const nameInput = s.target.name.value
        const restaurantInput = s.target.restaurant.value
        const ratingInput = s.target["new-rating"].value
        const commentInput = s.target["new-comment"].value
                                    //   ^^ USE BRACKET NOTATION ON NON NORMAL STRINGS!
        const ramenBowlSubmit = {
            name: nameInput,
            restaurant: restaurantInput,
            image: imageSubmit,
            rating: ratingInput,
            comment: commentInput 
        }
        let newBowlArray = [];
        newBowlArray.push(ramenBowlSubmit)
        renderThings(newBowlArray)
        formThatIHate.reset()        
    }
    )
}
createNewForm();








// write your code here
const BASE_URL = "http://localhost:3000/ramens/"

function getRamen() {
    fetch(BASE_URL)
    .then((r) => r.json())
    .then(arr => {
        arr.forEach(ramen => renderRamen(ramen));
    })
}

const menuContainer = document.getElementById("ramen-menu")

function renderRamen(ramen) {
    const menuCard = document.createElement("div")
    menuCard.id = `${ramen.id}`
    menuCard.className = 'ramen-menu-item'

    const menuImage = document.createElement("img")
    menuImage.src = ramen.image
    document.querySelector("#ramen-menu").append(menuImage)

    menuImage.addEventListener("click", e => {
        const menuImgLg = document.querySelector(".detail-image")
        menuImgLg.src = ramen.image 

        const menuName = document.querySelector("h2")
        menuName.textContent = ramen.name

        const menuRestaurant = document.querySelector(".restaurant")
        menuRestaurant.textContent = ramen.restaurant

        const menuRating = document.querySelector("span")
        menuRating.textContent = ramen.rating

        const menuComment = document.querySelector("p#comments")
        menuComment.textContent = ramen.comment
    })

    menuCard.append(menuImage)
    menuContainer.appendChild(menuCard)

}

function createRamenForm(){
    const ramenForm = document.getElementById("new-ramen")
    ramenForm.addEventListener("submit", e => {
        e.preventDefault()
        const imageInput = e.target.image.value
        const restaurantInput = e.target.restaurant.value
        const nameInput = e.target.name.value
        const ratingInput = e.target.rating.value
        const commentInput = e.target["new-comment"].value

        const newRamen = {
            name: nameInput,
            restaurant: restaurantInput,
            image: imageInput,
            rating: ratingInput,
            comment: commentInput
        }
        renderRamen(newRamen)
        e.target.reset()
    })
}

getRamen()
createRamenForm()