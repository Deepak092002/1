document.addEventListener("DOMContentLoaded",function(event){

    document.querySelector("button").addEventListener("click",function(){
        var self = this;
        var name = "";

        $ajaxutils.sendGetRequest("\data\name.txt",function(res){
            var message = res.firstName +" "+res.lastName
            if(res.likesChineseFood){
                message+= " likes chinese food"
            }
            else{
                message+=" dont like"
            }
            message+=" and uses";
            message+=res.numberOfDisplays
            message+=" displays for coding. "

            
        document.querySelector("#content").innerHTML = "<h2>Hello "+message+"!</h2>"
    })
        });
})