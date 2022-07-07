import Head from "next/head";
import Back from "../../components/BackButton/Back";
import UserInfo from "../../components/UserInfo/UserInfo";
import { GetServerSideProps } from "next";
import { FC } from "react";
import { UserType } from "../../types";

type UserTypeProps = {
  user: UserType;
};

export const getServerSideProps: GetServerSideProps = async (context: any) => {
  const { id } = context.params;
  console.log(id);
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users/${id}`
  );
  const data = await response.json();

  if (!data) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: data,
    },
  };
};

const User: FC<UserTypeProps> = ({ user }) => {
  return (
    <>
      <Head>
        <title>User page</title>
      </Head>

      <UserInfo user={user} />

      <Back />
    </>
  );
};
export default User;
