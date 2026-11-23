import {idFormat, slaHours, isOverdue, isTitleValid, isValidCategory, summaryPrint } from './request-utils';

// Use the functions to process an array of 8 hard-coded requests and print a report
const requests = [
    { id: 1, title: "Fill deep cracks on Tsarigradsko shose", category: "Roads", priority: 1, createdHour: 7 },
    { id: 2, title: "Remove piled garbage near the metro station in Lyulin", category: "Cleanup", priority: 3, createdHour: 14 },
    { id: 3, title: "Trim overgrown bushes blocking the sidewalk", category: "School", priority: 2, createdHour: 18 },
    { id: 4, title: "Replase flickering lamps on Vitosha bulevard", category: "Lighting", priority: 4, createdHour: 23 },
    { id: 5, title: "Fix broken traffic sign at the intersection", category: "Roads", priority: 1, createdHour: 38 },
    { id: 6, title: "Refresh faden road markings near the hospital", category: "Roads", priority: 3, createdHour: 14 },
    { id: 7, title: "Help", category: "Parks", priority: 4, createdHour: 19 },
    { id: 8, title: "Repair broken wooden benches in Borisova gradina", category: "Parks", priority: 2, createdHour: 22 }
];

const allowedCategories = ["Roads", "Lighting", "Parks", "Cleanup", "Trees"];
var currentHour = 24;

console.log("Summary of Requests:");

for (const request of requests) {summaryPrint(
    request.id, 
    request.priority, 
    request.createdHour, 
    currentHour, 
    request.title, 
    request.category, 
    allowedCategories);
}

console.log('***********************');

console.log("Report:")
console.log('-----------------------------');
for (const request of requests) {
    const categoryValid = isValidCategory(request.category, allowedCategories);
    const titleValid = isTitleValid(request.title);
    const formattedID = idFormat(request.id);
    const slaCalc = slaHours(request.priority);
    const overdue = isOverdue(request.createdHour, currentHour, request.priority);
    var text = `Request: ${formattedID} , SLA hours: ${slaCalc} , Is overdue: ${overdue} , Category: ${request.category} , Title: ${request.title}`
    console.log(text);
    console.log('-----------------------------');
}