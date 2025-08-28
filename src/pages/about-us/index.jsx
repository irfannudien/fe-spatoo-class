import React, { Component } from "react";
import { Row, Col, Card, Typography, Button } from "antd";
import styles from "@/styles/about-us/AboutPage.module.css";

const { Title, Paragraph } = Typography;

class AboutPage extends Component {
  render() {
    return (
      <div className={styles.container}>
        {/* Hero Section */}
        <div className={styles.hero}>
          <Title level={1} style={{ color: "#fff" }}>
            Tentang Kami
          </Title>
          <Paragraph style={{ color: "#ddd" }}>
            Kami hadir untuk pecinta sneakers di Indonesia. Menyediakan sepatu
            original, trendy, dan nyaman untuk semua.
          </Paragraph>
          <Button type="primary" size="large">
            Belanja Sekarang
          </Button>
        </div>

        {/* Our Story */}
        <div className={styles.section}>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <img
                src="/images/story.jpg"
                alt="Our Story"
                className={styles.image}
              />
            </Col>
            <Col xs={24} md={12}>
              <Title level={2}>Our Story</Title>
              <Paragraph>
                Dimulai dari hobi mengoleksi sneakers, kami percaya setiap orang
                berhak punya sepatu keren dengan harga terjangkau. Dengan
                semangat itu, lahirlah brand ini untuk mendekatkan sneakers
                berkualitas ke semua orang.
              </Paragraph>
            </Col>
          </Row>
        </div>

        {/* Mission & Vision */}
        <div className={styles.section}>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={12}>
              <Card>
                <Title level={3}>Visi</Title>
                <Paragraph>
                  Menjadi platform sneaker terpercaya dan terlengkap di
                  Indonesia.
                </Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={12}>
              <Card>
                <Title level={3}>Misi</Title>
                <Paragraph>
                  - Menyediakan produk original & terjamin <br />
                  - Pengiriman cepat dan aman <br />- Memberikan pelayanan
                  terbaik kepada customer
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Keunggulan */}
        <div className={styles.section}>
          <Title level={2} style={{ textAlign: "center" }}>
            Kenapa Pilih Kami?
          </Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card className={styles.card}>
                <Title level={4}>100% Original</Title>
                <Paragraph>Produk dijamin authentic & bergaransi.</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className={styles.card}>
                <Title level={4}>Pengiriman Cepat</Title>
                <Paragraph>Paket aman sampai tujuan dengan tracking.</Paragraph>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card className={styles.card}>
                <Title level={4}>Harga Bersaing</Title>
                <Paragraph>
                  Sneakers keren dengan harga terbaik di kelasnya.
                </Paragraph>
              </Card>
            </Col>
          </Row>
        </div>

        {/* Testimonials */}
        <div className={styles.section}>
          <Title level={2} style={{ textAlign: "center" }}>
            Apa Kata Mereka
          </Title>
          <Row gutter={[24, 24]}>
            <Col xs={24} md={8}>
              <Card>
                <Paragraph>
                  "Sepatunya original, pengiriman cepat, recommended seller!"
                </Paragraph>
                <b>- Andi</b>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <Paragraph>
                  "Pilihan banyak banget, CS ramah, pasti repeat order lagi."
                </Paragraph>
                <b>- Sinta</b>
              </Card>
            </Col>
            <Col xs={24} md={8}>
              <Card>
                <Paragraph>
                  "Packaging rapi, sneakers sesuai ekspektasi. Mantap!"
                </Paragraph>
                <b>- Budi</b>
              </Card>
            </Col>
          </Row>
        </div>

        {/* CTA */}
        <div className={styles.cta}>
          <Title level={2}>Siap cari sneakers favoritmu?</Title>
          <Button type="primary" size="large">
            Mulai Belanja
          </Button>
        </div>
      </div>
    );
  }
}

export default AboutPage;
