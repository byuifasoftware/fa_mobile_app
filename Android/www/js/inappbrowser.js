
//android
<plugin name="InAppBrowser" value="org.apache.cordova.InAppBrowser" />

//ios
<plugin name="InAppBrowser" value="CDVInAppBrowser" />


ref.addEventListener(eventname, callback);


// Add an event listener
	// Wait for Cordova to load
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    function onDeviceReady() {
         var ref = window.open('http://apache.org', '_blank', 'location=yes');
         ref.addEventListener('loadstart', function() { alert('start: ' + event.url); });
         ref.addEventListener('loadstop', function() { alert('stop: ' + event.url); });
         ref.addEventListener('exit', function() { alert(event.type); });
    }


// Remove Event listener
    // Wait for Cordova to load
    document.addEventListener("deviceready", onDeviceReady, false);

    // Global InAppBrowser reference
    var iabRef = null;
    function iabLoadStart(event) {
        alert(event.type + ' - ' + event.url);
    }

    function iabLoadStop(event) {
        alert(event.type + ' - ' + event.url);
    }

    function iabClose(event) {
         alert(event.type);
         iabRef.removeEventListener('loadstart', iabLoadStart);
         iabRef.removeEventListener('loadstop', iabLoadStop);
         iabRef.removeEventListener('exit', iabClose);
    }

    // Cordova is ready
    function onDeviceReady() {
         iabRef = window.open('http://apache.org', '_blank', 'location=yes');
         iabRef.addEventListener('loadstart', iabLoadStart);
         iabRef.addEventListener('loadstop', iabLoadStop);
         iabRef.addEventListener('exit', iabClose);
    }


// close
 	// Wait for Cordova to load
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    function onDeviceReady() {
         var ref = window.open('http://apache.org', '_blank', 'location=yes');
         // close InAppBrowser after 5 seconds
         setTimeout(function() {
             ref.close();
         }, 5000);
    }


// window.open
    // Wait for Cordova to load
    //
    document.addEventListener("deviceready", onDeviceReady, false);

    // Cordova is ready
    //
    function onDeviceReady() {
        // external url
        var ref = window.open(encodeURI('http://apache.org'), '_blank', 'location=yes');
        // relative document
        ref = window.open('next.html', '_self');
    }