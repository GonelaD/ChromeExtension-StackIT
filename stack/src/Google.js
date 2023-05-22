import axios from 'axios';
import React, { useEffect, useState } from 'react';


const google = window.google;
console.log("google",google)


const Google = () =>{

    // function handleCallBackResponse(res){
    //     console.log("call back",res.credential);
    //     setToken(res.credential);
    // }
    // function handleReject(res){
    //     console.log("Error reject",res);
    // }

    // const [token,setToken] = useState();

    // function initializeGoogleSignIn(clientID) {

       
    
    //     // return new Promise((resolve, reject) => {
    //       google.accounts.id.initialize({
    //         client_id: clientID,
    //         callback: handleCallBackResponse,
    //         cancel_callback: handleReject,
    //     //   });
    //     });
    //   }

    //   function performGoogleSignIn() {
    //     // return new Promise((resolve, reject) => {
    //       google.accounts.id.prompt()
    //         .then((response) => {
    //           if (response && response.credential) {
    //             handleCallBackResponse(response);
    //           } else {
    //            handleReject(response);
    //           }
    //         })
    //         .catch((error) => {
    //          handleReject(error)
    //         });
    //     // });
    //   }

    //   async function fetchSpreadsheetData(accessToken, spreadsheetId, range) {
    //     try {
    //       const response = await fetch(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/values/${range}`, {
    //         headers: {
    //           Authorization: `Bearer ${accessToken}`,
    //         },
    //       });
      
    //       const data = await response.json();
    //       const spreadsheetData = data.values;
          
    //       // Process the retrieved data as needed
      
    //       return spreadsheetData;
    //     } catch (error) {
    //       console.error('Error fetching spreadsheet data:', error);
    //       return null;
    //     }
    //   }

    //   async function initial(clientID){
    //     try {
    //         await initializeGoogleSignIn(clientID);
    //         const credential = await performGoogleSignIn();
    //         console.log("reached here: creds",credential)
    //         // const spreadsheetData = await fetchSpreadsheetData(credential.id_token, request.spreadsheetId, request.range);
      
    //         // sendResponse({ data: spreadsheetData });
    //       } catch (error) {
    //         console.error('Error signing in or fetching spreadsheet data:', error);
    //         // sendResponse({ error: error.message });
    //       }
    //   }

    //   function updateSpreadsheet(){
    //     if(!token)return ;
    //     const regex = /\/spreadsheets\/d\/([a-zA-Z0-9-_]+)/;
    //     let url = window.location.href;
    //     const match = url.match(regex);
    //     let spreadsheetId = match[1];
    //     // let spreadsheetId = "1ZPFlB7ikGp0giapvta256j3MzmnUyZmlS3jA78ayMTM"
    //     console.log("spread id",spreadsheetId)
    //     const payload = {
    //         requests: [
    //           // Add your update requests here
    //           // Example: updating cell A1 with the value "Hello, World!"
    //           {
    //             updateCells: {
    //               range: {
    //                 sheetId: 0,
    //                 startRowIndex: 0,
    //                 endRowIndex: 1,
    //                 startColumnIndex: 0,
    //                 endColumnIndex: 1
    //               },
    //               rows: [
    //                 {
    //                   values: [
    //                     {
    //                       userEnteredValue: {
    //                         stringValue: 'Hello, World!'
    //                       }
    //                     }
    //                   ]
    //                 }
    //               ],
    //               fields: 'userEnteredValue'
    //             }
    //           }
    //         ]
    //       };
    //     axios.post(`https://sheets.googleapis.com/v4/spreadsheets/${spreadsheetId}/batchUpdate`,payload,{
    //         headers:{
    //         Authorization: token,
    //         'content-type':'application/json',
    //         }
    //     }).then((res)=>{
    //         console.log("after put",res)
    //     }).catch((res)=>{
    //         console.log("error",res)
    //     })
    //   }
    
      useEffect(()=>{
        // let clientID = "303988672537-mn1nno15jlcsri0trv58b12lkpc5k1nk.apps.googleusercontent.com";
        // const googleScript = document.getElementById('google-init')

        // if (window.google) {
        //     console.log("before")
        //     // All is good! Carry on 
        //     google = window.google;
        //     initial(clientID);
        //     google.accounts.id.renderButton(
        //         document.getElementById("signInButton"),{
        //             theme:"outline",
        //             size:"large"
        //         }
        //     );
        // }

        // googleScript.addEventListener('load', () => {
        //     // Patiently waiting to do the thing 
        //     console.log("after load",window.google)
        //     // initial(clientID);
        //     // google.accounts.id.renderButton(
        //     //     document.getElementById("signInButton"),{
        //     //         theme:"outline",
        //     //         size:"large"
        //     //     }
        //     // );
        // })

        console.log("chrome",chrome.identity)

       
       
        

      },[])

    //   useEffect(()=>{
    //     document.getElementById('signInButton').hidden = true;
    //     updateSpreadsheet();
    //   },[token])
    
    return(
        <div id="signInButton"></div>
    );
}

export default Google;