import organizationService from '../services/organization.service.js';
import encrypt from '../encrypt.js';
// import SendMail from '../services/send-mail.js';
// import ApiError from '../exceptions/api-error.js';
import TokenService from '../services/token-service.js';

class Organization {
  async authRegisterOrganization(req, _res) {
    return await organizationService.createOrganization(req);
  }
}

export default new Organization();
