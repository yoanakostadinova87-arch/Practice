// Write a function-free script that takes a priority (1–5) and 
// prints the SLA in hours using if / else if, then rewrite it with switch

let priority: 1 | 2 | 3 | 4 | 5 = 4;

if (priority>=4) {
  console.log('SLA is 3 days');
} else if (priority>=2) {
  console.log('SLA is 7 days');
} else {
  console.log('SLA is when the time comes - if it ever comes');
}
  


switch (Number(priority)) {
  case 1:
    console.log('SLA is when the time comes - if it ever comes');
    break;
  case 2:
  case 3:
    console.log('SLA is 7 days');
    break;
  case 4:
  case 5:
    console.log('SLA is 4 days');
    break;
  default:
    console.log('unknown value');
}


// Print the numbers 1 to 100
// for multiples of 3 print Clerk
// of 5 Citizen
// of both Supervisor

for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('Supervisor');
    } else if (i % 3 === 0) {
        console.log('Clerk');
    } else if (i % 5 === 0) {
        console.log('Citizen');
    } else {
        console.log(i);
    }
}


// Given an array of request statuses, count how many are Submitted, In Review and Resolved

let statuses: string[] = ['Submitted', 'In Review', 'Resolved', 'Submitted', 'In Review'];
let countSubmitted: number = 0;
let countInReview: number = 0;
let countResolved: number = 0;

for (let start of statuses) {
    if (start === 'Submitted') {
        countSubmitted++;
    } else if (start === 'In Review') {
        countInReview++;
    } else if (start === 'Resolved') {
        countResolved++;
    }
}

console.log(`Submitted: ${countSubmitted}`);
console.log(`In Review: ${countInReview}`);
console.log(`Resolved: ${countResolved}`);

