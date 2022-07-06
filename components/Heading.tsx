type Args = {
  tag?: any;
  text?: string;
};

const Heading = ({ tag, text }: Args) => {
  const Tag = tag || "h1";

  return <Tag>{text}</Tag>;
};

export default Heading;
