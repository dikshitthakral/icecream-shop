# Top-Icecream-Shops API
We love ice cream! Tell us what the top five ice cream shops in Alpharetta are and why
# Prerequisites
 
What things you need to install the software and how to install them

* Node : https://nodejs.org/en/download/

# How to Run the application

  * install npm packages:
    ```
    npm install
    ```
  * run the service
    ```
    npm start
    ```
  * This will start the server and you can visit the API endpoint on localhost:2000 to start using the API.
    ```
    http://localhost:2000
    ```
## Build With
* Node - The runtime server framework used
* ExpressJS - minimalist web framework for Node.js

## Development

Default port is 2000.

There are 5 API end points :
* Get Top 5 icecream shops Alpharetta has, based on ratings and their respective reviews.
  ```
  http://localhost:2000/api/businessDetails - GET
  ```