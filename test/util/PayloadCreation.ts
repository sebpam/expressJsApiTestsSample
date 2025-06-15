import { Scenario } from "../interfaces/Scenario";
import { User } from "../interfaces/User";
import { faker } from "@faker-js/faker";
import dbClient from "../util/dbClient";
import queries from "../util/queries";

class PayloadCreation {
  private payload: User;
  scenario: Scenario;

  constructor(scenario: Scenario) {
    this.scenario = scenario;
    this.payload = {};
  }
  async create(): Promise<User> {
    this.payload.firstName =
      this.scenario.data.firstName !== undefined
        ? this.scenario.data.firstName
        : faker.name.firstName();
    this.payload.lastName =
      this.scenario.data.lastName !== undefined
        ? this.scenario.data.lastName
        : faker.name.lastName();
    this.payload.email =
      this.scenario.data.email === undefined
        ? this.createEmail()
        : this.scenario.data.email === "existing"
        ? "email@email.com"
        : this.scenario.data.email;
    this.payload.password =
      this.scenario.data.password !== undefined
        ? this.scenario.data.password
        : this.createPassword();

    if (this.scenario.delete) {
      for (let key of this.scenario.delete) {
        delete this.payload[key];
      }
    }
    return this.payload;
  }
  createEmail(): string {
    let email: string;
    if (this.payload.firstName && this.payload.lastName) {
      email = faker.internet.email(
        this.payload.firstName.toString(),
        this.payload.lastName.toString()
      );
    } else if (this.payload.firstName && this.payload.lastName === undefined) {
      email = faker.internet.email(this.payload.firstName.toString());
    } else if (this.payload.firstName === undefined && this.payload.lastName) {
      email = faker.internet.email(this.payload.lastName.toString());
    } else {
      email = faker.internet.email();
    }
    return email;
  }
  createPassword(): string {
    const str =
      "K" + Math.floor(Math.random() * (9999999 - 1000000) + 1000000) + "k@ier";
    return str;
  }
}

export default PayloadCreation;
