# System Integration Mini Project 2 - Business Process Modelling and Automation
_System Integration, fall 2020_

Adam Lass  
Pernille Lørup  
Stephan Djurhuus   
Rasmus Helsgaun   

### Objectives
The main objective of this task is to help you understand the business context of system integration and
to provide practical experience in modelling and automation of business processes by implementation of
standard methods and notation.

### Tasks
The task is to design and implement one business process – a workflow, which integrates several
disparate operations (applications or services), in BPMN.
The business process would be associated with your exam project.

[Link to extended assignment description](https://datsoftlyngby.github.io/soft2020fall/resources/6f3005f8-MP2-BPMN.pdf)

## Content
* [Technical Features](#technical-features)
* [Prerequisite](#prerequisite)
* [Installation](#installation)
* [Execution](#execution)

## Technical features

### Business Case
Our business case is to show a business process / workflow, which can filter out job offers depending on the salary and the different benefits coming with it.

This is done through a "Business Process Modelling and Automation" model (BPMN), containing automation through a "Decision Model and Notation Table" (DMN) and user interation though Camunda.

### Summary
This project consists of a [BPMN Diagram](https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/BPMN/job-offer.bpmn) containing a User Task controlled through the [Camunda Tasklist](http://localhost:8080/camunda/app/tasklist), a Business Rule Task run through the [benefits-table](https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/BPMN/benefits-table.dmn) and two Service Tasks run in Javascript through the file [index.js](https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/index.js).

#### Business Process Modelling and Automation Diagram
The BPMN model shows the workflow of the system and starts with the "Job Offer". When the program receives the offer, it determines if the salary is high enough or not. If it is not high enough, it goes through the DMN model, which then determines if the job offers a free MacBook, free coffee or not. Depending on the benefits, the offer is either declined or will then go though the [Camunda Tasklist](http://localhost:8080/camunda/app/tasklist), where the user can determine if they want to accept or decline the offer. Depending on the response, the [Service Task](https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/index.js) will print in the console wether or not the job offer was approved of.

![Job Offer BPMN Diagram](https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/images/job-offer-bpmn.PNG)

##### Decision Model and Notation Table
![benefits DMN Table](https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/images/benefits-dmn-table.PNG)

### Testing the business process
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

Or the following if you did NOT approve the job offer:

```
Job declined for a job offer with the salary 65000 kr. 
    and condition of free coffee is true and free MacBook is true
✓ completed task "TASK ID"
```

## Prerequisite

#### Server
* [node.js](https://nodejs.org/en/)

## Installation
#### Server
```bash
yarn install
```

#### Client
##### Install Camunda:
* [Camunda Community Platform](https://camunda.com/download/)
* [Camunda Modeler](https://camunda.com/download/modeler/)

## Execution
`ctr + c` to terminate services.

#### Server
```bash
npm start
```

In the terminal you should now see the following output:

```
✓ subscribed to topic job-offer-accepted
✓ subscribed to topic job-offer-declined
```

#### Camunda
* Deploy the [BPMN diagram "job-offer.bpmn"](https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/BPMN/job-offer.bpmn) and the [DMN table "benefits-table.dmn"](https://github.com/Soft20/si-mini-project-2-BPMN/blob/main/BPMN/benefits-table.dmn) through the Camunda modeler.