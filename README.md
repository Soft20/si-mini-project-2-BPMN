# System Integration Mini Project 2 - Business Process Modelling and Automation
Adam Lass, Pernille Lørup, Stephan Djurhuus & Rasmus Helsgaun  

## Setup
1. Start Camunda.

2. Deploy the [BPMN diagram "job-offer.bpmn"](https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/BPMN/job-offer.bpmn) and the [DMN table "benefits-table.dmn"](https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/BPMN/benefits%20table.dmn) on Camunda.

3. Run the [index.js file](https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/index.js) and you should get the output:
```
✓ subscribed to topic job-offer-accepted
✓ subscribed to topic job-offer-declined
```

## Testing the program
1. Make a POST request with the information found in: [rest-requests.http](https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/http-requests/rest-requests.http)

2. Open the [Camunda Tasklist](http://localhost:8080/camunda/app/tasklist) in your browser and verify a new User Acceptance task with a Job Offer has appeared.
If you havent tempered with the .http file body you should get a task looking like this:

![acceptance1](https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/images/acceptance1.PNG)

From here you can either decide to approve the job offer or not by ticking or unticking the "Approved?" option followed by clicking the "Complete" button.

3. If you go back to the program from which you ran the [index.js file](https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/index.js), you should now see the following in your terminal if you APPROVED the job offer:
```
Approval is true for a job offer with the salary 65000 kr. 
  and condition of free coffee is true and  free MacBook is true
✓ completed task "TASK ID"
```
Or the following if you did not approve the job offer:
```
Job declined for a job offer with the salary 65000 kr. 
    and condition of free coffee is true and free MacBook is true
✓ completed task "TASK ID"
```
