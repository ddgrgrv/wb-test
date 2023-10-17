import moment from 'moment';

export function dateFormating(){
    return {
        getCurrentCalendar: moment().format('YYYY-MM-DD'),
        getCurrentFullDate: moment().format('MMMM Do YYYY, h:mm:ss a'),
        getCurrentDate: moment().format('dddd'),
    }
    
}

