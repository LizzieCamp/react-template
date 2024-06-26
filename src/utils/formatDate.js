export const formatDate = (dateString) => {
    const date = new Date(dateString);
    const options = { month: 'short', day: '2-digit' };
    return new Intl.DateTimeFormat('en', options).format(date);
  };