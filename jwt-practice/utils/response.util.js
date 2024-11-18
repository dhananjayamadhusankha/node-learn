const Response = async (res, statusCode, isSuccessful, message, data) => {
  return res.status(statusCode).send({
    isSuccessful,
    code: statusCode,
    timestamp: new Date().toISOString(),
    message,
    data,
  });
};


module.exports = Response;