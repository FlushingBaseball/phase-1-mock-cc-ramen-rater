// write your code here


// All normal goals are met then pushed
// The first strech goal has been met and not pushed




const ramenMenu = document.querySelector(`#ramen-menu`);
//const ramenDetailSpot = document.querySelector(`#ramen-detail`);
const ramenDetailImg = document.querySelector(`.detail-image`);
const ramenDetailName = document.querySelector(`.name`);
const ramenDetailRestaurant = document.querySelector(`.restaurant`);
const ramenComment = document.querySelector(`#comment-display`);
const ramenRating = document.querySelector(`#rating-display`);

const newRamenForm = document.querySelector(`#new-ramen`);

const editRamenForm = document.querySelector(`#edit-ramen`);

fetch(`http://localhost:3000/ramens`)
.then(resp => resp.json())
.then(ramenList => {
    displayRamen(ramenList[0]) //attempt to display first on launch

    ramenList.forEach(ramen => {
        renderRamen(ramen)
        
    }) //end of forEach
    
    
})




newRamenForm.addEventListener('submit', (event)=>{
    event.preventDefault();

   

    const newRamenObj ={

            "name": event.target.name.value,
            "restaurant": event.target.restaurant.value,
            "image": event.target.image.value,
            "rating": event.target.rating.value,
            "comment": event.target[`new-comment`].value
          


    };

    renderRamen(newRamenObj)

    event.target.reset(); //attempt to clear out form for new Ramen submissions (Seems to work without drawbacks)

})





function displayRamen(ramen){
    ramenDetailImg.src = ramen.image;
    ramenDetailName.textContent = ramen.name;
    ramenDetailRestaurant.textContent = ramen.restaurant;
    ramenComment.textContent = ramen.comment;
    ramenRating.textContent = ramen.rating;

    console.log(`I was clicked`);






        //update a ramen was here but it has some odd errors moving it out fixed it 
         //editRamenForm.addEventListener('submit', (event)=>{
         // event.preventDefault();
         //ramenRating.textContent = event.target[`new-rating`].value
         //ramenComment.textContent = event.target[`new-comment`].value
         // //event.target.reset(); //resets the edit form  also clears other stuff?
        // })
    








}




function renderRamen(ramen){
    
    const  ramenImage = document.createElement(`img`)
    ramenImage.src = ramen.image

    
    ramenImage.addEventListener('click',(event)=>{

            displayRamen(ramen)
        // ramenDetailImg.src = ramen.image;
        // ramenDetailName.textContent = ramen.name;
        // ramenDetailRestaurant.textContent = ramen.restaurant;
        // ramenComment.textContent = ramen.comment;
        // ramenRating.textContent = ramen.rating;

        // console.log(`I was clicked`);

    });
    
    ramenMenu.appendChild(ramenImage);
    

}




//edit Ramen but does not persit and only is changing the text displayed not the objects actual properties

editRamenForm.addEventListener('submit', (event)=>{

    event.preventDefault();

    ramenRating.textContent = event.target[`new-rating`].value
    ramenComment.textContent = event.target[`new-comment`].value


    event.target.reset(); //seems to work


})









