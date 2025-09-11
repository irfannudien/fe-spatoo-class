import React from "react";
import Head from "next/head";
import {
  Row,
  Col,
  Card,
  Typography,
  Space,
  Divider,
  // Image,
  Carousel,
} from "antd";
import {
  TrophyOutlined,
  CheckCircleOutlined,
  TruckOutlined,
  SmileOutlined,
  ShoppingOutlined,
  FireOutlined,
  StarOutlined,
} from "@ant-design/icons";
import styles from "@/styles/about-us/AboutUs.module.css";
import Image from "next/image";

const { Title, Paragraph, Text } = Typography;

const faqData = [
  {
    title: "CARD 1",
    bg: "/assets/bg/bg-cat2.jpg",
  },
  {
    title: "CARD 2",
    bg: "/assets/bg/bg-cat2.jpg",
  },
  {
    title: "CARD 3",
    bg: "/assets/bg/bg-cat2.jpg",
  },
  {
    title: "CARD 4",
    bg: "/assets/bg/bg-cat2.jpg",
  },
];

class AboutUsPage extends React.Component {
  renderHero() {
    return (
      <section className={styles.heroSection}>
        <div className={styles.overlay}></div>
        <div className={styles.hero}>
          <Title style={{ color: "#fff" }}>About Us</Title>
          <Text style={{ color: "#fff" }}>Home / About Us</Text>
        </div>
      </section>
    );
  }

  renderStory() {
    return (
      <section className={styles.storySection}>
        <div className={styles.storyContainer}>
          <div className={styles.storyContent}>
            <div className={styles.imageFlexRow}>
              <div
                className={`${styles.storyImgBox} ${styles.imgContainerLeft}`}
              >
                <div className={styles.imgBoxLeft}>
                  <Image
                    className={styles.imgStory}
                    src="/assets/bg/bg-cat2.jpg"
                    alt="Story 1"
                    fill
                  />
                </div>
              </div>
              <div
                className={`${styles.storyImgBox} ${styles.imgContainerRight}`}
              >
                <div className={styles.imgBoxRight}>
                  <Image
                    className={styles.imgStory}
                    src="/assets/bg/bg-cat2.jpg"
                    alt="Story 2"
                    fill
                  />
                </div>
              </div>
            </div>

            <div className={styles.textBox}>
              <div className={styles.titleStory}>
                <span className={styles.titleLine}></span>
                <Text className={styles.smallTitle}>Our Story</Text>
              </div>
              <Title level={2} className={styles.bigTitle}>
                The Journey Behind Every Step
              </Title>

              <Text className={styles.storyValueText}>
                Since 2015, we have been driven by one mission: to bring
                authentic sneakers from the world’s top brands into everyone’s
                hands. With more than 10 years of experience, we have proudly
                served hundreds of thousands of satisfied customers, both
                locally and internationally.
              </Text>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderAchievements() {
    return (
      <section className={styles.achievementSection}>
        <div className={styles.overlay} />
        <div className={styles.achievementContent}>
          <div className={styles.achievementCard} variant="borderless">
            <TrophyOutlined className={styles.icon} />
            <Text className={styles.cardTitle}>Years of Experience</Text>
            <span className={styles.cardDivider}></span>
            <Text className={styles.cardValue}>10+</Text>
          </div>

          <div className={styles.achievementCard} variant="borderless">
            <SmileOutlined className={styles.icon} />
            <Text className={styles.cardTitle}>Happy Customers</Text>
            <span className={styles.cardDivider}></span>
            <Text className={styles.cardValue}>500k+</Text>
          </div>

          <div className={styles.achievementCard} variant="borderless">
            <CheckCircleOutlined className={styles.icon} />
            <Text className={styles.cardTitle}>Pairs of Shoes Sold</Text>
            <span className={styles.cardDivider}></span>
            <Text className={styles.cardValue}>1M+</Text>
          </div>

          <div className={styles.achievementCard} variant="borderless">
            <TruckOutlined className={styles.icon} />
            <Text className={styles.cardTitle}>International Orders</Text>
            <span className={styles.cardDivider}></span>
            <Text className={styles.cardValue}>100+</Text>
          </div>
        </div>
      </section>
    );
  }

  renderWhyChooseUs() {
    return (
      <section className={styles.whyChooseSection}>
        <div className={styles.whyChooseContainer}>
          <Text
            type="secondary"
            style={{ textTransform: "uppercase", letterSpacing: 2 }}
          >
            Our Commitment
          </Text>
          <Title level={2} style={{ marginTop: 0 }}>
            Why Step With Us?
          </Title>
          <div className={styles.whyChooseCardContainer}>
            <div className={styles.whyChooseCardBox}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  width: "90px",
                  height: "90px",
                  border: "3px dashed #a3a3a3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "0px",
                    backgroundColor: "#cfcfcf",
                    color: "#555555",
                    fontWeight: "bold",
                    fontSize: "14px",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px dashed #a3a3a3",
                  }}
                >
                  1
                </span>
                <CheckCircleOutlined className={styles.whyChooseCardIcon} />
              </div>
              <Title level={4} className={styles.whyChooseCardTitle}>
                100% Original Guarantee
              </Title>
              <Text className={styles.whyChooseCardValue}>
                All our shoes come with an authentic guarantee. We work directly
                with trusted and official distributors.
              </Text>
            </div>
            <div className={styles.whyChooseCardBox}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  width: "90px",
                  height: "90px",
                  border: "3px dashed #a3a3a3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "0px",
                    backgroundColor: "#cfcfcf",
                    color: "#555555",
                    fontWeight: "bold",
                    fontSize: "14px",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px dashed #a3a3a3",
                  }}
                >
                  2
                </span>
                <TruckOutlined className={styles.whyChooseCardIcon} />
              </div>
              <Title level={4} className={styles.whyChooseCardTitle}>
                Fast & Secure Shipping
              </Title>
              <Text className={styles.whyChooseCardValue}>
                Quick delivery worldwide with secure packaging to ensure your
                shoes arrive safely.
              </Text>
            </div>
            <div className={styles.whyChooseCardBox}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  width: "90px",
                  height: "90px",
                  border: "3px dashed #a3a3a3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "0px",
                    backgroundColor: "#cfcfcf",
                    color: "#555555",
                    fontWeight: "bold",
                    fontSize: "14px",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px dashed #a3a3a3",
                  }}
                >
                  3
                </span>
                <SmileOutlined className={styles.whyChooseCardIcon} />
              </div>
              <Title level={4} className={styles.whyChooseCardTitle}>
                Responsive Customer Care
              </Title>
              <Text className={styles.whyChooseCardValue}>
                Our support team is ready 24/7 to ensure a smooth and satisfying
                shopping experience.
              </Text>
            </div>
            <div className={styles.whyChooseCardBox}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "50%",
                  width: "90px",
                  height: "90px",
                  border: "3px dashed #a3a3a3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <span
                  style={{
                    position: "absolute",
                    top: "-5px",
                    left: "0px",
                    backgroundColor: "#cfcfcf",
                    color: "#555555",
                    fontWeight: "bold",
                    fontSize: "14px",
                    borderRadius: "50%",
                    width: "24px",
                    height: "24px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    border: "2px dashed #a3a3a3",
                  }}
                >
                  4
                </span>
                <StarOutlined className={styles.whyChooseCardIcon} />
              </div>
              <Title level={4} className={styles.whyChooseCardTitle}>
                Exclusive Sneaker Collections
              </Title>
              <Text className={styles.whyChooseCardValue}>
                Limited edition sneakers only available in our store, giving you
                that hype vibe.
              </Text>
            </div>
          </div>
        </div>
      </section>
    );
  }

  renderGallery() {
    return (
      <section className={styles.gallerySection}>
        <div className={styles.overlay}></div>
        <div className={styles.galleryContainer}>
          <div className={styles.textGallery}>
            <Text className={styles.descTextGallery}>
              Discover a curated collection of our finest moments and creative
              works. Each piece tells a story, capturing the essence of style,
              passion, and innovation that drives us forward.
            </Text>

            <div className={styles.titleGallery}>
              <span className={styles.titleLine}></span>
              <Text className={styles.smallTitle}>COLLECTION</Text>
            </div>
          </div>

          <div className={styles.cardWrapper}>
            {faqData.map((item, idx) => (
              <div
                key={idx}
                className={styles.cardItem}
                style={{
                  transform: `rotate(${idx % 2 === 0 ? "-2deg" : "2deg"})`,
                  background: `url(${item.bg}) no-repeat center / cover`,
                }}
              ></div>
            ))}
          </div>

          <div className={styles.carouselWrapper}>
            <Carousel arrows infinite={true}>
              {faqData.map((item, idx) => (
                <div key={idx} className={styles.carouselItem}>
                  <div
                    className={styles.cardItem}
                    style={{
                      background: `url(${item.bg}) no-repeat center / cover`,
                    }}
                  />
                </div>
              ))}
            </Carousel>
          </div>

          <div className={styles.bottomText}>
            <Text className={styles.ourText}>OUR</Text>
            <span className={styles.lineBottomGallery}></span>
            <Text className={styles.galleryText}>GALLERY</Text>
          </div>
        </div>
      </section>
    );
  }

  renderBrands() {
    return (
      <section className={styles.brandSection}>
        <div className={styles.brandFlex}>
          <div className={styles.brandItem}>
            <Image
              src="/assets/brand/nike.png"
              alt="Nike"
              width={150}
              height={80}
              className={styles.brandImg}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.brandItem}>
            <Image
              src="/assets/brand/onitsuka.png"
              alt="Onitsuka"
              width={150}
              height={80}
              className={styles.brandImg}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.brandItem}>
            <Image
              src="/assets/brand/nb.png"
              alt="New Balance"
              width={150}
              height={80}
              className={styles.brandImg}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.brandItem}>
            <Image
              src="/assets/brand/cons.png"
              alt="Converse"
              width={150}
              height={80}
              className={styles.brandImg}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.brandItem}>
            <Image
              src="/assets/brand/jordan.png"
              alt="Jordan"
              width={150}
              height={80}
              className={styles.brandImg}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.brandItem}>
            <Image
              src="/assets/brand/vans.png"
              alt="Vans"
              width={150}
              height={80}
              className={styles.brandImg}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.brandItem}>
            <Image
              src="/assets/brand/puma.png"
              alt="Puma"
              width={150}
              height={80}
              className={styles.brandImg}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
          <div className={styles.brandItem}>
            <Image
              src="/assets/brand/adidas.png"
              alt="Adidas"
              width={150}
              height={80}
              className={styles.brandImg}
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>
      </section>
    );
  }

  render() {
    return (
      <>
        <Head>
          <title>About Us - Sneaker Store</title>
          <meta name="viewport" content="width=device-width, initial-scale-1" />

          <meta name="description" content="Generated by create next app" />
          <meta name="keywords" content="Shoeshop KC" />
          <meta name="author" content="Irfan" />

          <link rel="icon" href="/favicon.ico" />
        </Head>
        {this.renderHero()}
        {this.renderStory()}
        {this.renderAchievements()}
        {this.renderWhyChooseUs()}
        {this.renderGallery()}
        {this.renderBrands()}
      </>
    );
  }
}

export default AboutUsPage;
