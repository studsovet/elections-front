export enum ElectionStatus {
    'Draft' = 'draft',
    'Created' = 'created',
    'Waiting' = 'waiting',
    'Started' = 'started',
    'Finished' = 'finished',
    'Descrypted' = 'decrypted',
    'Results' = 'results',
    'Voted' = 'voted'
};

export type Election = {
    id: string;
    name: string;
    priority: number;
    isRunoff: boolean;
    mandates?: number;
    isForNearForeign: boolean;
    isForFarForeign: boolean;
    acceptedCouncilOrganizationsIds: string[];
    acceptedFacultiesIds: string[];
    acceptedDormitoriesIds: string[];
    startTime: string;
    finishTime?: string;
    status: ElectionStatus;
};

export type ElectionNormalVoices = [string, number][];

export type ElectionRunoffVoices = string[];

export type ElectionVoices = ElectionNormalVoices | ElectionRunoffVoices;

export type ElectionVoicePayload = {
    random: string;
    voice: ElectionVoices;
};
