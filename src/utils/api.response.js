const apiResponse = (code, status, message, data = null) => {
  return {
    code,
    status,
    message,
    data,
  };
};

module.exports = apiResponse;
