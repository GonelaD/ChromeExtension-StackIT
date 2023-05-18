import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Papa from "papaparse";
import './App.css';


const App = () => {

  const [parsedData,setParsedData] = useState([]);
  const [url,setUrl] = useState();
  const [showDialog,setShowDialog] = useState(false);
  const [loading,setLoading] = useState(false);
  const [newSheet,setNewSheet] = useState(false);

  useEffect(() => {


    console.log(process.env)
    // Event listener for dragover events
    const handleDragOver = (event) => {
      console.log("drag over")
      event.preventDefault();
    };

    const handlePaste = async(event) => {
      // Handle the paste event here
      
      console.log('Paste event triggered on page load');
      setShowDialog(false);
      setNewSheet(false);
      setLoading(true);
    };


    // Event listener for drop events
    const handleDrop = (event) => {
      console.log("drop over")
      event.preventDefault();
      const file = event.dataTransfer.files[0];
      
      Papa.parse(file, {
        header: true,
        skipEmptyLines: true,
        complete: function (results) {
          var csv_data = results.data;
          console.log("before",csv_data)
          setParsedData(csv_data)
          setUrl(window.location.href)
          var copyData = []
          var headings = Object.keys(csv_data[0])
          copyData.push(headings);
          csv_data.forEach((ele)=>{
            copyData.push(Object.values(ele))
          })

          console.log("copy data",copyData)
          const sheetData = copyData
                .map(lines => lines.join("\t"))
                .join("\n");

          navigator.clipboard.writeText(sheetData)

          console.log("copied to clip board")
          setShowDialog(true);
          // const pasteEvent = document.createEvent('Event');
          // pasteEvent.initEvent('paste', true, true);
          // document.dispatchEvent(pasteEvent);  
        },
      });


    };

    const handleBeforeUnload = (event) => {
      console.log("this entereted");
      if(window.location.href.includes("https://docs.google.com/spreadsheets/u")){
        setNewSheet(true);
      }
      
      // event.preventDefault();
      // event.returnValue = ''; // Chrome requires this to be set
      // // Show the alert when the user tries to leave the page
      // const message = 'Leaving this page will trigger an alert on the new page.';
      // return message;
    };

    const handleClick = async (event) => {
      console.log("click",event.target.innerText);
      const element = event.target;
        if (element.tagName === 'A' && element.innerText.includes("CSV")) {
          console.log("noted download event");
          let fileHref = element.href;
          console.log("href",fileHref)
          try {
            const response = await fetch(fileHref);
            const content = await response.text();
            const processedContent = content.replace(/,/g, '\t'); // Replace commas with tabs
            console.log("processed",processedContent);
            
            try {
              await navigator.clipboard.writeText(processedContent);
              // Clipboard write completed, open a new page
              window.open(`https://docs.google.com/spreadsheets`);
            } catch (error) {
              console.error('Clipboard write failed:', error);
            }

          // Open Google Sheets in a new tab with the downloaded file
          // const newWindow = window.open(`https://docs.google.com/spreadsheets`);

            
            // newWindow.addEventListener('load', () => {
            //   window.alert('Google Sheets opened successfully!');
            // });
    
            

          // console.log("copied to clip board")
          // setShowDialog(true);
        
            // Copy the 'content' to clipboard or perform any other logic
          } catch (error) {
            console.error('Error fetching file:', error);
          }
          // sendDownloadEvent();
        }
    }

    
  
    

    

    // Attach the event listeners to the 'document' object
    document.addEventListener('dragover', handleDragOver);
    document.addEventListener('drop', handleDrop);
    document.addEventListener('click',handleClick);
    window.addEventListener('load', handleBeforeUnload);
    // document.addEventListener('click', (event) => {
    //   const clickedElement = event.target;
    //   console.log('Clicked element:', clickedElement);
    //   let tableElement = clickedElement.innerText;
    //   console.log("table",tableElement)
    // });
    document.addEventListener('paste', handlePaste);

    // Clean up the event listeners on component unmount
    return () => {
      document.removeEventListener('dragover', handleDragOver);
      document.removeEventListener('drop', handleDrop);
      document.removeEventListener('paste', handlePaste);
      window.removeEventListener('load', handleBeforeUnload);
    };
  }, []);

  const closeDialog = ()=>{
    setShowDialog(false);
    setLoading(false);
    setNewSheet(false);

  }

  return (
    <div className="App" style={{backgroundColor:"red"}}>
      {showDialog && (
        <div className="dialog">
          <h1>Hit Ctrl(CMD)+V</h1>
          <button onClick={closeDialog}>Close</button>
        </div>
      )}
      {newSheet && (
        <div className="dialog">
          <h1>Open new sheet and hit Ctrl(CMD)+V</h1>
          <button onClick={closeDialog}>Close</button>
        </div>
      )}
      {loading && (
        <div className="dialog">
          <p>CSV is Loading...</p>
          <button onClick={closeDialog}>Close</button>
        </div>
      )}
     
    </div>
  );
};

export default App;



