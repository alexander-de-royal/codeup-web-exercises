"use strict";

$(document).ready(function(){
    let codeOrder = ["ArrowUp", "ArrowUp", "ArrowDown", "ArrowDown", "ArrowLeft", "ArrowRight", "ArrowLeft", "ArrowRight", "b", "a", "Enter"];
    let codeIndex = 0;

    $(document).on("keydown", function(event){
        let key = event.key;
        console.log(event.key);
        if(key === codeOrder[codeIndex]){
            codeIndex++;
            if(codeIndex === codeOrder.length){
                alert("You have added 30 lives!");

            } else {
                codeIndex = 0;
            }
        }
    })
})
