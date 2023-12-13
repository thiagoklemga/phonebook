import request from "supertest";
import { app } from "../../server";
import contacts from "../../data";

describe("Testing routes", () => {
  test("GET /contacts", async () => {
    const response = await request(app).get("/contacts");

    expect(response.status).toBe(200);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Contacts retrieved successfully");
    expect(response.body.data).toEqual(contacts);
  });

  test("POST /contacts/:index", async () => {
    const updatedContact = {
      firstname: "John",
      lastname: "Doe",
      phone: "1233211234",
    };

    const response = await request(app).post(`/contacts`).send(updatedContact);

    expect(response.status).toBe(201);
    expect(response.body.success).toBe(true);
    expect(response.body.message).toBe("Contact added successfully");
  });
});
