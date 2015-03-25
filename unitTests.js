var unitTests = function() {

  /************** api **************/
  var printContact = function(contact) {
    console.log("START: printing contact");
    console.log(contact.name);
    console.log(contact.title);
    console.log(contact.email);
    console.log(contact.phone);
    console.log(contact.twitterId);
    console.log(contact._id);
    console.log("END: printing contact");
  }

  var contactApi = createContactApi();
  //  contactApi.createContact("a contact", null);
  //  contactApi.readAllContacts();
  //  contactApi.updateContact(2);
  //  contactApi.deleteContact(3);

  var readCallback = function(data) {
    console.log("Got data:" + data);
    printContact(data.contact);
  };
  //  contactApi.readContact('54f5537a3acaec894c001932', readCallback);

  var readAllCallback = function(data) {
    if (data.status == "success") {
      for (var i = 0; i < data.contacts.length; i++) {
        printContact(data.contacts[i]);
      }
      console.log("success");
    }
  };
  //contactApi.readAllContacts(readAllCallback);

  var createCallback = function(data) {
    if (data.status == "success") {
      printContact(data.contact);
    }
  };
  contactApi.createContact({
      "name": "aName",
      "title": "aTitle",
      "email": "aEmail@email.net",
      "phone": "6667778899",
      "twitterId": "@aTwitter"
    },
    createCallback
    );

  /***************** template *****************/

  var contactTemplate = createContactTemplate();

  var readAndListItemTemplateCallback = function(data) {
    if (data.status == "success") {
      console.log(
        contactTemplate.createContactListItem(data.contact)
      );
    }
  };
  //contactApi.readContact('54f5537a3acaec894c001932', readAndListItemTemplateCallback);

  var readAndDetailsTemplateCallback = function(data) {
    if (data.status == "success") {
      console.log(
        contactTemplate.createContactDetail(data.contact)
      );
    }
  };
  //contactApi.readContact('54f5537a3acaec894c001932', readAndDetailsTemplateCallback);

};

unitTests();