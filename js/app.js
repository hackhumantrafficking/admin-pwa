
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
    app.postApiRequest(phone, name, description)
  });

  // Prepare a data for API request
  app.postApiRequest = function(phone, name, description) {
    var url = 'https://sampleapi.com/api/v0.1/new';
    // Make the XHR to get the data, then update the card
    var request = new XMLHttpRequest();
    
    var additionalInfo = {
        "phone":phone,
        "name":name,
        "description":description
    };

    //TODO make JSON object that server expects
    var requestObj = { 
      reportInfo: {
          "channel":"web",
          "id":"TBD",
           "location_info":"N/A"
         }, 
         "status":"reported",
         "additional_report_content":JSON.stringify(additionalInfo)
    };


    request.open('POST', url);
    request.send(JSON.stringify(requestObj));
  };



})();
