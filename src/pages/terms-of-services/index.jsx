// termofservice.jsx
import React from "react";
import { Typography, Button } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import styles from "@/styles/term-of-services/Terms.module.css";

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
            <Title level={2} className={styles.title}>
              Terms of Service
            </Title>

            <Paragraph>
              Selamat datang di <strong>TokoSepatu</strong>. Dengan mengakses
              dan menggunakan layanan kami, Anda setuju untuk terikat dengan
              syarat-syarat berikut.
            </Paragraph>

            <section className={styles.section}>
              <Title level={4}>1. Penggunaan Layanan</Title>
              <Paragraph>
                Pengguna setuju memakai layanan sesuai hukum yang berlaku dan
                tidak melakukan aktivitas yang merugikan pihak lain.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>2. Akun & Akses</Title>
              <Paragraph>
                Pengguna bertanggung jawab menjaga keamanan akun, termasuk kata
                sandi. Kami berhak menangguhkan atau menghapus akun jika
                ditemukan pelanggaran.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>3. Pemesanan & Pembayaran</Title>
              <Paragraph>
                Semua transaksi tunduk pada konfirmasi pembayaran. Kami dapat
                membatalkan pesanan jika terdeteksi kecurangan atau stok kosong.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>4. Pengembalian & Refund</Title>
              <Paragraph>
                Ketentuan pengembalian dan refund mengikuti kebijakan yang
                tertera di halaman Return Policy kami. Klaim refund harus
                disertai bukti.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>5. Batasan Tanggung Jawab</Title>
              <Paragraph>
                Kami tidak bertanggung jawab atas kerugian tidak langsung,
                kehilangan data, atau gangguan usaha akibat penggunaan layanan.
              </Paragraph>
            </section>

            <section className={styles.section}>
              <Title level={4}>6. Perubahan Ketentuan</Title>
              <Paragraph>
                Syarat ini dapat berubah. Perubahan akan diumumkan di situs dan
                berlaku sejak tanggal publikasi. Tanggal terakhir update:
                <Text strong> 1 September 2025</Text>.
              </Paragraph>
            </section>

            <Paragraph className={styles.contact}>
              Untuk pertanyaan terkait syarat & ketentuan, hubungi:
              <a href="mailto:legal@tokosepatu.example">
                {" "}
                legal@tokosepatu.example
              </a>
            </Paragraph>
          </div>
        </div>
      </section>
    );
  }
}

export default TermOfService;
