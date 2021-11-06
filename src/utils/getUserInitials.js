export const getUserInitials = str => {
  const arr = str.split(' ');
  return arr[0][0] + arr[1][0];
}