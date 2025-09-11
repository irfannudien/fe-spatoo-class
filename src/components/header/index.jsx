"use client";

import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { ShoppingCartOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import HamburgerMenu from "../hamburger";
import styles from "@/styles/header/Header.module.css";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
      drawerVisible: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScrollBlur);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScrollBlur);
  }

  handleScrollBlur = () => {
    this.setState({ isScrolled: window.scrollY > 50 });
  };

  toggleDrawer = () => {
    this.setState({ drawerVisible: !this.state.drawerVisible });
  };

  render() {
    const { isScrolled, drawerVisible } = this.state;
    const { router } = this.props;

    const isPolicyPage =
      router.pathname === "/privacy-policy" ||
      router.pathname === "/terms-of-services" ||
      router.pathname === "/";

    const topBarVariants = {
      open: {
        y: [0, 6, 6],
        rotate: [0, 0, 45],
        transition: { duration: 0.3, ease: "easeInOut" },
      },
      closed: {
        y: [10, 10, 0],
        rotate: [45, 0, 0],
        transition: { duration: 0.3, ease: "easeInOut" },
      },
    };

    const centerBarVariants = {
      open: {
        rotate: [0, 0, -45],
        transition: { duration: 0.3, ease: "easeInOut" },
      },
      closed: {
        rotate: [-45, 0, 0],
        transition: { duration: 0.3, ease: "easeInOut" },
      },
    };

    const bottomBarVariants = {
      open: {
        y: [0, -10, -12],
        rotate: [0, 0, 45],
        transition: { duration: 0.3, ease: "easeInOut" },
      },
      closed: {
        y: [-10, -10, 0],
        rotate: [45, 0, 0],
        transition: { duration: 0.3, ease: "easeInOut" },
      },
    };

    return (
      <>
        <div
          className={styles.headerWrapper}
          style={{
            backgroundColor: isPolicyPage
              ? "rgba(0,0,0,.5)"
              : isScrolled
              ? "rgba(0,0,0,0.4)"
              : "rgba(0,0,0,0)",
            backdropFilter: isPolicyPage
              ? "none"
              : isScrolled
              ? "blur(10px)"
              : "none",
          }}
        >
          <div className={styles.headerContent}>
            <div className={styles.logo}>Logo</div>

            <div className={styles.navLinks}>
              <Link href="/" className={styles.navLink}>
                Home
              </Link>
              <Link href="/about-us" className={styles.navLink}>
                About
              </Link>
              <Link href="/faq" className={styles.navLink}>
                FAQ
              </Link>
              <Link href="/privacy-policy" className={styles.navLink}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-services" className={styles.navLink}>
                Terms of Services
              </Link>
            </div>

            <div className={styles.mobileMenu}>
              <ShoppingCartOutlined
                className={`${styles.icon} ${styles.iconShop}`}
              />

              <button
                className={styles.hamburgerButton}
                onClick={this.toggleDrawer}
              >
                <motion.span
                  className={styles.hamburgerBarTop}
                  variants={topBarVariants}
                  animate={drawerVisible ? "open" : "closed"}
                />
                <motion.span
                  className={styles.hamburgerBarCenter}
                  variants={centerBarVariants}
                  animate={drawerVisible ? "open" : "closed"}
                />
                <motion.span
                  className={styles.hamburgerBarBottom}
                  variants={bottomBarVariants}
                  animate={drawerVisible ? "open" : "closed"}
                />
              </button>
            </div>
          </div>
        </div>

        <HamburgerMenu visible={drawerVisible} onClose={this.toggleDrawer} />
      </>
    );
  }
}

export default withRouter(HeaderComponent);
