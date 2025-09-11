import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import styles from "@/styles/header/Header.module.css";
import Link from "next/link";

class HamburgerMenu extends React.Component {
  render() {
    const { visible, onClose } = this.props;

    return (
      <AnimatePresence>
        {visible && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.4, ease: "easeInOut" }}
            className={styles.hamburgerDrawer}
          >
            <div className={styles.drawerLinks}>
              <Link href="/" onClick={onClose}>
                Home
              </Link>
              <Link href="/about-us" onClick={onClose}>
                About
              </Link>
              <Link href="/faq" onClick={onClose}>
                FAQ
              </Link>
              <Link href="/privacy-policy" onClick={onClose}>
                Privacy Policy
              </Link>
              <Link href="/terms-of-services" onClick={onClose}>
                Terms of Services
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    );
  }
}

export default HamburgerMenu;
