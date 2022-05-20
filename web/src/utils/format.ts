export const { format: formatDateTime } = new Intl.DateTimeFormat('default', {
    year: 'numeric', month: 'numeric', day: 'numeric',
    hour: 'numeric', minute: 'numeric',
    hour12: false,
})