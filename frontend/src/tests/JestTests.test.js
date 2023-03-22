import React from "react";
import { BrowserRouter } from "react-router-dom";

import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";

import HomePage from "../pages/Home/Home";
import AboutPage from "../pages/About/About";
import Navigation from "../components/Navigation/Navigation";
import CityCard from "../components/CityCard/CityCard";
import AirportCard from "../components/AirportCard/AirportCard";
import ParkCard from "../components/ParkCard/ParkCard";
import DeveloperCard from "../components/DeveloperCard/DeveloperCard";
import ToolCard from "../components/ToolCard/ToolCard";

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
<<<<<<< HEAD
  expect(screen.getByText("Our Team")).toBeInTheDocument();
  expect(screen.getByText("Total GitLab Statistics")).toBeInTheDocument();
=======
});

test("Testing Gitlab Stats Rendering in About Page", () => {
  render(<AboutPage />, { wrapper: BrowserRouter });
  expect(screen.getByText("Our Team")).toBeInTheDocument();
  expect(screen.getByText("Total GitLab Statistics")).toBeInTheDocument();
});

test("Testing Tool and API information Rendering in About Page", () => {
  render(<AboutPage />, { wrapper: BrowserRouter });
>>>>>>> 977cd985ee8c557e9986c6fa89c3174470d50e18
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

test("Testing City Card", () => {
  render(<CityCard />, { wrapper: BrowserRouter });
  expect(screen.getByTestId("city-card")).toBeInTheDocument();
});

test("Testing Airport Card", () => {
  render(<AirportCard />, { wrapper: BrowserRouter });
  expect(screen.getByTestId("airport-card")).toBeInTheDocument();
});

test("Testing Park Card", () => {
  render(<ParkCard />, { wrapper: BrowserRouter });
  expect(screen.getByTestId("park-card")).toBeInTheDocument();
});

test("Testing Developer Card", () => {
<<<<<<< HEAD
  render(<ToolCard />, { wrapper: BrowserRouter });
  expect(screen.getByTestId("tool-card")).toBeInTheDocument();
});

test("Testing Tool Card", () => {
  render(<DeveloperCard />, { wrapper: BrowserRouter });
  expect(screen.getByTestId("dev-card")).toBeInTheDocument();
});
=======
  render(<DeveloperCard />, { wrapper: BrowserRouter });
  expect(screen.getByTestId("dev-card")).toBeInTheDocument();
});

test("Testing Tool Card", () => {
  render(<ToolCard />, { wrapper: BrowserRouter });
  expect(screen.getByTestId("tool-card")).toBeInTheDocument();
});
>>>>>>> 977cd985ee8c557e9986c6fa89c3174470d50e18
