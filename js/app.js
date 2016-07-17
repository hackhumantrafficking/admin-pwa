
(function() {
  'use strict';

  var app = {
    isLoading: true,
    visibleCards: {},
    spinner: document.querySelector('.loader'),
    cardTemplate: document.querySelector('.cardTemplate'),
    container: document.querySelector('.main'),
    addDialog: document.querySelector('.dialog-container'),
  };


  /*****************************************************************************
   *
   * Event listeners for UI elements
   *
   ****************************************************************************/

  //document.getElementById('butRefresh').addEventListener('click', function() {
    // Refresh all of the forecasts
  //  app.updateForecasts();
  //});

  document.getElementById('butSubmit').addEventListener('click', function() {
    var phone = document.getElementById('phoneNumber').value;
    var name = document.getElementById('yourName').value;
    var description = document.getElementById('incidentDescription').value;

    if (phone == "" || phone == null || name == "" || name == null || description == "" || description == null){
        document.getElementById('formError').style.display = "block";
    } else { 
      document.getElementById('formError').style.display = "none";
      app.postApiRequest(phone, name, description)
      alert('Thank you, someone from CWIN will respond shortly.');

      document.getElementById('phoneNumber').value = '';
      document.getElementById('yourName').value = '';
      document.getElementById('incidentDescription').value = '';

    }

    
  });

  // Prepare a data for API request
  app.postApiRequest = function(phone, name, description) {
    var url = 'https://my1098helpline.appspot.com/api/v0.1/new';
    // Make the XHR to get the data, then update the card
    var request = new XMLHttpRequest();
    
    var additionalInfo = {
        "phone":phone,
        "name":name,
        "description":description
    };

    //TODO make JSON object that server expects
    var requestObj = { 
      incident_info: {
          "sender_channel":"web",
          "sender_id":"TBD"
         }, 
         "additional_info":JSON.stringify(additionalInfo)
    };


    request.open('POST', url);
    //request.setRequestHeader("Access-Control-Allow-Origin", "*");
    request.setRequestHeader("Content-Type", "text/plain; charset=utf-8");

    request.send(JSON.stringify(requestObj));
  };



})();
