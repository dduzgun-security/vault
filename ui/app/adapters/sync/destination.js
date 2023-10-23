/**
 * Copyright (c) HashiCorp, Inc.
 * SPDX-License-Identifier: BUSL-1.1
 */

import ApplicationAdapter from 'vault/adapters/application';

export default class SyncDestinationAdapter extends ApplicationAdapter {
  namespace = 'v1';

  _baseUrl() {
    return `${this.buildURL()}/sys`;
  }

  // id is the destination name
  // modelName is sync/destinations/:type
  urlForFindRecord(id, modelName) {
    return `${this._baseUrl()}/${modelName}/${id}`;
  }

  query() {
    const url = `${this._baseUrl()}/sync/destinations`;
    return this.ajax(url, 'GET', { data: { list: true } });
  }
}