import React from "react";
import { Navbar } from "../components/navbar";
import { Container } from "./style";
import { Routes, Route } from "react-router-dom";
import navbar from "../mock/navbar";

export const Root = () => {
  return (
    <Container>
      <Routes>
        <Route path="/" element={<Navbar />}>
          {navbar.map((value) => {
            return (
              <Route key={value.id} path={value.link} element={value.element} />
            );
          })}
        </Route>
      </Routes>
    </Container>
  );
};
