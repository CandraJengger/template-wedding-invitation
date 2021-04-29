export const addClass = (element, className) => {
  element.classList.add(className);
};

export const removeClass = (element, className) => {
  element.classList.remove(className);
};

export const isContains = (element, className) => {
  return element.classList.contains(className);
};

export const replaceClass = ({ element, oldClass, newClass }) => {
  element.classList.replace(oldClass, newClass);
};
