import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import logo from "../../../public/images/logo1.png";
import styles from "./Navbar.module.scss";

const Navbar = () => {
  const data = [
    {
      id: 1,
      name: "Home",
      link: "/",
    },
    {
      id: 2,
      name: "About",
      link: "/about",
    },
    {
      id: 3,
      name: "Blog",
      link: "/blog",
    },
    {
      id: 4,
      name: "Contact",
      link: "/contact",
    },
  ];
  const [active, setActive] = useState(false);
  const [navActive, setNavActive] = useState(0);

  return (
    <div className={styles.navbar}>
      <div className={styles.webNav}>
        <div className={styles.wrapper}>
          <Link href="/">
            <Image src={logo} alt="logo" width={127} height={60} />
          </Link>
          <div className={styles.navLinks}>
            {data.map((item, index) => (
              <Link
                href={item.link}
                key={item.id}
                onClick={() => setNavActive(item.id)}
                className={`${styles.notActiveLink} ${
                  navActive === item.id && styles.activeLink
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          <div className={styles.getTouchButton}>
            <button href="">Get in Touch</button>
          </div>
        </div>
      </div>
      <div>
        <div className={styles.mobileNav}>
          <div className={styles.wrapper}>
            <Link href="/">
              <Image src={logo} alt="logo" width={127} height={60} />
            </Link>
            <div onClick={() => setActive(!active)} className={styles.iconMenu}>
              <div
                className={active ? styles.activeHamburger : styles.hamburger}
              ></div>
            </div>
          </div>
        </div>
        <div className={active ? styles.activeSideNav : styles.sidenav}>
          <ul className={styles.ul}>
            {data.map((item, index) => (
              <li key={item.id}>
                <Link href={item.link}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
