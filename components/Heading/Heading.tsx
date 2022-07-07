import { FC } from "react";

type Args = {
  tag?: any;
  text?: string;
};

const Heading: FC<Args> = ({ tag, text }) => {
  const Tag = tag || "h1";

  return <Tag data-testid="head">{text}</Tag>;
};

export default Heading;
