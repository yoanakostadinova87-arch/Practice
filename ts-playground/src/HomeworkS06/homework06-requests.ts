// Print a text table of requests: id, title padded to 25 characters, priority, status
const requests: { id: number; title: string; priority: string; status: string }[] = [
  { id: 1, title: 'Request 1', priority: 'Low', status: 'Submitted' },
  { id: 2, title: 'Request 2', priority: 'Medium', status: 'In Review' },
  { id: 3, title: 'Request 3', priority: 'High', status: 'Resolved' },
  { id: 4, title: 'Request 4', priority: 'Critical', status: 'Waiting for Info' },
]; 

requests.forEach((request) => {
  console.log(`${request.id.toString().padEnd(5)} ${request.title.padEnd(25)} ${request.priority.padEnd(10)} ${request.status}`);
});