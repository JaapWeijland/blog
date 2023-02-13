import { DateTime } from 'luxon';

export const toReadableDateTime = (ms: number) => {
    return DateTime.fromMillis(ms).toFormat('dd LLLL yyyy');
};
