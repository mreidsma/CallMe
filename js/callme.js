// Call this script after jQuery
// Callme - inline Google Voice calling without Flash
// by Matthew Reidsma, May 2012
//
// http://matthewreidsma.com/projects/callme

// Set the Google Voice ID from the embed dialer code
var gv_id = "";

// Make the "Call Me" span look like a link
$(".call-link").css("cursor","pointer").css("color","#900");
$(".call-link").parent().append('<span class="call-form" style="display: inline-block; padding: .6em 1em; margin-left: 2em; border: 1px solid #bbb;background: #ddd;"><form><input type="hidden" id="button_id" value="' + gv_id + '" /><input type="hidden" id="cid_name" value="Email Caller" /><label for="cid_number">Your Number:</label> <input type="text" id="cid_number" /> <a class="button-grey" id="callme">Connect</a></form></span>');
$(".call-form").toggle();

// Set a click handler to run the following function when a user clicks "Call Me"
$(".call-link").click(function() {

	$(".call-form").toggle();
	$("#callme").click(function() {

		$(this).text("Connecting...").attr("class", "button-blue"); // Change the button to show something is working

		// Grab values from form
		var button_id  = $('#button_id').val(); 
		var cid_number = $('#cid_number').val();
		var cid_name   = $('#cid_name').val();
		
		var query = 'buttonId=' + button_id + '&callerNumber=' + cid_number + '&name=' + cid_name + '&showCallerNumber=1';

		//Submit the values via POST to Google Voice

		$.ajax({
			dataType: "string",
			type: "POST",
			url: "https://clients4.google.com/voice/embed/webButtonConnect",
			data: query
		});

	});
});

