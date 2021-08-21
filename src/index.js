function fetchRamen (){
    const ramenUrl = "http://localhost:3000/ramens"

    fetch(ramenUrl)
        .then(resp => resp.json())
        .then(ramenArr => ramenArr.forEach(ramenObj => renderRamen(ramenObj)) )
}

function renderRamen(ramenObj){
    const ramenImg = document.createElement('img')
    ramenImg.src = ramenObj.image
    document.querySelector('div#ramen-menu').appendChild(ramenImg)
    
    ramenImg.addEventListener('click', (e)=> {
        const ramenDetailDiv = document.querySelector('div#ramen-detail')
        
        const ratingSpan = document.querySelector("body > p:nth-child(5) > span")
        ratingSpan.textContent = ramenObj.rating
        const pText = document.querySelector("body > p:nth-child(7)")
        pText.textContent = ramenObj.comment
        const centerRamenImg = document.querySelector('img.detail-image')
        centerRamenImg.src = ramenObj.image
        centerRamenImg.alt = ramenObj.name
        const h2CenterRamen = document.querySelector('h2.name')
        h2CenterRamen.textContent = ramenObj.name
        const h3CenterRamen = document.querySelector("h3.restaurant")
        h3CenterRamen.textContent = ramenObj.restaurant
        
        ramenDetailDiv.append(centerRamenImg, h2CenterRamen, h3CenterRamen)

    })
}
function ramenForm(){
    const ramenFormContainer = document.querySelector('form#new-ramen')
    
    ramenFormContainer.addEventListener('submit', e=>{
        e.preventDefault()

        
        const newRamenObj = {
            name: e.target.name.value,
            restaurant: e.target.restaurant.value,
            image: e.target.image.value,
            rating: e.target.rating.value,
            comment: e.target['new-comment'].value
        }
        renderRamen(newRamenObj)
        ramenFormContainer.reset()
    })
}

function init(){
    fetchRamen()
    ramenForm()
}

init() // never forget to call the initial function!!!