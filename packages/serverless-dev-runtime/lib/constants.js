// AWS does not allow overriding these
// https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html#lambda-environment-variables
const AWS_RESERVED_VARS = [
  '_HANDLER',
  'LAMBDA_TASK_ROOT',
  'LAMBDA_RUNTIME_DIR',
  'AWS_EXECUTION_ENV',
  'AWS_DEFAULT_REGION',
  'AWS_REGION',
  'AWS_LAMBDA_LOG_GROUP_NAME',
  'AWS_LAMBDA_LOG_STREAM_NAME',
  'AWS_LAMBDA_FUNCTION_NAME',
  'AWS_LAMBDA_FUNCTION_MEMORY_SIZE',
  'AWS_LAMBDA_FUNCTION_VERSION',
  'AWS_ACCESS_KEY',
  'AWS_ACCESS_KEY_ID',
  'AWS_SECRET_KEY',
  'AWS_SECRET_ACCESS_KEY',
  'AWS_SESSION_TOKEN',
  'TZ',
];
const AWS_RESERVED_VARS_INFO_URL =
  'https://docs.aws.amazon.com/lambda/latest/dg/current-supported-versions.html#lambda-environment-variables';
const MOCK_DATA = {
  HUBSPOT_ACCOUNT_ID: 123456,
  HUBSPOT_CONTACT_IS_LOGGED_IN: true,
  HUBSPOT_CONTACT_LIST_MEMBERSHIPS: '',
  HUBSPOT_CONTACT_VID: 12345,
  HUBSPOT_LIMITS_TIME_REMAINING: 600000,
  HUBSPOT_LIMITS_EXECUTIONS_REMAINING: 60,
};
const MAX_SECRETS = 50;
const MAX_RUNTIME = 3000;
const ROUTE_PATH_PREFIX = '_hcms/api/';

module.exports = {
  AWS_RESERVED_VARS,
  AWS_RESERVED_VARS_INFO_URL,
  MAX_RUNTIME,
  MAX_SECRETS,
  MOCK_DATA,
  ROUTE_PATH_PREFIX,
};
