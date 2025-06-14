import ApiRestClient from "../util/ApiRestClient";
import urls from "../config/urls";
import { Context } from "mocha";
import { Scenario } from "../interfaces/Scenario";
import PayloadCreation from "../util/PayloadCreation";
import HeaderCreation from "../util/HeaderCreation";
import { headerError, bodyError, success } from "../schemas/responses.json";
import { validate } from "jsonschema";
import { expect } from "chai";
import dbClient from "../util/dbClient";
import queries from "../util/queries";

class UserCreation {
  constructor() {}

  validateUserCreation(scenario: Scenario) {
    
    before(async function (this: Context) {
      const payloadCreation = new PayloadCreation(scenario);
      const headerCreation = new HeaderCreation(scenario);
      this.header = await headerCreation.create();
      this.submissionPayload = await payloadCreation.create();
      const createUser = new ApiRestClient(
        urls.base[ (process.env.TEST_ENV || "local") ],
        urls.endpoints.registerUser,
        this.submissionPayload,
        this.header
      );
      this.resp = await createUser.submitPostRequest();
    });

    after(async function(this:Context){
      const deleteUsers = new ApiRestClient(
        urls.base[ (process.env.TEST_ENV || "local") ],
        urls.endpoints.delete,
        undefined,        
        this.header
      );
      await deleteUsers.deleteRequest()
      
    })

    if (scenario.errors) {
      
      if (scenario.errors.type === "header") {
        it("Should validate the structure of the response payload for an AUTHENTICATION error", function (this: Context) {
          expect(validate(this.resp.body, headerError).valid).to.equal(true);
        });
        for (let elm of scenario.errors.list) {
          for (let key in elm) {
            it(`Should validate the returned error ${key.toUpperCase()} value for the ${elm.param.toUpperCase()} error param:`, function (this: Context) {
              const f = (e) => e.param === elm.param;
              this.valObj = this.resp.body.errors.find(f);
              expect(elm[key]).to.equal(this.valObj[key]);
            });
          }
        }
      } else {
        it("Should validate the structure of the response payload for a field validation error", function (this: Context) {
          expect(validate(this.resp.body, bodyError).valid).to.equal(true);
        });
        for (let elm of scenario.errors.list) {
          for (let key in elm) {
            it(`Should validate the returned error ${key.toUpperCase()} value for the ${elm.param.toUpperCase()} error param:`, function (this: Context) {
              const f = (e) =>
                elm.value
                  ? e.value ===
                    this.submissionPayload[Object.keys(scenario.data)[0]]
                  : e.msg === elm.msg;
              this.valObj = this.resp.body.errors.find(f);
              let value =
                key === "value" ? this.submissionPayload[elm.param] : elm[key];
              expect(value).to.equal(this.valObj[key]);
            });
          }
        }
      }
    } else {
      it("Should validate the structure of a successful response payload", function (this: Context) {
        expect(validate(this.resp.body, success).valid).to.equal(true);
      });
      it("Should validate the response success code is equal to 1", function (this: Context) {
        expect(this.resp.body.success).to.equal(1);
      });
      it("Should validate the returned response success message", function (this: Context) {
        expect(this.resp.body.msg).to.equal(
          `User ${this.submissionPayload.email} has been successfully added`
        );
      });
      it("Should validate the successful first name database entry", async function (this: Context) {
        const getUser = new ApiRestClient(
          urls.base[ (process.env.TEST_ENV || "local") ],
          urls.endpoints.existingUser + "email=" + this.submissionPayload.email,
          undefined,
          this.header
        )
        const userResponse = await getUser.submGetRequest();
        this.user = userResponse.body
        expect(this.user.firstName).to.equal(this.submissionPayload.firstName);
      });
      it("Should validate the successful last name database entry", async function (this: Context) {
        expect(this.user.lastName).to.equal(this.submissionPayload.lastName);
      });
    }
  }
}
export default new UserCreation();
