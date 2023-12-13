import request from "supertest";
import { app } from "../../server";
import contacts from "../../data";

describe("GET /contacts", () => {
  test("GET /contacts", async () => {
    const response = await request(app).get("/contacts");

    expect(response.body).toEqual({
      success: true,
      message: "Contacts retrieved successfully",
      data: contacts,
    });
  });
});

describe("PUT /contacts/:index", () => {
  test("PUT /contacts/:index", async () => {
    const index = 0;
    const updatedContact = {
      firstname: "John",
      lastname: "Doe",
      phone: "1233211234",
    };

    const response = await request(app)
      .put(`/contacts/${index}`)
      .send(updatedContact);

    expect(response.body).toEqual({
      success: true,
      message: "Contact edited successfully",
    });
  });
});
