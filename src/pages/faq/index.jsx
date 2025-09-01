import React, { Component } from "react";
import { Collapse, Divider, Typography } from "antd";
import { RightOutlined } from "@ant-design/icons";
import styles from "@/styles/faq/Faq.module.css";

const { Title, Text } = Typography;

const topics = [
  {
    key: "topic-0",
    title: "General",
    faqs: [
      {
        q: "Are all products guaranteed to be original?",
        a: "Yes, all our products are 100% original from official brands.",
      },
      {
        q: "How do I create an account?",
        a: "Click the Sign Up button at the top right, fill in your details, and verify your email.",
      },
      {
        q: "Is there a mobile app?",
        a: "Yes, it is available on both the Play Store and App Store.",
      },
      {
        q: "Is there a loyalty or points program?",
        a: "Yes, each purchase earns points that can be redeemed for discounts.",
      },
      {
        q: "How can I contact customer service?",
        a: "You can contact us via live chat or email at support@mail.com.",
      },
    ],
  },
  {
    key: "topic-1",
    title: "Shipping",
    faqs: [
      {
        q: "How long does shipping take?",
        a: "1-3 days for Jabodetabek, 3-7 days for other cities.",
      },
      {
        q: "Is there free shipping?",
        a: "Free shipping for purchases over IDR 500,000.",
      },
      {
        q: "Do you ship nationwide?",
        a: "Yes, we deliver throughout Indonesia.",
      },
      {
        q: "Can I choose my own courier?",
        a: "Yes, you can select JNE, Sicepat, Anteraja, or J&T at checkout.",
      },
      {
        q: "Can I pick up in-store?",
        a: "Currently, in-store pickup is not available.",
      },
      {
        q: "How can I track my order?",
        a: "You can track your order on the 'Track Order' page using the tracking number.",
      },
    ],
  },
  {
    key: "topic-2",
    title: "Payment",
    faqs: [
      {
        q: "What payment methods are available?",
        a: "Bank transfer, e-wallet, credit card, and COD.",
      },
      {
        q: "Is COD (Cash on Delivery) available?",
        a: "Yes, COD is available for certain areas.",
      },
      {
        q: "Is my payment secure?",
        a: "Yes, all payments are processed through a secure and encrypted system.",
      },
      {
        q: "Can I pay in installments?",
        a: "Yes, installments are available with certain credit cards.",
      },
      {
        q: "Do you accept e-wallets (OVO, GoPay)?",
        a: "Yes, we accept payments via OVO, GoPay, and Dana.",
      },
      {
        q: "What if my payment fails?",
        a: "Please retry the transaction or contact our customer service.",
      },
    ],
  },
  {
    key: "topic-3",
    title: "Returns & Refunds",
    faqs: [
      {
        q: "Can I exchange my shoe size?",
        a: "Yes, as long as the product is unused and in its original condition.",
      },
      {
        q: "How long do I have to request a return?",
        a: "Up to 7 days after receiving the item.",
      },
      {
        q: "How do I request a return?",
        a: "Log in to your account, select the order, and click Request Return.",
      },
      {
        q: "Does the buyer pay for return shipping?",
        a: "Yes, except in cases of our error.",
      },
      {
        q: "How long does a refund take?",
        a: "Refunds are processed within 3-5 business days after receiving the item.",
      },
      {
        q: "Can I exchange for a different product?",
        a: "Yes, as long as the stock is available and return policies are met.",
      },
    ],
  },
  {
    key: "topic-4",
    title: "Products & Stock",
    faqs: [
      {
        q: "Is the stock on the website always updated?",
        a: "Yes, our stock is updated in real-time.",
      },
      {
        q: "Are there limited edition products?",
        a: "Yes, we frequently release exclusive products with limited stock.",
      },
      {
        q: "How do I know the right size?",
        a: "Use the size guide available on the product page.",
      },
      {
        q: "Is there a warranty for shoes?",
        a: "Yes, the official brand warranty applies to every product.",
      },
      {
        q: "Can products be pre-ordered?",
        a: "Yes, certain products can be pre-ordered.",
      },
      {
        q: "Are there discounts for bulk purchases?",
        a: "Yes, wholesale discounts are available for bulk purchases.",
      },
    ],
  },
];

export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTopic: "topic-0",
    };
  }

  handleScroll = (id) => {
    this.setState({ activeTopic: id });
    const element = document.getElementById(id);
    if (element) {
      const yOffset = -80; // jika ada navbar fixed
      const y =
        element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  render() {
    const { activeTopic } = this.state;

    return (
      <section className={styles.faqSection}>
        <div className={styles.faqTitleContainer}>
          <div className={styles.overlay}></div>
          <div className={styles.textContainer}>
            <Title level={1} className={styles.titleSatu}>
              Get the Answers You Need
            </Title>
            <Text className={styles.titleDua}>
              The answer to the questions our clients ask most-made simple
            </Text>
          </div>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.sidebarleft}>
            <Text className={styles.titleSideBarTopic}>Page topics</Text>

            <ul className={styles.sidebarList}>
              {topics.map((topic) => (
                <li
                  key={topic.key}
                  className={activeTopic === topic.key ? styles.active : ""}
                  onClick={() => this.handleScroll(topic.key)}
                >
                  {topic.title}
                </li>
              ))}
            </ul>
          </div>

          <div className={styles.dropdownList}>
            <select
              value={activeTopic}
              onChange={(e) => this.handleScroll(e.target.value)}
              className={styles.sidebarDropdown}
            >
              {topics.map((topic) => (
                <option key={topic.key} value={topic.key}>
                  {topic.title}
                </option>
              ))}
            </select>
          </div>

          <div className={styles.content}>
            {topics.map((topic) => (
              <div
                id={topic.key}
                key={topic.key}
                style={{
                  border: "1px solid #dadada",
                  borderRadius: "20px",
                  padding: "20px",
                }}
              >
                <Divider orientation="left" className={styles.divTitleTopic}>
                  <Title level={3} className={styles.titleTopic}>
                    {topic.title}
                  </Title>
                </Divider>
                {/* <Title level={3} className={styles.titleTopic}>
                  {topic.title}
                </Title> */}
                <Collapse
                  accordion
                  bordered={false}
                  expandIcon={({ isActive }) => (
                    <RightOutlined rotate={isActive ? 90 : 0} />
                  )}
                  items={topic.faqs.map((faq, index) => ({
                    key: `${topic.key}-${index}`,
                    label: faq.q,
                    children: <p>{faq.a}</p>,
                  }))}
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }
}
