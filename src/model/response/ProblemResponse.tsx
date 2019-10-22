
export interface ProblemResponse {
    status: number
    message: string
    details: string
    timestamp: string
}

export class ProblemError extends Error {

    public status: number;
    public details: string;
    public timestamp: string;

    constructor(problem: ProblemResponse) {
        super(problem.message);

        this.status = problem.status;
        this.details = problem.details;
        this.timestamp = problem.timestamp
    }
}