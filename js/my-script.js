const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morale',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];


 let i = 0;
 let j = 0;


 const itemCollection = [];
 const overlayCollection = [];

 const itemContainer = document.querySelector(".item-container")

 const previousBtn = document.querySelector(".my-button.previous")
 const nextBtn = document.querySelector(".my-button.next")

 const myContainer = document.querySelector(".my-container")

 const wrapper = document.createElement("div")

 const toggler = document.querySelector(".toggler")

 myContainer.append(wrapper)

 wrapper.append(itemContainer)

 wrapper.classList.add("wrapper")

 const thumbnailGallery = document.createElement("div")
 
 thumbnailGallery.classList.add("thumbnail-gallery")
 
 wrapper.append(thumbnailGallery)

 const infoContainer = document.createElement("div")

 const infoContainerTitle = document.createElement("h2")

 const infoContainerText = document.createElement("div")

 infoContainer.append(infoContainerTitle)
 infoContainer.append(infoContainerText)


 for(i;i<images.length;i++){

    let arrayElement = images[i]

    const newItem = document.createElement("img")

    newItem.setAttribute("src", ` ${arrayElement.image} `)
    
    newItem.classList.add("item")
    
    itemContainer.append(newItem)

    const newThumbnailItemContainer = document.createElement("div")

    const newThumbnailItem = document.createElement("img")
    const overlay = document.createElement("div")

    itemCollection.push(newItem)
    overlayCollection.push(overlay)

    newThumbnailItem.setAttribute("src", `${arrayElement.image}`)

    
    thumbnailGallery.append(newThumbnailItemContainer)

    
    newThumbnailItemContainer.append(newThumbnailItem)
    newThumbnailItemContainer.append(overlay)

    overlay.classList.add("overlay")

    newThumbnailItemContainer.classList.add("thumbnail-item-container")
    newThumbnailItemContainer.setAttribute("type","button")

    newThumbnailItem.classList.add("thumbnail-item")

    if(images[i] == images[0]){

        newItem.classList.add("active")

        newThumbnailItemContainer.querySelector(".overlay").classList.add("hide")
        
        infoContainerTitle.innerHTML = images[i].title;
        infoContainerText.innerHTML = images[i].text;

    }
    
    
    
    newThumbnailItemContainer.addEventListener("click",
        function(){
    
        for(let index = 0; index < overlayCollection.length;index++){
    
            if(overlayCollection[index].classList.contains("hide") &&
               itemCollection[index].classList.contains("active")){
                
               
                overlayCollection[index].classList.remove("hide")

                itemCollection[index].classList.remove("active")
                
            }
            
            
            
            
        }
        
        overlay.classList.add("hide")
        newItem.classList.add("active")

        infoContainerTitle.innerHTML = images[itemCollection.indexOf(newItem)].title;
        infoContainerText.innerHTML = images[itemCollection.indexOf(newItem)].text;
    
    }
    )
    
}

infoContainer.classList.add("info-container")
itemContainer.append(infoContainer)









nextBtn.addEventListener("click", function(){
    
  
    for(let index = 0; index < overlayCollection.length;index++){
    
        if(overlayCollection[index].classList.contains("hide") &&
           itemCollection[index].classList.contains("active")){
            
           
            overlayCollection[index].classList.remove("hide")

            itemCollection[index].classList.remove("active")

            j=index

            index = overlayCollection.length
            
        }
        
    }
 
    j++;
    
    if(j > images.length - 1){
        
        j=0;      
        
    }
    
    itemCollection[j].classList.add("active");
    overlayCollection[j].classList.add("hide");

    infoContainerTitle.innerHTML = images[j].title;
    infoContainerText.innerHTML = images[j].text;

  }
  )
 
  previousBtn.addEventListener("click", function(){

    for(let index = 0; index < overlayCollection.length;index++){
    
        if(overlayCollection[index].classList.contains("hide") &&
           itemCollection[index].classList.contains("active")){
            
           
            overlayCollection[index].classList.remove("hide")

            itemCollection[index].classList.remove("active")

            j=index

            index = overlayCollection.length
            
        }
        
        }

        j--

        if(j<0){
            
            j=images.length - 1 
        
        }

        itemCollection[j].classList.add("active");
        overlayCollection[j].classList.add("hide");

        infoContainerTitle.innerHTML = images[j].title;
        infoContainerText.innerHTML = images[j].text;


  }
  )
 

    toggler.addEventListener("click", function(){

        thumbnailGallery.classList.toggle("show")

        nextBtn.classList.toggle("translated")
        previousBtn.classList.toggle("translated")

    }
    )

   