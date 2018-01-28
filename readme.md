Mr.Lamp
=====

Built in dealtahacks IV

Description
-----

Mr. Lamp is a one of a kind lamp and can be turned on and off through text. He was built using  stdlib messagebird, node.js, Firebase, and an ESP8266. The objective for Mr.Lamp is to show that other devices such as garage openers can be controlled through sms. The project uses messagebird and stblib to allow certain white listed phone numbers to control Mr.Lamp. The node server and Firebase parse and receive the text message and posts to the ESP8266 which controls the Lamp through a relay.

How to run
-----

There are 3 components to running Mr.Lamp

1.) Flash arduino code on ESP8266, modify for correct firebase configuration.
2.) Run index.js and configure firebase
3.) set up Std Lib to phone number





