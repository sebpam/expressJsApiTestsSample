import request from "supertest";
import { User } from "../interfaces/User";
import { Header } from "../interfaces/Header";

class ApiRestClient {
  baseUrl: string;
  endpoint: string;
  payload: User;
  header: Header;

  constructor(
    baseUrl: string,
    endpoint: string,
    payload: User,
    header: Header
  ) {
    this.baseUrl = baseUrl;
    this.endpoint = endpoint;
    this.payload = payload;
    this.header = header;
  }

  public submitPostRequest(): any {
    return new Promise((resolve, reject) => {
      request(this.baseUrl)
        .post(this.endpoint)
        .send(this.payload)
        .set(this.header)
        .end((err, resp) => {
          if (err) {
            reject(err);
          } else {
            resolve(resp);
          }
        });
    });
  }

  public deleteRequest(): any {
    return new Promise((resolve, reject) => {
      request(this.baseUrl)
        .delete(this.endpoint)
        .set(this.header)
        .end((err, resp) => {
          if (err) {
            reject(err);
          } else {
            resolve(resp);
          }
        });
    });
  }
  public submGetRequest(): any {
    return new Promise((resolve, reject) => {
      console.log( this.baseUrl + this.endpoint )
      request(this.baseUrl)
        .get(this.endpoint)
        .set(this.header)
        .end((err, resp) => {
          if (err) {
            reject(err);
          } else {
            resolve(resp);
          }
        });
    });
  }
}

export default ApiRestClient;
