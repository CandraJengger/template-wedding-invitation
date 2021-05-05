export const getNameFromURL = () => {
  if (window === undefined) {
    return;
  }

  const url = window.location.href;
  const splitUrl = url.split('#');

  if (splitUrl.length === 1) {
    return '';
  }

  return splitUrl[splitUrl.length - 1].replace('-', ' ');
};
