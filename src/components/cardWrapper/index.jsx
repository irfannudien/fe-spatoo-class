import React from "react";
import styles from "@/styles/login/Login.module.css";
import { Card } from "antd";
import { withRouter } from "next/router";
import { AnimatePresence, motion } from "framer-motion";

class CardWrapper extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { title, children } = this.props;

    return (
      <div className={styles.container}>
        <div className={styles.overlay}></div>

        <div className={styles.inner}>
          <div className={styles.imgForm}></div>

          <Card
            className={styles.card}
            title={<span className={styles.cardTitle}>{title}</span>}
          >
            {children}
          </Card>
        </div>
      </div>
    );
  }
}

export default withRouter(CardWrapper);
