// Model the New Request wizard data as types: ContactDetails, Location, RequestDetails, Attachment, 
// and one NewRequest that combines them

type RequestDetails = {
    title: string;
    description: string;
    createdDate: Date;
    department: string;
    urgency: string;
}

type Location = {
    municipality: string;
    zipCode: number;
    street: string;
    buildingNumber: string;
    addressNotes: string;
}

type Contact = {
    emailAddress: string;
    phoneNumber: string;
    correspondenceAddress?: string;
}

type Attachment = {
    termsAccepted: boolean;
    filePath?: string;
}

type SubmissionRequest = {
    generalInfo: RequestDetails;
    addressDetails: Location;
    issueInfo: RequestDetails;
    applicantInfo: Contact;
    uploadedFile?: Attachment;
}

// Create 3 valid test data objects and 3 invalid ones (missing or wrong fields), with a comment why each is invalid

const nowDate: Date = new Date();

// Valid object 1
const issueDetailsA: RequestDetails = {
    title: "Damaged sidewalk tiles",
    description: "Several paving stones are loose and pose a tripping hazard",
    createdDate: nowDate,
    department: "Road Maintenance",
    urgency: "Medium"
}

// Valid object 2
const addressA: Location = {
    municipality: "Burgas",
    zipCode: 8000,
    street: "Aleksandrovska",
    buildingNumber: "32",
    addressNotes: "Near Troykata Square",
}

// Valid object 3
const applicantA: Contact = {
    emailAddress: "georgi.dimitrov@example.bg",
    phoneNumber: "+359899456123"
}

// invalid test data object - one property has wrong type
const applicantB: Contact = {
    emailAddress: "elena.stoyanova@domain.com",
    phoneNumber: 0877654321
}

// invalid test data object - one mandatory property is missing
const uploadA: Attachment = {
    filePath: "broken_sidewalk_photo.jpg"
}

// invalid test data object - property "issueInfo" has wrong type string instead of "IssueDetails"
const submissionA: SubmissionRequest = {
    generalInfo: issueDetailsA,
    addressDetails: addressA,
    issueInfo: "Wrong string value instead of IssueDetails object",
    applicantInfo: applicantA,
    uploadedFile?: uploadA,
}

// Write a TestDataFactory class with a method validRequest(overrides?) that returns a fresh object each time, using spread for the overrides
// Stretch: add a uniqueTitle() method that never returns the same title twice in a run

class TestDataFactory {
    private static titleCounter: number = 0;

    static uniqueTitle(baseTitle: string = "Maintenance Issue"): string {
        this.titleCounter++;
        return `${baseTitle} #${this.titleCounter} (${Date.now()})`;
    }

    static validRequest(r:RequestDetails): boolean {
        return r.description.length !== 0
    }
}