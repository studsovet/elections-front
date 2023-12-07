export type Candidate = {
    id: string;
    electionId: string;
    name: string;
    description: string;
    photourl: string;
    approved: boolean;
    waitingForApprove: boolean;
};

export type CandidateVote = {
    candidate: Candidate;
    votes: number;
    votesLeft: number;
};