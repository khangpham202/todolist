$( function() {
    $( ".sortable" ).sortable({
      revert: true
    });
    //------------------------------------------------
    $( ".draggable" ).draggable({
      connectToSortable: ".sortable",
      // helper: "clone",
      revert: "invalid"
    });
  
    $( ".droppable" ).droppable({
      accept: ".draggable",
      classes: {
        "ui-droppable-active": "ui-state-active",
        "ui-droppable-hover": "ui-state-hover"
      },
      drop: function( event, ui ) {
        $( this )
          .addClass( "ui-state-highlight" )
          .find( "p" )
            .html( "Dropped!" );
      }
    });
  
    $( "ul, li" ).disableSelection();
  
  });
  var id
  $("li").dblclick(function(){
    modal.style.display = "block";
    $(".update").val($(this).html());
    id = $(this).attr("id"); 
  });
  $(".confirm").click(function(){
    modal.style.display = "none";
    $(`#${id}`).html($(".update").val());
  }); 
  $(".delete").click(function(){
    $(this).parent().remove();
  })
  $(".add-work").click(function(){ 
      var selectedStatus = $('.Status').val();
      var val = $(".in4").val();
      var html_insert = '<li class="ui-state-default draggable" id="doing< sửa id ở đây >">'+val+' <button class="delete"><i class="far fa-trash-alt"></i></button></li>';
      if(selectedStatus === 'to do')
        html_insert = '<li class="ui-state-default draggable" id="todo< sửa id ở đây >">'+val+' <button class="delete"><i class="far fa-trash-alt"></i></button></li>';
      
      if(selectedStatus === 'done')
        html_insert = '<li class="ui-state-default draggable" id="done< sửa id ở đây >">'+val+' <button class="delete"><i class="far fa-trash-alt"></i></button></li>';
  
      
      if(selectedStatus === 'doing'){
        $(".doing").append(html_insert)
      } 
      if(selectedStatus === 'to do'){
        $(".todo").append(html_insert)
      } 
      if(selectedStatus === 'done'){
        $(".done").append(html_insert) 
      } 
  });
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the button that opens the modal
  var btn = document.getElementById("myBtn");
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks the button, open the modal 
    
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() {
    modal.style.display = "none";
  }
  
  // When the user clicks anywhere outside of the modal, close it
  window.onclick = function(event) {
    if (event.target == modal) {
      modal.style.display = "none";
    }
  }
  
  