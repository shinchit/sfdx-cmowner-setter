import { flags, SfdxCommand } from '@salesforce/command';
import { Messages } from '@salesforce/core';
import { AnyJson } from '@salesforce/ts-types';
import { QueryResult } from 'jsforce';

Messages.importMessagesDirectory(__dirname);

const messages = Messages.loadMessages('sfdx-cmowner-setter', 'set');

export default class Set extends SfdxCommand {

  public static description = messages.getMessage('commandDescription');

  public static examples = [
    '$ sfdx cmowner:set --targetusername username@example.com --targetcampaign <salesforceCampaignId> --useridtoset <salesforceUserId>'
  ];

  protected static flagsConfig = {
    targetcampaign: flags.id({char: 'c', required: true, description: messages.getMessage('targetcampaignFlagDescription')}),
    useridtoset: flags.id({char: 's', required: true, description: messages.getMessage('useridtosetFlagDescription')})
  };

  // Comment this out if your command does not require an org username
  protected static requiresUsername = true;

  // Comment this out if your command does not support a hub org username
  protected static supportsDevhubUsername = false;

  // Set this to true if your command requires a project workspace; 'requiresProject' is false by default
  protected static requiresProject = false;

  public async run(): Promise<AnyJson> {
    const targetcampaign = this.flags.targetcampaign;
    const useridtoset = this.flags.useridtoset;

    // this.org is guaranteed because requiresUsername=true, as opposed to supportsUsername
    const conn = this.org.getConnection();
    const query = `SELECT LeadOrContactId, LeadOrContactOwnerId FROM CampaignMember WHERE CampaignId = '${targetcampaign}'`;

    // The type we are querying for
    interface CampaignMember {
      LeadOrContactId: string;
      LeadOrContactOwnerId: string;
    }

    interface Lead {
      Id: string;
      OwnerId: string;
    }

    interface Contact {
      Id: string;
      OwnerId: string;
    }

    // Query CampaignMembers
    const campaignMembers: QueryResult<CampaignMember> = await conn.query<CampaignMember>(query);
    const leads: Lead[] = [];
    const contacts: Contact[] = [];

    campaignMembers.records.forEach((campaignMember: CampaignMember) => {
      if (campaignMember.LeadOrContactId.match(/^00Q.*$/)) {
        const lead: Lead = {
          Id: campaignMember.LeadOrContactId,
          OwnerId: useridtoset
        };
        leads.push(lead);
      }
      if (campaignMember.LeadOrContactId.match(/^003.*$/)) {
        const contact: Contact = {
          Id: campaignMember.LeadOrContactId,
          OwnerId: useridtoset
        };
        contacts.push(contact);
      }
    });

    if (leads.length > 0) {
      conn.sobject('Lead').updateBulk(leads);
    }
    if (contacts.length > 0) {
      conn.sobject('Contact').updateBulk(contacts);
    }

    return { state: 'success' };
  }
}
