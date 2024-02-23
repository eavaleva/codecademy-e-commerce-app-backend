const yaml = require('js-yaml');
const fs = require('fs');
const path = require('path');
import { swaggerUi } from 'swagger-ui-express';

// Load via YAML.safeLoad to avoid unsafe type errors with special characters during parsing of the YAML file to JSON
const swaggerDocument = yaml.load(fs.readFileSync(path.resolve(__dirname, './swagger.yml'), 'utf8'));

module.exports = (app) => {
  // save Swagger API documentation to /api-docs url
  app.use('api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};
