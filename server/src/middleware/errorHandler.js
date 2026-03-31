export function notFoundHandler(request, response, next) {
  if (
    request.path.startsWith('/contact') ||
    request.path.startsWith('/quote') ||
    request.path.startsWith('/health')
  ) {
    return response.status(404).json({ message: 'Route not found.' });
  }

  return next();
}

export function errorHandler(error, request, response, next) {
  console.error(error);

  if (response.headersSent) {
    return next(error);
  }

  return response.status(500).json({
    message: 'An unexpected server error occurred.'
  });
}
