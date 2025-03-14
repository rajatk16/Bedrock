import { PadBox } from "@bedrock-layout/padbox";
import styled from "styled-components";

export const Box = styled(PadBox).attrs(() => ({ padding: "lg" }))`
  border: 1px solid black;
  text-align: center;
`;
