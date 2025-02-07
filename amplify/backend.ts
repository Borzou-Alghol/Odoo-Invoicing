import { defineBackend } from '@aws-amplify/backend';
import { auth } from './auth/resource';
import { data } from './data/resource';

const backend = defineBackend({
  auth,
  data,
});

const httpDataSource = backend.data.addHttpDataSource(
  "HttpDataSource",
  "http://13.211.2.64:8069/restapi/1.0/object/"
);