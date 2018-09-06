// When the #make-new button is clicked
$(document).on('click', '#make-new', () => {
  // AJAX POST call to the submit route on the server
  // This will take the data from the form and send it to the server
  $.ajax({
    type: 'POST',
    dataType: 'json',
    url: '/submit',
    data: {
      title: $('#email').val(),
      note: $('#name').val(),
      note: $('#message').val(),
      created: Date.now()
    }
  }).then(data => {
    console.log(data)
    $('#message').val('')
    $('#email').val('')
    $('#name').val('')
  })
})
