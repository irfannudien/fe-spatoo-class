"use client";

import React from "react";
import Link from "next/link";
import { withRouter } from "next/router";
import { ShoppingCartOutlined, UserOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";
import HamburgerMenu from "../hamburger";
import styles from "@/styles/header/Header.module.css";
import { jwtDecode } from "jwt-decode";
import { connect } from "react-redux";
import { getUserById } from "@/redux/actions/userAction";
import Image from "next/image";
import { Dropdown, Menu } from "antd";

class HeaderComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isScrolled: false,
      drawerVisible: false,

      user: null,
    };
  }

  async componentDidMount() {
    window.addEventListener("scroll", this.handleScrollBlur);

    const token = localStorage.getItem("token");
    if (!token) {
      return;
    }

    try {
      const decode = jwtDecode(token);
      const userId = decode.id;

      const result = await this.props.getUserById(userId);

      console.log("RESULT FROM HEADER", result.data);

      if (result.success) {
        this.setState({ user: result.data });
      } else {
        this.props.notificationApi.error({
          message: "Error",
          description: result.message,
        });
      }
    } catch (err) {
      console.log("Token decode error", err);
    }
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

  handleLogout = () => {
    localStorage.removeItem("token");
    this.setState({ user: null });
    this.props.router.push("/login");
  };

  render() {
    const { isScrolled, drawerVisible, user } = this.state;
    const { router } = this.props;

    const isPolicyPage =
      router.pathname === "/privacy-policy" ||
      router.pathname === "/terms-of-services" ||
      router.pathname === "/profile" ||
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

    // ==================== ANT DESIGN MENU ====================
    const menu = {
      items: [
        {
          key: "name",
          label: user?.name,
        },
        {
          key: "profile",
          label: <Link href="/profile">Edit Profile</Link>,
        },
        {
          key: "logout",
          label: (
            <button onClick={this.handleLogout} style={{ cursor: "pointer" }}>
              Logout
            </button>
          ),
        },
      ],
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

              {user ? (
                <Dropdown
                  menu={menu}
                  placement="bottomRight"
                  trigger={["click"]}
                >
                  {user.profile_picture ? (
                    <Image
                      src={user.profile_picture}
                      alt="avatar"
                      width={40}
                      height={40}
                      style={{ borderRadius: "50%", cursor: "pointer" }}
                    />
                  ) : (
                    <UserOutlined className={styles.icon} />
                  )}
                </Dropdown>
              ) : (
                <Link href="/login" className={styles.loginText}>
                  Login
                </Link>
              )}

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

export default connect(null, { getUserById })(withRouter(HeaderComponent));
