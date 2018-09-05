$(document).ready( () => {
  $('#git-link').show();
  
  $('#git-img').hover( () => {
    console.log("This is", " it");
    $('#git-link' ).slideToggle();
  });

  // $("[data-toggle=tool]").tooltip(
  //   {html:true}
  // );
});