export type Candidate = {
    id: string;
    electionId: string;
    name: string;
    description: string;
    photoUrl: string;
    approved: boolean;
    waitingForApprove: boolean;
};