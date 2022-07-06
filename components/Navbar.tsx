import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import { useRouter } from "next/router";
import styles from "../styles/Navbar.module.scss";

const navigation = [
  { id: 1, title: "Home", path: "/" },
  { id: 2, title: "Users", path: "/users" },
];

const Navbar: FC = () => {
  const { pathname } = useRouter();

  return (
    <nav className={styles.nav}>
      <div className={styles.logo}>
        <Link href="/">
          <a>
            <Image src="/vercel.svg" width="80" height="80" alt="logo" />
          </a>
        </Link>
      </div>
      <div className={styles.links}>
        {navigation.map(({ id, title, path }) => (
          <Link key={id} href={path}>
            <a className={pathname === path ? styles.active : ""}>{title}</a>
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
