import { Response, Request } from "express";
import * as contactsController from "../../controllers/contactsControllers";
import contacts from "../../data";

describe("getAllContacts", () => {
  test("getAllContacts", () => {
    const res = {
      status: jest.fn(() => {
        return res;
      }),
      json: jest.fn(),
    } as unknown as Response;

    const mockApiResponse = {
      success: true,
      message: "Contacts retrieved successfully",
      data: contacts,
    };

    contactsController.getAllContacts({ res });

    expect(res.json).toHaveBeenCalledWith(mockApiResponse);
  });
});

describe("addContact", () => {
  test("addContact", () => {
    const mockRequest = {
      body: {
        firstname: "test",
        lastname: "test",
        phone: "test",
      },
    } as Request;

    const res = {
      status: jest.fn(() => {
        return res;
      }),
      json: jest.fn(),
    } as unknown as Response;

    const mockApiResponse = {
      success: true,
      message: "Contact added successfully",
    };

    contactsController.addContact(mockRequest, res);

    expect(res.json).toHaveBeenCalledWith(mockApiResponse);
  });
});

describe("editContact", () => {
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

    const res = {
      status: jest.fn(() => {
        return res;
      }),
      json: jest.fn(),
    } as unknown as Response;

    const mockApiResponse = {
      success: true,
      message: "Contact edited successfully",
    };

    contactsController.editContact(mockRequest, res);

    expect(res.json).toHaveBeenCalledWith(mockApiResponse);
  });
});

describe("deleteContact", () => {
  test("deleteContact", () => {
    const mockRequest = {
      params: {
        index: 0,
      },
    } as unknown as Request;

    const res = {
      status: jest.fn(() => {
        return res;
      }),
      json: jest.fn(),
    } as unknown as Response;

    const mockApiResponse = {
      success: true,
      message: "Contact deleted successfully",
    };

    contactsController.deleteContact(mockRequest, res);

    expect(res.json).toHaveBeenCalledWith(mockApiResponse);
  });
});
