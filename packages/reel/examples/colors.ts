import styled from "styled-components";
export const colors: string[] = [
  "Lavender",
  "Thistle",
  "Plum",
  "Orchid",
  "Violet",
  "Fuchsia",
  "Magenta",
  "MediumOrchid",
  "DarkOrchid",
  "DarkViolet",
  "BlueViolet",
  "DarkMagenta",
  "Purple",
  "MediumPurple",
  "MediumSlateBlue",
  "SlateBlue",
  "DarkSlateBlue",
  "RebeccaPurple",
  "Indigo",
];

export const ColoredRect = styled.div`
  ${(props) => (props.color ? `background-color: ${props.color};` : "")}
  padding: 100px;
  text-align: center;
`;
ColoredRect.displayName = "ColoredRect";

export const argTypes = {
  gutter: {
    description: "Sets space between each element",
    type: { name: "string", required: true },
    table: {
      type: { summary: "string" },
    },
    control: "select",
    options: [
      "none",
      "xxs",
      "xs",
      "sm",
      "md",
      "mdLg",
      "lg",
      "lgXl",
      "xl",
      "xlXXl",
      "xxl",
    ],
  },
  snapType: {
    description: "Sets the scroll snap type",
    defaultValue: "none",
    type: { name: "string" },
    table: {
      type: { summary: "string" },
    },
    control: "select",
    options: ["none", "proximity", "mandatory"],
  },
};
