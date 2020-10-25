const { Client, logger } = require('camunda-external-task-client-js');
const open = require('open');

// configuration for the Client:
//  - 'baseUrl': url to the Process Engine
//  - 'logger': utility to automatically log important events
//  - 'asyncResponseTimeout': long polling timeout (then a new request will be issued)
const config = { baseUrl: 'http://localhost:8080/engine-rest', use: logger, asyncResponseTimeout: 10000 };

// create a Client instance with custom configuration
const client = new Client(config);

// susbscribe to the topic: 'charge-card'
client.subscribe('job-offer-accepted', async function({ task, taskService }) {
  // Put your business logic here

  // Get a process variable
  const salary = task.variables.get('salary');
  const freeCoffee = task.variables.get('freeCoffee');
  const approved = task.variables.get('approved');
  const freeMacBook = task.variables.get('freeMacBook');

  console.log(`Approval is ${approved} for a job offer with the salary ${salary} kr. 
  and condition of free coffee is ${freeCoffee} and  free MacBook is ${freeMacBook}`);

  // Complete the task
  await taskService.complete(task);
});

client.subscribe('job-offer-declined', async function({ task, taskService }) {
    // Put your business logic here
  
    // Get a process variable
    const salary = task.variables.get('salary');
    const freeCoffee = task.variables.get('freeCoffee');
    const freeMacBook = task.variables.get('freeMacBook');
  
    console.log(`Job declined for a job offer with the salary ${salary} kr. 
    and condition of free coffee is ${freeCoffee} and free MacBook is ${freeMacBook}`);
  
    // Complete the task
    await taskService.complete(task);
  });