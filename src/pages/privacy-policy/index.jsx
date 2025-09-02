import React from "react";
import { Typography } from "antd";

import styles from "@/styles/privacy-policy/Privacy.module.css";
import Link from "next/link";

const { Title, Paragraph } = Typography;

class PrivacyPolicy extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <section className={styles.pageLayout}>
        <div className={styles.content}>
          <div className={styles.card}>
            <Title level={1} className={styles.title}>
              Privacy Policy
            </Title>

            <Paragraph className={styles.paragraph}>
              At <strong>shoeshop</strong>, we respect our users' privacy. This
              document explains how we collect, use, store, and protect your
              data when you use our services.
            </Paragraph>

            <section className={styles.section}>
              <Title level={4}>1. Information We Collect</Title>
              <Paragraph>
                a. Information you provide directly: name, email, address, phone
                number, payment details (via third-party payment providers).
                <br />
                b. Technical data: IP address, device type, browser, and usage
                information (cookies & analytics).
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>2. Purpose of Data Use</Title>
              <Paragraph>
                - To process orders and payments.
                <br />
                - To send order status updates and important notifications.
                <br />
                - To improve our services and personalize user experience.
                <br />- To comply with legal obligations when required.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>3. Sharing & Third Parties</Title>
              <Paragraph>
                We may share data with service providers (payment gateways,
                couriers, analytics services). We do not sell your personal data
                to third parties for marketing purposes.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>4. Data Security</Title>
              <Paragraph>
                We use industry-standard security practices to protect your
                data. However, no data transmission over the internet is 100%
                secure — therefore we cannot guarantee absolute security.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>5. User Rights</Title>
              <Paragraph>
                Users have the right to access, correct, or request deletion of
                their data. For requests, please contact us via email:{" "}
                <Link href="mailto:support@shoeshop.example">
                  support@shoeshop.example
                </Link>
                .
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>6. Policy Changes</Title>
              <Paragraph>
                We may update this policy from time to time. Significant changes
                will be communicated through our website or email. Last updated
                on: <strong>September 1, 2025</strong>.
              </Paragraph>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default PrivacyPolicy;
