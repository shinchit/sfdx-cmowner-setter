sfdx-cmowner-setter
===========

SFDX plugin that changes the owner of a campaign member for a specified campaign to a specific user.

[![Version](https://img.shields.io/npm/v/sfdx-cmowner-setter.svg)](https://npmjs.org/package/sfdx-cmowner-setter)
[![Known Vulnerabilities](https://snyk.io/test/github/shinchit/sfdx-cmowner-setter/badge.svg)](https://snyk.io/test/github/shinchit/sfdx-cmowner-setter)
[![Downloads/week](https://img.shields.io/npm/dw/sfdx-cmowner-setter.svg)](https://npmjs.org/package/sfdx-cmowner-setter)
[![License](https://img.shields.io/npm/l/sfdx-cmowner-setter.svg)](https://github.com/shinchit/sfdx-cmowner-setter/blob/main/package.json)

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
* [`sfdx cmowner:set -c <id> -s <id> [-e <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`](#sfdx-cmownerset--c-id--s-id--e-string--u-string---apiversion-string---json---loglevel-tracedebuginfowarnerrorfataltracedebuginfowarnerrorfatal)

## `sfdx cmowner:set -c <id> -s <id> [-e <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]`

SFDX plugin that changes the owner of a campaign member for a specified campaign to a specific user.

```
SFDX plugin that changes the owner of a campaign member for a specified campaign to a specific user.

USAGE
  $ sfdx cmowner:set -c <id> -s <id> [-e <string>] [-u <string>] [--apiversion <string>] [--json] [--loglevel 
  trace|debug|info|warn|error|fatal|TRACE|DEBUG|INFO|WARN|ERROR|FATAL]

OPTIONS
  -c, --targetcampaign=targetcampaign                                               (required) Salesforce ID of the
                                                                                    campaign you want to process

  -e, --excludeuserids=excludeuserids                                               Salesforce IDs of the user you don't
                                                                                    want to change as the campaing
                                                                                    member's owner. Each Salesforce ID
                                                                                    have to be joined by comma.

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
  <salesforceUserId> --excludeuserids <salesforceUserIds joined by comma>
```

_See code: [lib/commands/cmowner/set.js](https://github.com/shinchit/sfdx-cmowner-setter/blob/v0.2.0/lib/commands/cmowner/set.js)_
<!-- commandsstop -->
