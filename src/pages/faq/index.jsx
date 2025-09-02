import React, { Component } from "react";
import { Collapse, Divider, Typography, Select } from "antd";
import { RightOutlined } from "@ant-design/icons";
import styles from "@/styles/faq/Faq.module.css";

const { Title, Text } = Typography;
const { Option } = Select;

export default class FAQ extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeTopic: "topic-0",
    };
  }

  handleScroll = (key) => {
    this.setState({ activeTopic: key });
    const el = document.getElementById(key);
    if (el) {
      const y = el.offsetTop - 70;
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
              <li
                className={activeTopic === "topic-0" ? styles.active : ""}
                onClick={() => this.handleScroll("topic-0")}
              >
                General
              </li>
              <li
                className={activeTopic === "topic-1" ? styles.active : ""}
                onClick={() => this.handleScroll("topic-1")}
              >
                Shipping
              </li>
              <li
                className={activeTopic === "topic-2" ? styles.active : ""}
                onClick={() => this.handleScroll("topic-2")}
              >
                Payment
              </li>
              <li
                className={activeTopic === "topic-3" ? styles.active : ""}
                onClick={() => this.handleScroll("topic-3")}
              >
                Returns & Refunds
              </li>
              <li
                className={activeTopic === "topic-4" ? styles.active : ""}
                onClick={() => this.handleScroll("topic-4")}
              >
                Products & Stock
              </li>
            </ul>
          </div>

          <div className={styles.dropdownList}>
            <Select
              value={activeTopic}
              onChange={(value) => this.handleScroll(value)}
              className={styles.sidebarDropdown}
            >
              <Option value="topic-0">General</Option>
              <Option value="topic-1">Shipping</Option>
              <Option value="topic-2">Payment</Option>
              <Option value="topic-3">Returns & Refunds</Option>
              <Option value="topic-4">Products & Stock</Option>
            </Select>
          </div>

          <div className={styles.content}>
            <div
              id="topic-0"
              style={{
                border: "1px solid #dadada",
                borderRadius: 20,
                padding: 20,
              }}
            >
              <Divider orientation="left" className={styles.divTitleTopic}>
                <Title level={3} className={styles.titleTopic}>
                  General
                </Title>
              </Divider>
              <Collapse
                accordion
                bordered={false}
                items={[
                  {
                    key: "topic-0-0",
                    label: "Are all products guaranteed to be original?",
                    children: (
                      <p>
                        Yes, all our products are 100% original from official
                        brands.
                      </p>
                    ),
                  },
                  {
                    key: "topic-0-1",
                    label: "How do I create an account?",
                    children: (
                      <p>
                        Click the Sign Up button at the top right, fill in your
                        details, and verify your email.
                      </p>
                    ),
                  },
                  {
                    key: "topic-0-2",
                    label: "Is there a mobile app?",
                    children: (
                      <p>
                        Yes, it is available on both the Play Store and App
                        Store.
                      </p>
                    ),
                  },
                  {
                    key: "topic-0-3",
                    label: "Is there a loyalty or points program?",
                    children: (
                      <p>
                        Yes, each purchase earns points that can be redeemed for
                        discounts.
                      </p>
                    ),
                  },
                  {
                    key: "topic-0-4",
                    label: "How can I contact customer service?",
                    children: (
                      <p>
                        You can contact us via live chat or email at
                        support@mail.com.
                      </p>
                    ),
                  },
                ]}
              />
            </div>

            <div
              id="topic-1"
              style={{
                border: "1px solid #dadada",
                borderRadius: 20,
                padding: 20,
              }}
            >
              <Divider orientation="left" className={styles.divTitleTopic}>
                <Title level={3} className={styles.titleTopic}>
                  Shipping
                </Title>
              </Divider>
              <Collapse
                accordion
                bordered={false}
                items={[
                  {
                    key: "topic-1-0",
                    label: "How long does shipping take?",
                    children: (
                      <p>
                        1-3 days for Jabodetabek, 3-7 days for other cities.
                      </p>
                    ),
                  },
                  {
                    key: "topic-1-1",
                    label: "Is there free shipping?",
                    children: (
                      <p>Free shipping for purchases over IDR 500,000.</p>
                    ),
                  },
                  {
                    key: "topic-1-2",
                    label: "Do you ship nationwide?",
                    children: <p>Yes, we deliver throughout Indonesia.</p>,
                  },
                  {
                    key: "topic-1-3",
                    label: "Can I choose my own courier?",
                    children: (
                      <p>
                        Yes, you can select JNE, Sicepat, Anteraja, or J&T at
                        checkout.
                      </p>
                    ),
                  },
                  {
                    key: "topic-1-4",
                    label: "Can I pick up in-store?",
                    children: (
                      <p>Currently, in-store pickup is not available.</p>
                    ),
                  },
                  {
                    key: "topic-1-5",
                    label: "How can I track my order?",
                    children: (
                      <p>
                        You can track your order on the 'Track Order' page using
                        the tracking number.
                      </p>
                    ),
                  },
                ]}
              />
            </div>

            <div
              id="topic-2"
              style={{
                border: "1px solid #dadada",
                borderRadius: 20,
                padding: 20,
              }}
            >
              <Divider orientation="left" className={styles.divTitleTopic}>
                <Title level={3} className={styles.titleTopic}>
                  Payment
                </Title>
              </Divider>
              <Collapse
                accordion
                bordered={false}
                items={[
                  {
                    key: "topic-2-0",
                    label: "What payment methods are available?",
                    children: (
                      <p>Bank transfer, e-wallet, credit card, and COD.</p>
                    ),
                  },
                  {
                    key: "topic-2-1",
                    label: "Is COD (Cash on Delivery) available?",
                    children: <p>Yes, COD is available for certain areas.</p>,
                  },
                  {
                    key: "topic-2-2",
                    label: "Is my payment secure?",
                    children: (
                      <p>
                        Yes, all payments are processed through a secure and
                        encrypted system.
                      </p>
                    ),
                  },
                  {
                    key: "topic-2-3",
                    label: "Can I pay in installments?",
                    children: (
                      <p>
                        Yes, installments are available with certain credit
                        cards.
                      </p>
                    ),
                  },
                  {
                    key: "topic-2-4",
                    label: "Do you accept e-wallets (OVO, GoPay)?",
                    children: (
                      <p>Yes, we accept payments via OVO, GoPay, and Dana.</p>
                    ),
                  },
                  {
                    key: "topic-2-5",
                    label: "What if my payment fails?",
                    children: (
                      <p>
                        Please retry the transaction or contact our customer
                        service.
                      </p>
                    ),
                  },
                ]}
              />
            </div>

            <div
              id="topic-3"
              style={{
                border: "1px solid #dadada",
                borderRadius: 20,
                padding: 20,
              }}
            >
              <Divider orientation="left" className={styles.divTitleTopic}>
                <Title level={3} className={styles.titleTopic}>
                  Returns & Refunds
                </Title>
              </Divider>
              <Collapse
                accordion
                bordered={false}
                items={[
                  {
                    key: "topic-3-0",
                    label: "Can I exchange my shoe size?",
                    children: (
                      <p>
                        Yes, as long as the product is unused and in its
                        original condition.
                      </p>
                    ),
                  },
                  {
                    key: "topic-3-1",
                    label: "How long do I have to request a return?",
                    children: <p>Up to 7 days after receiving the item.</p>,
                  },
                  {
                    key: "topic-3-2",
                    label: "How do I request a return?",
                    children: (
                      <p>
                        Log in to your account, select the order, and click
                        Request Return.
                      </p>
                    ),
                  },
                  {
                    key: "topic-3-3",
                    label: "Does the buyer pay for return shipping?",
                    children: <p>Yes, except in cases of our error.</p>,
                  },
                  {
                    key: "topic-3-4",
                    label: "How long does a refund take?",
                    children: (
                      <p>
                        Refunds are processed within 3-5 business days after
                        receiving the item.
                      </p>
                    ),
                  },
                  {
                    key: "topic-3-5",
                    label: "Can I exchange for a different product?",
                    children: (
                      <p>
                        Yes, as long as the stock is available and return
                        policies are met.
                      </p>
                    ),
                  },
                ]}
              />
            </div>

            <div
              id="topic-4"
              style={{
                border: "1px solid #dadada",
                borderRadius: 20,
                padding: 20,
              }}
            >
              <Divider orientation="left" className={styles.divTitleTopic}>
                <Title level={3} className={styles.titleTopic}>
                  Products & Stock
                </Title>
              </Divider>
              <Collapse
                accordion
                bordered={false}
                items={[
                  {
                    key: "topic-4-0",
                    label: "Is the stock on the website always updated?",
                    children: <p>Yes, our stock is updated in real-time.</p>,
                  },
                  {
                    key: "topic-4-1",
                    label: "Are there limited edition products?",
                    children: (
                      <p>
                        Yes, we frequently release exclusive products with
                        limited stock.
                      </p>
                    ),
                  },
                  {
                    key: "topic-4-2",
                    label: "How do I know the right size?",
                    children: (
                      <p>Use the size guide available on the product page.</p>
                    ),
                  },
                  {
                    key: "topic-4-3",
                    label: "Is there a warranty for shoes?",
                    children: (
                      <p>
                        Yes, the official brand warranty applies to every
                        product.
                      </p>
                    ),
                  },
                  {
                    key: "topic-4-4",
                    label: "Can products be pre-ordered?",
                    children: <p>Yes, certain products can be pre-ordered.</p>,
                  },
                  {
                    key: "topic-4-5",
                    label: "Are there discounts for bulk purchases?",
                    children: (
                      <p>
                        Yes, wholesale discounts are available for bulk
                        purchases.
                      </p>
                    ),
                  },
                ]}
              />
            </div>
          </div>
        </div>
      </section>
    );
  }
}
