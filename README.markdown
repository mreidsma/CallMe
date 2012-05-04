#README - CallMe

---

This tool was developed by Matthew Reidsma in HTML and jQuery to allow users to call my Google Voice number without disclosing it on my website. It was inspired by Razvan Gavril's "Custom Google Voice Widget:" http://razvangavril.com/web-development/custom-google-voice-widget/ . Razvan's solution, while functional, seemed a bit like a hack. CallMe attempts to be a more elegant solution.

Google Voice provides a Flash call widget that can be embedded on the web, but Flash is icky and you can't control the presentation. CallMe lets you work with good ol' HTML and only enable your CallMe service if Javascript is available. Progressive enhancement at its finest.

## INSTALLATION

You need a Google Voice account to use CallMe. Log into your account and go to Settings. Under "Call Widgets," create a widget with the settings you want and copy the embed code. You should have something like this:

	<object type="application/x-shockwave-flash" data="https://clients4.google.com/voice/embed/webCallButton" width="230" height="85"><param name="movie" value="https://clients4.google.com/voice/embed/webCallButton" /><param name="wmode" value="transparent" /><param name="FlashVars" value="id=lkjshdlkjashfpwehjlaksjhk&style=0" /></object>
	
You want the value of the "id" variable under the last <code>&lt;param&gt;</code> tag. Now, open callme.js in your favorite text editor. On line 8, add the "id" value you copied above between the quotes. You should have something like this:

	// Set the Google Voice ID from the embed dialer code
	var gv_id = "lkjshdlkjashfpwehjlaksjhk";
	
In your HTML file, give your chosen call trigger the id of "callme" (you can use any element as a call trigger). Upload the callme.js file to your server (and the callme.css if you want to use my styles) and reference them in your HTML file. Now, refresh the page and click your call trigger. Enter your phone number (not a Google Voice number) into the box and that phone will ring and ask to connect you to your Google Voice number. 

Give yourself a high-five.

More questions? Feel free to contact Matthew Reidsma on Twitter at @mreidsma or via email at reidsmam@gvsu.edu.

## DEMO

You can view a live version of this tool at http://matthewreidsma.com/email

## COPYRIGHT

This tool is copyright 2012 Matthew Reidsma. 

This tool is free software: you can redistribute it and/or modify it under the terms of the GNU General Public License as published by the Free Software Foundation, either version 3 of the License, or (at your option) any later version.

This tool is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

You should have received a copy of the GNU General Public License along with this tool. If not, see <http://www.gnu.org/licenses/>.