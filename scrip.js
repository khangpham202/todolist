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
var id;
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
    if(selectedStatus === 'doing'){
      $(".doing").append($(".in4").val()).attr("class","sortable droppable")
    } 
    if(selectedStatus === 'to do'){
      $(".todo").append($(".in4").val())   
    } 
    if(selectedStatus === 'done'){
      $(".done").append($(".in4").val())   
    } 
});



