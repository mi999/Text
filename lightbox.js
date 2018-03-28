"use strict";
    $("figure").click(function () {
        $("figure").css("opacity","0");
        $(this).css("opacity","1");
        $("#lightbox").addClass("newbox");
        $("figure").addClass("imgbox");
        $("img").addClass("imgsize");
        $("body").css("background-color","rgba(169, 169, 169, 0.53)");
        $("figure").css("margin","0");
        $(".icon").css("opacity","1");
        $("#lightbox").append()
    });
var a = -1;
$(".leftMove").click(function () {
    var imglist=$("figure");
    var lengh=imglist.length-1;
   $.each(imglist,function (i) {
       $(imglist[i]).css("opacity","0");
   });
    a++;

    $(imglist[a]).css("opacity","1");
    if(a==lengh){
        a=-1;
    }
});
var j=6;
$(".rightMove").click(function () {
    var imglist=$("figure");
    var lengh=imglist.length;
    $.each(imglist,function (i) {
        $(imglist[i]).css("opacity","0");
    });
    j--;
    console.log(j);
    console.log(imglist);
    $(imglist[j]).css("opacity","1");
    if(j==0){
        j=6;
    }
});
$(".close").click(function () {
    location.reload();
});
