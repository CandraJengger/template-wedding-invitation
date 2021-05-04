export const getNameFromURL = () => {
  if (window === undefined) {
    return;
  }

  const url = window.location.href;
  const splitUrl = url.split('/');
  return splitUrl[splitUrl.length - 1].split('#')[1].replace('-', ' ');
};
