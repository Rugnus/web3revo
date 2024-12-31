"use client";

import { pxToRem, uiColors } from "@/shared";
import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: ${uiColors.white};

  h2 {
    letter-spacing: 7.5px;
    margin: ${pxToRem(20)} auto;
    font-size: ${pxToRem(32)};
    span {
      color: ${uiColors.secondary};
    }
  }
`;

export const UserNotLoginedGrid = styled.div`
  display: grid;
  width: 50%;
  margin-top: 0;
  grid-template-columns: 1fr 1fr 1fr;
  grid-template-rows: 1fr 1fr 1fr;
  gap: 10px;
  grid-template-areas:
    "Register Register Login"
    "Wiki Contact Contact"
    "Charts Charts Charts";
`;

export const SRouteButton = styled.button`
  padding: 10px 20px;
  height: 200px;
  background-color: #1a1a1d;
  color: ${uiColors.white};
  border: none;
  border-radius: 20px;
  cursor: pointer;
  font-size: 16px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  gap: 10px;

  -webkit-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  -moz-box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);
  box-shadow: 0px 5px 10px 2px rgba(34, 60, 80, 0.2);

  position: relative;
  &:hover::before {
    right: 0%;
    top: 0%;
    left: auto;
    width: 100%;
    height: 100%;
    border-radius: 20px;
    margin: 0;
    transform: scale(1);
  }
  &::before {
    display: block;
    position: absolute;
    top: 0px;
    bottom: 0px;
    right: 0px;
    height: 35px;
    width: 35px;
    margin: 8px;
    z-index: 10;
    content: "";
    border-radius: 50%;
    color: #000 !important;
    background: ${uiColors.secondary};
    transition: all 0.3s ease-in;
  }

  h3,
  p {
    margin: 0;
    text-align: start;
    z-index: 11;
  }

  h3 {
    letter-spacing: 2.5px;
    margin-top: 20px;
    font-size: ${pxToRem(30)};
  }

  p {
    opacity: 0.5;
    font-size: ${pxToRem(14)};
  }
`;
