# Lab 5 - Starter

Dustin Nguyen

## 1) Would you use a unit test to test the “message” feature of a messaging application? Why or why not?
No, I would not use a unit test to test the “message” feature itself because it likely involves interactions between multiple systems, such as the user interface, server requests, and database handling. These kinds of features are better tested with integration or end-to-end tests that verify the complete message flow rather than just individual components.

## 2) Would you use a unit test to test the “max message length” feature of a messaging application? Why or why not?
Yes, I would use a unit test to verify the "max message length" feature because it is a self-contained logic check. You can easily test whether a string that exceeds 80 characters is correctly blocked, and whether a valid message is accepted. Unit testing this kind of input validation is fast and reliable since it doesn’t depend on other systems.

