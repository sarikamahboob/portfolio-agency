import Link from 'next/link';
import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styles from "./Navbar.module.scss";

const Navbar = () => {
    const [nav, setNav] = useState(false);
    const handleNav = () => {
        setNav(!nav);
    }
    return (
        <div className={styles.navbar}>
            
            <div className={styles.navbarMain}>
                <Link href="/">
                    <h1>navbar</h1>
                </Link>
                
                <ul className={styles.navlist}>
                    <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>

                {/* Mobile Button */}
                <div className={styles.hamburger}>
                    {
                        nav? <AiOutlineClose  size={20}/> : <AiOutlineMenu size={20} />
                    }
                    
                    
                </div>
                {/* Mobile Menu */}
                <div>
                    <ul className={styles.mobileMenu}>
                        <li>
                        <Link href="/">Home</Link>
                    </li>
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/blog">Blog</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    </ul>
                </div>
           </div>
        </div>
    );
};

export default Navbar;