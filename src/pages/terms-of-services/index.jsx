import React from "react";
import { Typography } from "antd";
import styles from "@/styles/privacy-policy/Privacy.module.css";
import Link from "next/link";

const { Title, Paragraph, Text } = Typography;

class TermOfService extends React.Component {
  handleBack = () => {
    if (typeof window !== "undefined") window.history.back();
  };

  render() {
    return (
      <section className={styles.pageLayout}>
        <div className={styles.content}>
          <div className={styles.card}>
            <Title level={1} className={styles.title}>
              Terms of Service
            </Title>

            <Paragraph>
              Welcome to <strong>shoeshop</strong>. By accessing and using our
              services, you agree to be bound by the following terms.
            </Paragraph>

            <section className={styles.section}>
              <Title level={4}>1. Use of Services</Title>
              <Paragraph>
                Users agree to use the services in compliance with applicable
                laws and refrain from any activity that may harm others.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>2. Accounts & Access</Title>
              <Paragraph>
                Users are responsible for maintaining the security of their
                accounts, including passwords. We reserve the right to suspend
                or terminate accounts in case of violations.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>3. Orders & Payments</Title>
              <Paragraph>
                All transactions are subject to payment confirmation. We may
                cancel orders if fraud is detected or items are out of stock.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>4. Returns & Refunds</Title>
              <Paragraph>
                Return and refund policies follow the conditions stated on our
                Return Policy page. Refund claims must be supported with valid
                proof.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>5. Limitation of Liability</Title>
              <Paragraph>
                We are not responsible for indirect damages, data loss, or
                business interruptions resulting from the use of our services.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>6. Changes to Terms</Title>
              <Paragraph>
                These terms may be updated from time to time. Changes will be
                announced on our website and will take effect from the date of
                publication. Last updated on:
                <Text strong> September 1, 2025</Text>.
              </Paragraph>
            </section>

            <Paragraph className={styles.contact}>
              For questions regarding these terms, please contact us at:{" "}
              <Link href="mailto:legal@shoeshop.example">
                legal@shoeshop.example
              </Link>
            </Paragraph>
          </div>
        </div>
      </section>
    );
  }
}

export default TermOfService;
