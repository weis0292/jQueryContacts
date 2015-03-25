var createContactTemplate = function() {
  var createContactListItem = function(contact) {
    return '<li>' +
        '  <a href="#details-page" data-contact-id="'+contact._id+'">' +
        '   <div class="row">' +
        '     <div class="12 columns">' +
        '       <h1>'+contact.name+'</h1>' +
        '     </div>' +
        '   </div>' +
        '   <div class="row">' +
        '     <div class="small-6 columns"><i>'+contact.title+'</i></div>' +
        '     <div class="small-6 columns"><span style="float: right;">'+contact.phone+'</span></div>' +
        '   </div>' +
        ' </a>' +
        '</li>';
  };
  
  var createContactDetail = function(contact) {
    return '<div>Name</div>' +
       '<div><h1>'+contact.name+'</h1></div>' +
       '<div>Title</div>' +
       '<div><h1>'+contact.title+'</h1></div>' +
       '<div>Phone</div>' +
       '<div><h1>'+contact.phone+'</h1></div>' +
       '<div>Email</div>' +
       '<div><h1>'+contact.email+'</h1></div>' +
       '<div>Twitter</div>' +
       '<div><h1>'+contact.twitterId+'</h1></div>';
  }
  
  return {
    createContactListItem: createContactListItem,
    createContactDetail: createContactDetail
  };
};

