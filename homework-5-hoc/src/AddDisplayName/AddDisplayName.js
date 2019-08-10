/*
  Напишите простой HOC и укажите для него displayName
*/

export const withDisplayName = WrappedComponent => {
  WrappedComponent.displayName = `HOC${WrappedComponent.displayName ||
    'Component'}`;
  return WrappedComponent;
};
