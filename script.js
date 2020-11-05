$(document).ready(function() {
  var list = $(".partners__ul li");
  var numToShow = 4;
  var button = $(".partners__button__a");
  var numInList = list.length;
  var isShowing = true;
  list.hide();
  if (numInList > numToShow) {
    button.show();
  }
  list.slice(0, numToShow).show();
  button.click(function() {
    var showing = list.filter(':visible').length;
    if(isShowing){
      list.slice(showing - 1, showing + numToShow).fadeIn(100,onFadeComplete);
    }
    else{
      list.slice(showing - numToShow, numInList).fadeOut(100,onFadeComplete);
    }
    
    
  });
  
  function onFadeComplete(){
    var nowShowing = list.filter(':visible').length;
   
    if(nowShowing == numInList && isShowing){
        isShowing = false;
        button.text("Show less");  
    }
    else if(isShowing){
        button.text("Show even more");
    }
    
    if(nowShowing == numToShow){
      button.text("Show more");
      isShowing = true;
    }  
    
  }
});

  /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
  function openNav() {
	document.getElementById("mySidenav").style.width = "250px";
	document.getElementById("main").style.marginLeft = "250px";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
	document.getElementById("mySidenav").style.width = "0";
	document.getElementById("main").style.marginLeft = "0";
  }