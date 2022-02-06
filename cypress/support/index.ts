
import { deleteSkill } from "./delete-command";
import { loginAsAdminUser, loginAsManagerUser, loginAsNormalUser } from "./login-commands";

Cypress.Commands.add('loginAsNormalUser', loginAsNormalUser)
Cypress.Commands.add('loginAsManagerUser', loginAsManagerUser)
Cypress.Commands.add('loginAsAdminUser', loginAsAdminUser)
Cypress.Commands.add('deleteSkill', deleteSkill)