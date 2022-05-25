(function(global){
    var ajaxutils = {}

    function getRequestObject(){
        if(window.XMLHttpRequest){
            return (new XMLHttpRequest())
        }
        else if(window.ActiveXObject){
            return (new ActiveXObject("Microsoft.XMLHTTp"))
        }
        else{
            global.alert("Ajax is not supported")
            return(null)
        }
    }
    ajaxutils.sendGetRequest = function(requestURL,responsehandler,isJasonResponse){
        var request = getRequestObject();
        request.onreadystatechange = function(){
            handleresponse(request,responsehandler,isJasonResponse)
        };
        request.open("GET",requestURL,true)
        request.send(null)
    };

    function handleresponse(request,responsehandler){
        if((request.readystate==4) &&
        (request.status==200)){
           responsehandler(request)
        }
    }
    global.$ajaxutils = ajaxutils;

})(window)