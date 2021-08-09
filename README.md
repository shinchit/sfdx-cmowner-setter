sfdx-cmowner-setter
===========

SFDX plugin that changes the owner of a campaign member for a specified campaign to a specific user.

[![Version](https://img.shields.io/npm/v/sfdx-switch.svg)](https://npmjs.org/package/sfdx-switch)
[![Known Vulnerabilities](https://snyk.io/test/github/shinchit/sfdx-switch/badge.svg)](https://snyk.io/test/github/shinchit/sfdx-switch)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-switch.svg)](https://npmjs.org/package/sfdx-switch)
[![License](https://img.shields.io/npm/l/sfdx-switch.svg)](https://github.com/shinchit/sfdx-switch/blob/main/package.json)

<!-- toc -->
* [Install](#install)
* [Commands](#commands)
<!-- tocstop -->
# Install
<!-- install -->
```sh-session
$ sfdx plugins:install sfdx-cmowner-setter
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`sfdx cmowner:set -c <id> -s <id> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-cmownerset--c-id--s-id--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx cmowner:set -c <id> -s <id> [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

SFDX plugin that changes the owner of a campaign member for a specified campaign to a specific user.

```
SFDX plugin that changes the owner of a campaign member for a specified campaign to a specific user.

USAGE
  $ sfdx cmowner:set -c <id> -s <id> [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -c, --targetcampaign=targetcampaign                                               (required) Salesforce ID of the
                                                                                    campaign you want to process

  -s, --useridtoset=useridtoset                                                     (required) Salesforce ID of the user
                                                                                    you want to specify as the owner

  -u, --targetusername=targetusername                                               username or alias for the target
                                                                                    org; overrides default target org

  --apiversion=apiversion                                                           override the api version used for
                                                                                    api requests made by this command

  --json                                                                            format output as json

  --loglevel=(trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL)  [default: warn] logging level for
                                                                                    this command invocation

EXAMPLE
  $ sfdx cmowner:set --targetusername username@example.com --targetcampaign <salesforceCampaignId> --useridtoset 
  <salesforceUserId>
```

_See code: [lib/commands/cmowner/set.js](https://github.com/shinchit/sfdx-cmowner-setter/blob/v0.0.8/lib/commands/cmowner/set.js)_
<!-- commandsstop -->
