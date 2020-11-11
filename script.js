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

  
  $("#hov").hover(function(){
   $(".hid").css("display", "none");
   //console.log("sfssg");
   
    }, function(){
   $(".hid").css("display", "block");
    //console.log("alerting");
  });


  //Group drop down
  function checkboxDropdown(el) {
    var $el = $(el)
  
    function updateStatus(label, result) {
      if(!result.length) {
        label.html('Select Options');
      }
    };
    
    $el.each(function(i, element) {
      var $list = $(this).find('.dropdown-list'),
        $label = $(this).find('.dropdown-label'),
        $checkAll = $(this).find('.check-all'),
        $inputs = $(this).find('.check'),
        defaultChecked = $(this).find('input[type=checkbox]:checked'),
        result = [];
      
      updateStatus($label, result);
      if(defaultChecked.length) {
        defaultChecked.each(function () {
          result.push($(this).next().text());
          $label.html(result.join(", "));
        });
      }
      
      $label.on('click', ()=> {
        $(this).toggleClass('open');
      });
  
      $checkAll.on('change', function() {
        var checked = $(this).is(':checked');
        var checkedText = $(this).next().text();
        result = [];
        if(checked) {
          result.push(checkedText);
          $label.html(result);
          $inputs.prop('checked', false);
        }else{
          $label.html(result);
        }
          updateStatus($label, result);
      });
  
      $inputs.on('change', function() {
        var checked = $(this).is(':checked');
        var checkedText = $(this).next().text();
        if($checkAll.is(':checked')) {
          result = [];
        }
        if(checked) {
          result.push(checkedText);
          $label.html(result.join(", "));
          $checkAll.prop('checked', false);
        }else{
          let index = result.indexOf(checkedText);
          if (index >= 0) {
            result.splice(index, 1);
          }
          $label.html(result.join(", "));
        }
        updateStatus($label, result);
      });
  
      $(document).on('click touchstart', e => {
        if(!$(e.target).closest($(this)).length) {
          $(this).removeClass('open');
        }
      });
    });
  };
  
  checkboxDropdown('.dropdown');
  
  

  //End of Group drop down


  //authorkeyword
  var textRemove = new Choices(document.getElementById('choices-text-remove-button'), {
    delimiter: ',',
    editItems: true,
    maxItemCount: 5,
    removeItemButton: true,
  });
 var multipleCancelButton = new Choices('#choices-multiple-remove-button', {
   removeItemButton: true,
 });
 var customTemplates = new Choices(document.getElementById('choices-single-custom-templates'), {
         callbackOnCreateTemplates: function(strToEl) {
           var classNames = this.config.classNames;
           var itemSelectText = this.config.itemSelectText;
           return {
             item: function(classNames, data) {
               return strToEl('\
                 <div\
                   class="'+ String(classNames.item) + ' ' + String(data.highlighted ? classNames.highlightedState : classNames.itemSelectable) + '"\
                   data-item\
                   data-id="'+ String(data.id) + '"\
                   data-value="'+ String(data.value) + '"\
                   '+ String(data.active ? 'aria-selected="true"' : '') + '\
                   '+ String(data.disabled ? 'aria-disabled="true"' : '') + '\
                   >\
                   <span style="margin-right:10px;">🎉</span> ' + String(data.label) + '\
                 </div>\
               ');
             },
             choice: function(classNames, data) {
               return strToEl('\
                 <div\
                   class="'+ String(classNames.item) + ' ' + String(classNames.itemChoice) + ' ' + String(data.disabled ? classNames.itemDisabled : classNames.itemSelectable) + '"\
                   data-select-text="'+ String(itemSelectText) + '"\
                   data-choice \
                   '+ String(data.disabled ? 'data-choice-disabled aria-disabled="true"' : 'data-choice-selectable') + '\
                   data-id="'+ String(data.id) + '"\
                   data-value="'+ String(data.value) + '"\
                   '+ String(data.groupId > 0 ? 'role="treeitem"' : 'role="option"') + '\
                   >\
                   <span style="margin-right:10px;">👉🏽</span> ' + String(data.label) + '\
                 </div>\
               ');
             },
           };
         }
       });
//end of authorkeyword 