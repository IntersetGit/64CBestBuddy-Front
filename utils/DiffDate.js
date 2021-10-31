import moment from 'moment';

export const DiffDateMoment = (date1, date2) => {
    const _now = moment(new Date(date1)); //todays date
    const _end = moment(new Date(date2)); // another date
    const duration = moment.duration(_now.diff(_end));
    return duration.asDays();
}


export default {
    DiffDateMoment,
}
