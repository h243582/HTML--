var curindex = 0;
var maxlen = document.getElementById("imgss_ul").getElementsByTagName("li").length-1;
var timer =null;
timer =setInterval(change_auto,3000);
function change_auto(){
    if(curindex<maxlen){
        curindex++;
        get_next();
    }else{
        curindex =0;
        get_reset();
    }
}
var width = 1838;
function get_next(){
    var totalimgss_ul = document.getElementById("imgss_ul");
    totalimgss_ul.style.marginLeft = "-"+width*curindex+"px";
    totalimgss_ul.style.transition = 0.5+"s";
}
function get_reset(){
    var totalimgss_ul = document.getElementById("imgss_ul");
    totalimgss_ul.style.marginLeft="0px";
    totalimgss_ul.style.transition = "0s";
}