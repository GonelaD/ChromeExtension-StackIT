import React, { useEffect } from 'react';
require('dotenv').config()

export function GoogleDownload(data) {

    useEffect(() => {
        handleClientLoad();
    }, []);


     // On load, called to load the auth2 library and API client library.

      function handleClientLoad() {
        window.gapi.load('client:auth2', initClient);
      }

     // Initializes the API client library and sets up sign-in state listeners.

      function initClient() {
        window.gapi.client.init({
          apiKey: process.env.REACT_APP_API_KEY,
          clientId: process.env.REACT_APP_CLIENT_ID,
          discoveryDocs: ["https://sheets.googleapis.com/$discovery/rest?version=v4"],
          scope: "https://www.googleapis.com/auth/spreadsheets"
        }).then(function () {

          // Listen for sign-in state changes.
  window.gapi.auth2.getAuthInstance().isSignedIn.listen(updateSigninStatus);

          // Handle the initial sign-in state.
          updateSigninStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
        }, function(error) {
            console.log(error) // add something for error handling
        });
      }

      // Called when the signed in status changes, to update the UI appropriately. After a sign-in, the API is called.

      function updateSigninStatus(isSignedIn) {
        var authorizeButton = document.getElementById('authorize_button');
        var signoutButton = document.getElementById('signout_button');
        var downloadButton = document.getElementById('download_button');

        if (isSignedIn) {
          authorizeButton.style.display = "none";
          signoutButton.style.display = "block";
          downloadButton.style.display = "block";
        } else {
          authorizeButton.style.display = "block";
          signoutButton.style.display = "none";
          downloadButton.style.display = "none";
        }
      }

    //   // Sign in the user upon button click.

    //   function handleAuthClick(event) {
    //     window.gapi.auth2.getAuthInstance().signIn();
    //   }

    //   // Sign out the user upon button click.

    //   function handleSignoutClick(event) {
    //     window.gapi.auth2.getAuthInstance().signOut();
    //   }




    return (
        <div>

            {/* <button id="authorize_button"  onClick={handleAuthClick} display={updateSigninStatus} className="block googleauth">Authorize Google Login</button>

            <button id="signout_button"  onClick={handleSignoutClick} display={updateSigninStatus} className="block googlesignout">Sign Out of Google</button> */}

            <button id="download_button" onClick={() => createGoogleSheet(data.data)} className="block google" display={updateSigninStatus}>Download Data to Google Sheets</button> 

        </div>
    )
}