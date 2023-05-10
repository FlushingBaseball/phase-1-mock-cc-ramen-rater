// write your code here

const ramenMenu = document.querySelector(`#ramen-menu`);
//const ramenDetailSpot = document.querySelector(`#ramen-detail`);
const ramenDetailImg = document.querySelector(`.detail-image`);
const ramenDetailName = document.querySelector(`.name`);
const ramenDetailRestaurant = document.querySelector(`.restaurant`);
const ramenComment = document.querySelector(`#comment-display`);
const ramenRating = document.querySelector(`#rating-display`);

const newRamenForm = document.querySelector(`#new-ramen`);

fetch(`http://localhost:3000/ramens`)
.then(resp => resp.json())
.then(ramenList => {
    
    ramenList.forEach(ramen => {
        renderRamen(ramen)
        
    }) //end of forEach
    
    
})




newRamenForm.addEventListener('submit', (event)=>{
    event.preventDefault();

    // const firstName = event.target.firstName.value;
    // const lastName = event.target.lastName.value;

    const newRamenObj ={

            "name": event.target.name.value,
            "restaurant": event.target.restaurant.value,
            "image": event.target.image.value,
            "rating": event.target.rating.value,
            "comment": event.target[`new-comment`].value
          


    };

    renderRamen(newRamenObj)


})





function renderRamen(ramen){
    
    const  ramenImage = document.createElement(`img`)
    ramenImage.src = ramen.image

    
    ramenImage.addEventListener('click',(event)=>{

        ramenDetailImg.src = ramen.image;
        ramenDetailName.textContent = ramen.name;
        ramenDetailRestaurant.textContent = ramen.restaurant;
        ramenComment.textContent = ramen.comment;
        ramenRating.textContent = ramen.rating;

        console.log(`I was clicked`);

    });
    
    ramenMenu.appendChild(ramenImage);
    

}