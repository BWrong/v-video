let utils = Object.create(null);
utils.getAttrValue = (attr) => attr === '' || attr === 'true' || attr;

export default utils;
