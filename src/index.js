const ramensAPI = "http://localhost:3000/ramens"
const ramenMenu = document.querySelector('#ramen-menu')
const ramenDetail = document.querySelector('#ramen-detail')
const ramenImages = document.querySelector('.detail-image')
const names = document.querySelector('.name')
const restaurants = document.querySelector('.restaurant')
const ratings = document.querySelector('#rating-display')
const commentsDisplay = document.querySelector('#comment-display')


fetch(ramensAPI)
.then(resp => resp.json())
.then(displayRamenImages); 
//function displaying images
function displayRamenImages(data){
    data.forEach(addRamenImage)
        
 }
 //adding Ramens to the div
function addRamenImage(ramen){
const ramenImage = document.createElement('img');
ramenImage.src = ramen.image 
ramenMenu.appendChild(ramenImage)
ramenImage.addEventListener('click', ()=>{
    renderRamenDetail(ramen)
})
} 
//displaying the other stuff 
function renderRamenDetail(ramens){
    ramenImages.src = ramens.image;
    restaurants.textContent = ramens.restaurant;
    names.textContent = ramens.name;
    ratings.textContent = ramens.rating;
    commentsDisplay.textContent = ramens.comment;
}
  const form = document.querySelector('#new-ramen').addEventListener('submit', addNewRamenImage);
   

function addNewRamenImage(e){
    e.preventDefault();
     e.target.reset()

  const newRamen ={
    name: e.target["new-name"].value,
    restaurant: e.target["new-restaurant"].value,
    image: e.target["new-image"].value,
    rating: e.target["new-rating"].value,
    comment: e.target["new-comment"].value,
};
addImage(newRamen)
addRamenImage(newRamen)
e.target.reset()
}
//posting the new Ramen image
const addImage = (newRamen) => {
    fetch("http://localhost:3000/ramens", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
             Accept: "application/json"
        },
        body: JSON.stringify(newRamen)
    })
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error.message))
       
}











