
  $('#exampleModal').on('show.bs.modal', function (event) {
    var button = $(event.relatedTarget); // Button that triggered the modal
    var title = button.data('title'); // Extract title from data-* attributes
    var img = button.data('img'); // Extract image path from data-* attributes
    var form = button.data('form'); // Extract form HTML from data-* attributes
    var content = button.data('content')
    console.log(content + img)
    var modal = $(this);
    modal.find('.modal-title').text(title); // Update the modal's title
    modal.find('#modal-img').attr('src', img); // Update the modal's image
    modal.find('#modal-form').html(form); // Update the modal's form content
    modal.find('#modal-content').html(content)
  });

  $('#modal-submit').on('click', function() {
    // Handle form submission here
    // For example, you can use AJAX to submit the form data without reloading the page
    var formData = $('#modal-form form').serialize();
    console.log(formData); // For demonstration, you can replace this with an AJAX call
    $('#exampleModal').modal('hide');
  });
  
