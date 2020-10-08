function h(tag, props, ...children) {
  const element = document.createElement(tag);
  //Object.assign copies all properties from the right object onto the left. So in this case it'll copy all the properties in the props object onto the element
  const elementWithProps = Object.assign(element, props);
  elementWithProps.append(...children);
  return elementWithProps;
}

export default h;
