import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import axios from "axios";
import AddHospital from "../AddHospital";
import { useNavigate } from "react-router-dom";

jest.mock("axios");
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: jest.fn(),
}));

describe("AddHospital Component", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  test("renders AddHospital component", () => {
    render(<AddHospital />);
    // Test rendering and initial state...
    // Check if the main heading is present
    expect(screen.getByText("Add Hospital Form")).toBeInTheDocument();

    // Check if the input fields are initially empty
    expect(screen.getByPlaceholderText("Hospital's Name")).toHaveValue("");
    expect(screen.getByPlaceholderText("Address of Hospital")).toHaveValue("");
  });

  test("updates state when input fields change", () => {
    render(<AddHospital />);
    // Test input field changes...
    const nameInput = screen.getByPlaceholderText("Hospital's Name");
    const localityInput = screen.getByPlaceholderText("Address of Hospital");

    userEvent.type(nameInput, "Hospital A");
    userEvent.type(localityInput, "123 Main Street");

    expect(nameInput).toHaveValue("Hospital A");
    expect(localityInput).toHaveValue("123 Main Street");
  });

  test("submits form data successfully", async () => {
    // Test form submission...
    axios.post.mockResolvedValueOnce({ data: { success: true } });
    render(<AddHospital />);
    const nameInput = screen.getByPlaceholderText("Hospital's Name");
    const localityInput = screen.getByPlaceholderText("Address of Hospital");

    userEvent.type(nameInput, "Hospital A");
    userEvent.type(localityInput, "123 Main Street");

    const submitButton = screen.getByText("Submit");
    userEvent.click(submitButton);

    // Ensure that axios.post is called with the correct data
    await expect(axios.post).toHaveBeenCalledWith(
      "https://localhost:7264/api/Hospital",
      {
        hospitalName: "Hospital A",
        location: "123 Main Street",
      },
      expect.any(Object)
    );

    // Ensure that navigation happens after form submission
    expect(screen.getByText("Add Hospital Form")).toBeInTheDocument();
  });

  test("shows an alert if form submission fails", async () => {
    // Test form submission failure...
    const errorMessage = "Something went wrong!";
    axios.post.mockRejectedValueOnce({ response: { data: errorMessage } });
    render(<AddHospital />);
    const nameInput = screen.getByPlaceholderText("Hospital's Name");
    const localityInput = screen.getByPlaceholderText("Address of Hospital");

    userEvent.type(nameInput, "Hospital A");
    userEvent.type(localityInput, "123 Main Street");

    const submitButton = screen.getByText("Submit");
    userEvent.click(submitButton);

    // Ensure that axios.post is called with the correct data
    await expect(axios.post).toHaveBeenCalledWith(
      "https://localhost:7264/api/Hospital",
      {
        hospitalName: "Hospital A",
        location: "123 Main Street",
      },
      expect.any(Object)
    );

    // Ensure that the alert is shown with the correct error message
    expect(window.alert).toHaveBeenCalledWith(errorMessage);

    // Ensure that navigation happens after form submission
    expect(screen.getByText("Add Hospital Form")).toBeInTheDocument();
  });

  test("navigates to /hospital when back button is clicked", () => {
    render(<AddHospital />);
    // Test back button click...
    const backButton = screen.getByText("Back");

    userEvent.click(backButton);

    // Ensure that useNavigate is called with the correct path
    expect(useNavigate).toHaveBeenCalledWith("/hospital");
  });
});
