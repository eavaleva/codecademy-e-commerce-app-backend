const swaggerUi = require('swagger-ui-express');
const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');

// Load via YAML.safeLoad to avoid unsafe type errors with special characters during parsing of the YAML file to JSON
const swaggerDocument = yaml.saveLoad(fs.readFileSync(path.resolve(__dirname, '../swagger.yaml'), 'utf8'));

module.exports = (app) => {
  // save Swagger API documentation to /api-docs url
  app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
