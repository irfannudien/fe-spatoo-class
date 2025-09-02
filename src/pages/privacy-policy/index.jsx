// privacypolicy.jsx
import React from "react";
import { Typography, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import styles from "@/styles/privacy-policy/Privacy.module.css";

const { Title, Paragraph } = Typography;

class PrivacyPolicy extends React.Component {
  handleBack = () => {
    if (typeof window !== "undefined") window.history.back();
  };

  render() {
    return (
      <section className={styles.pageLayout}>
        <div className={styles.content}>
          <div className={styles.card}>
            <Title level={2} className={styles.title}>
              Privacy Policy
            </Title>

            <Paragraph className={styles.paragraph}>
              Kami di <strong>TokoSepatu</strong> menghormati privasi pengguna.
              Dokumen ini menjelaskan bagaimana kami mengumpulkan, menggunakan,
              menyimpan, dan melindungi data Anda saat menggunakan layanan kami.
            </Paragraph>

            <section className={styles.section}>
              <Title level={4}>1. Informasi yang Kami Kumpulkan</Title>
              <Paragraph>
                a. Informasi yang Anda berikan langsung: nama, email, alamat,
                nomor telepon, data pembayaran (melalui provider pembayaran
                pihak ketiga).
                <br />
                b. Data teknis: alamat IP, tipe device, browser, dan informasi
                penggunaan (cookies & analytics).
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>2. Tujuan Penggunaan Data</Title>
              <Paragraph>
                - Memproses pesanan dan pembayaran.
                <br />
                - Mengirimkan update status pesanan dan notifikasi penting.
                <br />
                - Meningkatkan layanan dan personalisasi pengalaman pengguna.
                <br />- Memenuhi kewajiban hukum jika diperlukan.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>3. Sharing & Pihak Ketiga</Title>
              <Paragraph>
                Kami dapat membagikan data dengan penyedia layanan (payment
                gateway, kurir, layanan analytics). Kami tidak menjual data
                pribadi Anda ke pihak ketiga untuk tujuan pemasaran.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>4. Keamanan Data</Title>
              <Paragraph>
                Kami menggunakan praktik keamanan standar industri untuk
                melindungi data. Namun tidak ada transmisi data lewat internet
                yang 100% aman — jadi kami tidak bisa menjamin keamanan absolut.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>5. Hak Pengguna</Title>
              <Paragraph>
                Pengguna berhak mengakses, memperbaiki, atau meminta penghapusan
                data mereka. Untuk permintaan, hubungi kami melalui email:{" "}
                <a href="mailto:support@tokosepatu.example">
                  support@tokosepatu.example
                </a>
                .
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>6. Perubahan Kebijakan</Title>
              <Paragraph>
                Kami dapat memperbarui kebijakan ini. Perubahan signifikan akan
                diinformasikan melalui website atau email. Tanggal terakhir
                pembaruan: <strong>1 September 2025</strong>.
              </Paragraph>
            </section>
          </div>
        </div>
      </section>
    );
  }
}

export default PrivacyPolicy;
