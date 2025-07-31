// Q1 Simulate a Delayed Task (Using setTimeout & Callbacks)
// Create a function fakeDownload(url, callback) 
//that simulates downloading a file from a URL. 
//The function should:

// Log "Downloading from [url]...".
// Wait 2 seconds.
// Call the callback function with "Download complete!".


// Task:
// Create a function fakeDownload(url, callback) that simulates downloading a file from a URL. The function should:
//     Log `Downloading from ${url}...`.
//     Wait 2 seconds.
//     Call the callback function with "Download complete!".

function fakeDownload(url, callback) {
    console.log(`Downloading from ${url}...`)
    setTimeout(()=>{
        callback(`Download complete!`)
    } , 2000)
  }
  
  // Usage:
  fakeDownload("https://example.com/file", function(message){
    console.log(message)
  }); 