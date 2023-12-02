import { formatDistanceToNowStrict, parseISO, isValid } from 'date-fns';
import { ru } from 'date-fns/locale';
import { ElectionStatus, type Election } from '~/types/elections';

const NO_ELECTIONS_STRING = 'В данных момент нет доступных голосований';

export function getElectionDescription(election: Election | null): string {
    if (!election) return NO_ELECTIONS_STRING;

    if (election.status !== ElectionStatus.Started) {
        return NO_ELECTIONS_STRING;
    }

    if (!(election.finishTime && isValid(new Date(election.finishTime)))) {
        return 'Голосование началось';
    }

    const finishTime = parseISO(election.finishTime);
    const timeLeftString = formatDistanceToNowStrict(finishTime, { locale: ru, unit: 'day' });

    return `Осталось ${timeLeftString}`;
}