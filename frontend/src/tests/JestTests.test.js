import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HomePage from "../pages/Home/Home";
import AboutPage from "../pages/About/About";
import Navigation from "../components/Navigation/Navigation";

test("Testing Home Page", () => {
  render(<HomePage />, { wrapper: BrowserRouter });
  expect(screen.getByText("Welcome to ParkScape!")).toBeInTheDocument();
  expect(screen.getByText("Explore")).toBeInTheDocument();
  expect(screen.getByText("Parks")).toBeInTheDocument();
  expect(screen.getByText("Airports")).toBeInTheDocument();
  expect(screen.getByText("Cities")).toBeInTheDocument();
});

test("Testing About Page", () => {
  render(<AboutPage />, { wrapper: BrowserRouter });
  expect(screen.getByText("About ParkScape")).toBeInTheDocument();
  expect(screen.getByText("Our Team")).toBeInTheDocument();
  expect(screen.getByText("Total GitLab Statistics")).toBeInTheDocument();
  expect(screen.getByText("Tools")).toBeInTheDocument();
  expect(screen.getByText("APIs")).toBeInTheDocument();
});

test("Testing Navigation", () => {
  render(<Navigation />, { wrapper: BrowserRouter });
  expect(screen.getByText("Home")).toBeInTheDocument();
  expect(screen.getByText("About")).toBeInTheDocument();
  expect(screen.getByText("Parks")).toBeInTheDocument();
  expect(screen.getByText("Cities")).toBeInTheDocument();
  expect(screen.getByText("Airports")).toBeInTheDocument();
});
