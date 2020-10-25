# System Integration Mini Project 2 - Business Process Modelling and Automation
Adam Lass, Pernille Lørup, Stephan Djurhuus & Rasmus Helsgaun  

## Setup
Deploy the [https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/BPMN/job-offer.bpmn](BPMN diagram "job-offer.bpmn") and the [https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/BPMN/benefits%20table.dmn](DMN table "benefits-table.dmn") on Camunda.

Run the [https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/index.js](index.js file) and you should get the output:
´´´javascript
✓ subscribed to topic job-offer-accepted
✓ subscribed to topic job-offer-declined
´´´

Make a POST request with the information found in: [https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/http-requests/rest-requests.http](rest-requests.http)

Open the [http://localhost:8080/camunda/app/tasklist](Camunda Tasklist) in your browser and verify a new User Acceptance task with a Job Offer has appeared.
If you havent tempered with the .http file body you should get a task looking like this: