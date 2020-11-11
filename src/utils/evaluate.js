export const isTruthy = value => {
  const truthyValues = [1, '1', 'Y', true, 'true'];
  return truthyValues.includes(value);
};

export const isFalsy = value => {
  const falseyValues = [0, '0', 'N', false, 'false'];
  return falseyValues.includes(value);
};

export const isDefined = value => {
  const IS_NULL = isNull(value);
  const IS_UNDEFINED = isUndefined(value);
  const IS_EMPTY_STRING = typeof value === 'string' && value === '';
  const IS_DEFAULT_NUMBER = typeof value === 'number' && value === 0;
  const IS_EMPTY_OBJECT =
    typeof value === 'object' && Object.keys(value).length > 0;

  if (
    IS_NULL ||
    IS_UNDEFINED ||
    IS_EMPTY_STRING ||
    IS_DEFAULT_NUMBER ||
    IS_EMPTY_OBJECT
  ) {
    return false;
  }

  return true;
};

export const isNested = value => isObject(value) || isArray(value);

export const isObject = value => {
  return isDefined(value) && typeof value === 'object';
};

export const isArray = value => {
  return Array.isArray(value);
};

export const isUndefined = value => {
  return value === undefined;
};

export const isNull = value => {
  return value === null;
};

export const isNullOrUndefined = value => {
  return isNull(value) || isUndefined(value);
};

export const isNaN = value => {
  return Number.isNaN(Number(value));
};
