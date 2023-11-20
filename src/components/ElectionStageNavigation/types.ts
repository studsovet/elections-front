import { ElectionStatus } from '~/types/elections';

export type Interval = {
    startTime: string;
    finishTime?: string;
}

export type ElectionStage = {
    status?: ElectionStatus;
    endDescription: string;
} & Interval;