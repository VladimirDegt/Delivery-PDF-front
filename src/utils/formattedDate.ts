export function formattedDate(date: Date | string): string {
    if (!date) return '';
    const changeDate = new Date(date);
    const options: Intl.DateTimeFormatOptions = {
        month: 'short',
        day: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        hour12: false,
        timeZone: 'Europe/Kiev'
    };
    return changeDate.toLocaleString('en-US', options).replace(' at ', ', ');
}
