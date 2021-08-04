/*
 * Copyright 2021 Amazon.com, Inc. or its affiliates. All Rights Reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License").
 * You may not use this file except in compliance with the License.
 * A copy of the License is located at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * or in the "license" file accompanying this file. This file is distributed
 * on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either
 * express or implied. See the License for the specific language governing
 * permissions and limitations under the License.
 */

export const DEFAULT_MESSAGE_SOURCE = {
  AGGREGATION_MONITOR: `
  Monitor {{ctx.monitor.name}} just entered alert status. Please investigate the issue.
  - Trigger: {{ctx.trigger.name}}
  - Severity: {{ctx.trigger.severity}}
  - Period start: {{ctx.periodStart}}
  - Period end: {{ctx.periodEnd}}

  - Deduped Alerts:
  {{#ctx.dedupedAlerts}}
    * {{id}} : {{bucket_keys}}
  {{/ctx.dedupedAlerts}}

  - New Alerts:
  {{#ctx.newAlerts}}
    * {{id}} : {{bucket_keys}}
  {{/ctx.newAlerts}}

  - Completed Alerts:
  {{#ctx.completedAlerts}}
    * {{id}} : {{bucket_keys}}
  {{/ctx.completedAlerts}}
  `.trim(),
  TRADITIONAL_MONITOR: `
  Monitor {{ctx.monitor.name}} just entered alert status. Please investigate the issue.
  - Trigger: {{ctx.trigger.name}}
  - Severity: {{ctx.trigger.severity}}
  - Period start: {{ctx.periodStart}}
  - Period end: {{ctx.periodEnd}}
  `.trim(),
};

export const FORMIK_INITIAL_ACTION_VALUES = {
  name: '',
  destination_id: '',
  subject_template: {
    lang: 'mustache',
    source: '',
  },
  message_template: {
    lang: 'mustache',
    source: DEFAULT_MESSAGE_SOURCE.TRADITIONAL_MONITOR,
  },
  throttle_enabled: false,
  throttle: {
    value: 10,
    unit: 'MINUTES', // throttle unit only supports MINUTES currently, no UI element mapped
  },
};

export const DEFAULT_ACTION_TYPE = 'slack';
