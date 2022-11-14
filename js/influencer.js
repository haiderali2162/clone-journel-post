let influencers = [...document.querySelectorAll(".influencer-word-container .influencer-pic-desc")];

let infNames = [...document.querySelectorAll(".influencer-names-container .influencer-names-list li")];


influencers.forEach( (el, index) => {
    if(index != 0) el.style.display = "none";
});

infNames.forEach((el,index) => {
    el.addEventListener('click', () => {
        el.classList.add("selection-color");
        influencers[index].style.display = 'flex';
        infNames.forEach((e,i)=>{
            if(i != index){
                e.classList.remove("selection-color");
                influencers[i].style.display = 'none';
            }
        });
    });//end of the el.addEventListener
});

