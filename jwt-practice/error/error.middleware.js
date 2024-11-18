const { StatusCodes } = require("http-status-codes");
const Response = require("../utils/response.util");

const errorHandlerMiddleware = async (err, req, res, next) => {
    console.log("safaFdfFdfADqygewfbhbwd", err.message)
  if (err.statusCode === StatusCodes.NOT_FOUND) {
    return Response(res, StatusCodes.NOT_FOUND, false, err.message, null);
  }
};

module.exports = errorHandlerMiddleware;
