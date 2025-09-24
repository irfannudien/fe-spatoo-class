import React from "react";
import styles from "@/styles/login/Login.module.css";
import { Card } from "antd";
import FormButton from "../formButton";

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
        <Card
          className={styles.card}
          title={<span style={{ fontSize: 24, fontWeight: 600 }}>{title}</span>}
        >
          {children}
        </Card>
      </div>
    );
  }
}

export default CardWrapper;
