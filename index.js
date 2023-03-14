const mockup = document.querySelector(`.mockup-container`)

const mockUpContainer = document.getElementById(`mockup-container`)
mockUpContainer.innerHTML+=`
<div class="mockup-img mockup-img-0 d-none">   
</div>`

const mockupImg = document.querySelector(`.mockup-img`)


let toggle = false



// MOCKUP SCROLL IMG



document.addEventListener("scroll", function(){
    console.log(window.pageYOffset);
    if ((window.pageYOffset<2000)&&(toggle===true)){
        mockUpContainer.innerHTML=`
        <div class="mockup-img mockup-img-0">   
        </div>`
    }
    if ((window.pageYOffset>=2000)&&(window.pageYOffset<3000)&&(toggle===true)){
        mockUpContainer.innerHTML=`
        <div class="mockup-img mockup-img-25">   
        </div>`
    }
    if ((window.pageYOffset>=4000)&&(toggle===true)){
        mockUpContainer.innerHTML=`
        <div class="mockup-img mockup-img-50">   
        </div>`
    }
})

// MOCKUP BUTTON

mockup.addEventListener("click", ()=>{

    spin ()

    if(toggle === false){
        mockUpContainer.innerHTML=`
        <div class="mockup-img mockup-img-0">   
        </div>`
        toggle = true
        console.log(toggle);
    } else {
        mockUpContainer.innerHTML=`
        <div class="mockup-img mockup-img-0 d-none">   
        </div>` 
        toggle = false
        console.log(toggle);
    }
})

function spin (){
    mockup.classList.add("spin")
    setTimeout(()=>{
        mockup.classList.remove("spin")
    },400)
}