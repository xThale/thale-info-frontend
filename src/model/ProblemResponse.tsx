
export interface ProblemResponse {
    status: string
    message: string
    details: string
    timestamp: string
}

export class ProblemError extends Error {

    public status: string
    public details: string
    public timestamp: string

    constructor(problem: ProblemResponse) {
        super(problem.message)

        this.status = problem.status
        this.details = problem.details
        this.timestamp = problem.timestamp
    }
}