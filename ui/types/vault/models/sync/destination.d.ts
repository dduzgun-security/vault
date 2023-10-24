import type { WithFormFieldsAndValidationsModel } from 'vault/app-types';

export default interface SyncDestinationModel extends WithFormFieldsAndValidationsModel {
  name: string;
  type: string;
  get icon(): string;

  // aws-sm
  accessKeyId: string;
  secretAccessKey: string;
  region: string;

  // azure-kv
  keyVaultUri: string;
  clientId: string;
  clientSecret: string;
  tenantId: string;
  cloud: string;

  // gcp
  credentials: string;

  // gh
  accessToken: string;
  repositoryOwner: string;
  repositoryName: string;

  // vercel project
  accessToken: string;
  projectId: string;
  teamId: string;
  deploymentEnvironments: array;
}
