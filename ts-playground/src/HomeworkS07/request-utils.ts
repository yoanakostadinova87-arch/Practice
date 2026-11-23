// Create request-utils.ts with at least 6 small, pure, typed functions:
// id formatting, SLA calculation, overdue check, title validation (5–100 characters)
// category check against an allowed list, summary text

export function idFormat(id: number): string {
  return `REQ-${id}`;
}

export function slaHours(priority: number): number {
    if (priority === 1) {
        return 4;
    }
    return priority <= 2 ? 24 : 72;
}

export function isOverdue(hCreated: number, hCurrent: number, priority: number): boolean {
    const sla = slaHours(priority);
    return hCurrent - hCreated > sla;
}

export function isTitleValid(title: string): boolean {
    return title.length >= 5 && title.length <= 100;
}

export function isValidCategory(category: string, allowedCategories: string[]): boolean {
    return allowedCategories.includes(category);
}

export function summaryPrint(id: number, priority: number, createdHour: number, currentHour: number, title: string, category: string, allowedCategories: string[]): void {
    
    var formattedID = idFormat(id);
    console.log(`ID is: ${formattedID}`);
    var slaCalc = slaHours(priority);
    console.log(`SLA hours: ${slaCalc}`);
    var overdue = isOverdue(createdHour, currentHour, priority);
    console.log(`Is overdue: ${overdue}`);
    var titleValid = isTitleValid(title);
    console.log(`Is title valid: ${title}`);
    var categoryValid = isValidCategory(category, allowedCategories);
    console.log(`Is category valid: ${categoryValid}`);
}