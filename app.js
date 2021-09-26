//-----------------detail product------------------------//
//------su kien click vao thay doi anh----------------//

const bigImg = document.querySelector(".product-content-left-big-img img");
const smallImg = document.querySelectorAll(".product-content-left-small-img img ")

smallImg.forEach(function(imgItem,X){
    imgItem.addEventListener("click",function(){
        bigImg.src = imgItem.src
    })
})

const colourButton1 = document.querySelector(".colour1")
const colourButton2 = document.querySelector(".colour2")
const colourButton3 = document.querySelector(".colour3")
if(colourButton1){
    colourButton1.addEventListener("click",function(){
        document.querySelector(".product-content-left-img2").style.display = "none" 
        document.querySelector(".product-content-left-img3").style.display = "none" 
        document.querySelector(".product-content-left-img1").style.display = "flex"

    })
}
if(colourButton2){
    colourButton2.addEventListener("click",function(){
        document.querySelector(".product-content-left-img2").style.display = "flex" 
        document.querySelector(".product-content-left-img3").style.display = "none" 
        document.querySelector(".product-content-left-img1").style.display = "none"

    })
}
if(colourButton3){
    colourButton3.addEventListener("click",function(){
        document.querySelector(".product-content-left-img2").style.display = "none" 
        document.querySelector(".product-content-left-img3").style.display = "flex" 
        document.querySelector(".product-content-left-img1").style.display = "none"

    })
}

//----------su kien click vao thay doi noi dung---------------//
const mota = document.querySelector(".product-content-right-detail-bottom-title-item-mota");
const chitiet = document.querySelector(".product-content-right-detail-bottom-title-item-chitiet");
if(mota){
    mota.addEventListener("click",function(){
        document.querySelector(".product-content-right-detail-bottom-title-item-mota").style.borderBottom = "1px solid #F0F0F0";
        document.querySelector(".product-content-right-detail-bottom-content-chitiet").style.display = "none" 
        document.querySelector(".product-content-right-detail-bottom-content-mota").style.display = "block"
        document.querySelector(".product-content-right-detail-bottom-title-item-chitiet").style.borderBottom = "1px solid #000";
    })
}
if(chitiet){
    chitiet.addEventListener("click",function(){
        document.querySelector(".product-content-right-detail-bottom-content-chitiet").style.display = "block" 
        document.querySelector(".product-content-right-detail-bottom-content-mota").style.display = "none"
        document.querySelector(".product-content-right-detail-bottom-title-item-chitiet").style.borderBottom = "1px solid #F0F0F0";
        document.querySelector(".product-content-right-detail-bottom-title-item-mota").style.borderBottom = "1px solid #000";
    })
}

//su kien click vao thay doi noi dung//
const huongdan = document.querySelector(".product-content-policy-title-huongdan")
const chinhsach = document.querySelector(".product-content-policy-title-chinhsach")
if(huongdan){
    huongdan.addEventListener("click",function(){
        document.querySelector(".product-content-policy-content-chinhsach").style.display = "none" 
        document.querySelector(".product-content-policy-content-huongdan").style.display = "block"
        document.querySelector(".product-content-policy-title-huongdan").style.borderBottom = "1px solid #F0F0F0";
        document.querySelector(".product-content-policy-title-chinhsach").style.borderBottom = "1px solid #000";
    })
}
if(chinhsach){
    chinhsach.addEventListener("click",function(){
        document.querySelector(".product-content-policy-content-chinhsach").style.display = "block" 
        document.querySelector(".product-content-policy-content-huongdan").style.display = "none"
        document.querySelector(".product-content-policy-title-chinhsach").style.borderBottom = "1px solid #F0F0F0";
        document.querySelector(".product-content-policy-title-huongdan").style.borderBottom = "1px solid #000";
    })
}

//-su kien click thu gon noi dung----//
const buttonDetail = document.querySelector(".product-content-right-detail-top");
if(buttonDetail){
    buttonDetail.addEventListener("click",function(){
        document.querySelector(".product-content-right-detail-bottom").classList.toggle("acticeB")
    })
}



