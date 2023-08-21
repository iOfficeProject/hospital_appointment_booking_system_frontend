import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import axios from "axios"; 
import RolePage from "./RolePage";
import { MemoryRouter } from "react-router-dom";

jest.mock("axios");

describe("RolePage Component", () => {
  const mockRoles = [
    { roleId: 1, roleName: "Admin" },
    { roleId: 2, roleName: "User" },
  ];

  const localStorageMock = {
    getItem: jest.fn(),
  };
  Object.defineProperty(window, "localStorage", { value: localStorageMock });

  it("renders roles when roles are available", async () => {
    localStorageMock.getItem.mockReturnValue("fakeToken");
    axios.get.mockResolvedValue({ data: mockRoles }); 
    render(
      <MemoryRouter>
        <RolePage />
      </MemoryRouter>
    );

    const addButton = screen.getByText("Add Role");

    expect(addButton).toBeInTheDocument();
  });

  it("renders 'No data available' when no roles are available", async () => {
    localStorageMock.getItem.mockReturnValue("fakeToken");
    axios.get.mockResolvedValue({ data: [] });

    render(
      <MemoryRouter>
        <RolePage />
      </MemoryRouter>
    );

    const noDataElement = await screen.findByText("No data available");
    expect(noDataElement).toBeInTheDocument();
  });

  it("deletes a role when the delete button is clicked", async () => {
    localStorageMock.getItem.mockReturnValue("fakeToken");
    axios.get.mockResolvedValue({ data: mockRoles });
    axios.delete.mockResolvedValue({});

    render(
      <MemoryRouter>
        <RolePage />
      </MemoryRouter>
    );

    const deleteButton = await screen.findAllByText("Delete");
    
      fireEvent.click(deleteButton[0]);


    expect(axios.delete).toHaveBeenCalledWith(
      "https://localhost:7264/api/roles/1",
      expect.any(Object)
    );
  });
});
