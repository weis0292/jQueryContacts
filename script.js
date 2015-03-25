;

var contactTemplate = createContactTemplate();
var contactApi = createContactApi();


$(document).on("pagebeforeshow", "#home-page", function() {
  var contactList = $("#contact-list");
  contactList.html('');

  var readAllCallback = function(data) {
    if (data.status == "success") {
      for (var i = 0; i < data.contacts.length; i++) {
        contactList.append(contactTemplate.createContactListItem(data.contacts[i]));
      }
    }

    $("#contact-list").listview("refresh");
  };


  contactApi.readAllContacts(readAllCallback);
});

$(document).on("click", "#contact-list a", function() {
  //debugger;
  $("#details-page").data("contact-id", $(this).data("contact-id"));
});

$(document).on("pagebeforeshow", "#details-page", function() {
  //console.log($("#details-page").data("contact-id"));
  var readAndDetailsTemplateCallback = function(data) {
    if(data.status == "success") {
      $("#details-page-content").html(
        contactTemplate.createContactDetail(data.contact)
      );
    }
  };
  contactApi.readContact($("#details-page").data("contact-id"), readAndDetailsTemplateCallback);
});

$(document).on("pagebeforeshow", "#edit-page", function() {
  var contactId = $("#edit-page").data("contact-id");
  if(contactId) {
    contactApi.readContact(contactid, function(data) {
      $("#edit-page-contect").html(contactTemplate.createContactEdit(data.contact));
    });
  }
});

$(document).on("click", "#edit-save-button", function() {
  contactApi.createContact({
    "name": $("#edit-name").val(),
    "title": $("#edit-title").val(),
    "email": $("#edit-email").val(),
    "phone": $("#edit-phone").val(),
    "twitterId": $("#edit-twitterId").val()
  },
  function(data){ console.log(data.status); });
});





