export function date() {
  return console.log('123')
}

export function dateTime(time) {
  const localDate = new Date(time);
  return localDate.toLocaleString();
}
