// Generate test data: 10 request titles "Test request 01" … "Test request 10" with priorities cycling 1–5

for (let i = 1; i <=10; i++) {
  let priority = i % 5 || 5;
  console.log(`Test request ${i.toString()} - Prio: ${priority.toString()}`);
}