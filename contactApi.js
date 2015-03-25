var createContactApi = function() {

  var restApiBase = 'http://contacts.tinyapollo.com/contacts';
  var apiKeySuffix = "?key=fingagunz";

  var createContact = function(newContact, callback) {
    debugger;
    $.ajax({
      type: "POST",
      url: restApiBase 
        + '/' 
        + apiKeySuffix 
        + '&name=' + newContact.name
        + '&title=' + newContact.title
        + '&email=' + newContact.email
        + '&phone=' + newContact.phone
        + '&twitterId=' + newContact.twitterId
      ,
      success: callback
    });
    console.log("created contact");
  };

  var readContact = function(contactId, callback) {
    $.ajax({
      type: "GET",
      url: restApiBase + '/' + contactId + apiKeySuffix,
      success: callback
    });
    console.log("read contact " + contactId);
  };

  var readAllContacts = function(callback) {
    $.ajax({
      type: "GET",
      url: restApiBase + apiKeySuffix,
      success: callback
    });
    console.log("read all contacts");
  };

  var updateContact = function(contactId, updateContact) {
    console.log("updated contact " + contactId);
  };

  var deleteContact = function(contactId) {
    console.log("deleted contact " + contactId);
  };

  return {
    createContact: createContact,
    readContact: readContact,
    readAllContacts: readAllContacts,
    updateContact: updateContact,
    deleteContact: deleteContact
  };
};

