import { FC } from "react";
import Heading from "../Heading/Heading";
import { UserType } from "../../types";

type UserInfoProps = {
  user: UserType;
};

const UserInfo: FC<UserInfoProps> = ({ user }) => {
  const { name, username, email, address, phone, website, company } =
    user || {};

  if (!user) {
    return <Heading text="User not found" />;
  }

  return (
    <>
      <Heading tag={"h3"} text={name} />
      <ul>
        <li>
          <strong>Username: </strong>
          {username}
        </li>
        <li>
          <strong>Email: </strong>
          {email}
        </li>
        <li>
          <strong>City: </strong>
          {address.city}
        </li>
        <li>
          <strong>Phone number: </strong>
          {phone}
        </li>
        <li>
          <strong>Website: </strong>
          {website}
        </li>
        <li>
          <strong>Company name: </strong>
          {company.name}
        </li>
      </ul>
    </>
  );
};

export default UserInfo;
