export class jobOffer {
    id: number;
    barId?: number;
    hourlyWage?: number;
    description?: string;
    status?: string;
    timePeriod?: {start: Date, end: Date}[];
}