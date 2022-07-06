import Head from "next/head";
import Link from "next/link";
import { useState, useEffect } from "react";
import Heading from "../../components/Heading";
import Preloader from "../../components/Preloader";
import { GetStaticProps } from "next";
import { FC } from "react";
import { UserType } from "../../types";

type UsersTypeProps = {
  users: [UserType];
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    if (!data) {
      return {
        notFound: true,
      };
    }
    return {
      props: {
        users: data,
      },
    };
  } catch {
    return {
      props: {
        users: null,
      },
    };
  }
};

const Users: FC<UsersTypeProps> = ({ users }) => {
  const [isLoading, setLoading] = useState<any>(true);

  useEffect(() => {
    if (users) {
      setLoading(false);
    }
  }, [users]);

  return (
    <>
      <Head>
        <title>Users</title>
      </Head>
      <Heading text="Users list" />
      <div>
        <ul>
          {isLoading ? (
            <Preloader />
          ) : (
            users &&
            users.map(({ id, name, company }) => (
              <Link key={id} href={`/users/${id}`}>
                <li
                  style={{
                    cursor: "pointer",
                    marginBottom: "50px",
                    background: "black",
                    padding: "10px",
                    borderRadius: "10px",
                  }}
                >
                  <p>
                    Name: <strong>{name}</strong>
                  </p>
                  <p>
                    Company: <strong>{company.name}</strong>
                  </p>
                </li>
              </Link>
            ))
          )}
        </ul>
      </div>
    </>
  );
};
export default Users;
