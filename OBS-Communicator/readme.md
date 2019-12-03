#OBS-Communicator

How to use my weird system:

Finish the instructions on the other parts of this server-side system first.

Create a scene with window captures with names starting with index 0 to however many screens you want on stream (I usually put them in layouts with powers of 2 with one extra, where if there are 4 people competing you use 3 captures and the slowest person is not on the restream, while if there are 5 people, everyone is on the restream

Download and install the OBS Websockets Plugin [here] (https://github.com/Palakis/obs-websocket)

Go into the settings on the websocket plugin in OBS (under tools), and change the port and password to whatever you want.

Go to dnvic.ga/SMR-Server-Side-Code/OBS-Communicator

Enter the IP (if local use 127.0.0.1), port, and password from the websocket program in their respective forms

Enter the IP and port from the first step into the SMR IP and SMR Port Field

In the num clients field insert the number of people who are using the application in your restreaming setup

In the num window captures field, insert the number of window captures in the restreaming setup

Once all the forms are filled out, click the start bot button. Make sure to have the javascript console open from now on (right click, inspect element, click console in Chrome)



