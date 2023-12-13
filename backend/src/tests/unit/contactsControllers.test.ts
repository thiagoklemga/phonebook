import { Response, Request } from "express";
import * as contactsController from "../../controllers/contactsControllers";
import contacts from "../../data";

//test for getAllContacts
describe("testings getAllContacts", () => {
  test("getAllContacts", () => {
    const mockResponse = {
      json: jest.fn(),
    } as unknown as Response;

    const mockApiResponse = {
      success: true,
      message: "Contacts retrieved successfully",
      data: contacts,
    };

    contactsController.getAllContacts({ res: mockResponse });

    expect(mockResponse.json).toHaveBeenCalledWith(mockApiResponse);
  });
});

//test for addContact
describe("testings addContact", () => {
  test("addContact", () => {
    const mockRequest = {
      body: {
        firstname: "test",
        lastname: "test",
        phone: "test",
      },
    } as Request;

    const mockResponse = {
      json: jest.fn(),
    } as unknown as Response;

    const mockApiResponse = {
      success: true,
      message: "Contact added successfully",
    };

    contactsController.addContact(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith(mockApiResponse);
  });
});

//test for editContact
describe("testings editContact", () => {
  test("editContact", () => {
    const mockRequest = {
      params: {
        index: 0,
      },
      body: {
        firstname: "test",
        lastname: "test",
        phone: "0987654321",
      },
    } as unknown as Request;

    const mockResponse = {
      json: jest.fn(),
    } as unknown as Response;

    const mockApiResponse = {
      success: true,
      message: "Contact edited successfully",
    };

    contactsController.editContact(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith(mockApiResponse);
  });
});

//test for deleteContact
describe("testings deleteContact", () => {
  test("deleteContact", () => {
    const mockRequest = {
      params: {
        index: 0,
      },
    } as unknown as Request;

    const mockResponse = {
      json: jest.fn(),
    } as unknown as Response;

    const mockApiResponse = {
      success: true,
      message: "Contact deleted successfully",
    };

    contactsController.deleteContact(mockRequest, mockResponse);

    expect(mockResponse.json).toHaveBeenCalledWith(mockApiResponse);
  });
});
