import React from "react";
import { connect } from "react-redux";
import { getProductData } from "@/redux/actions/productAction";

class ProductPage extends React.Component {
  state = {
    products: [],
    selectedBrand: "ALL",
    selectedCategory: "ALL",
    minPrice: 0,
    maxPrice: 0,
    selectedPrice: 0,
  };

  async componentDidMount() {
    const res = await this.props.getProductData();
    if (res.success) {
      const products = res.data.data;

      const prices = products.map((p) => p.price);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);

      this.setState({ products, minPrice, maxPrice, selectedPrice: maxPrice });
    }
  }

  render() {
    const {
      products,
      selectedBrand,
      selectedCategory,
      minPrice,
      maxPrice,
      selectedPrice,
    } = this.state;

    const brands = ["ALL", ...new Set(products.map((p) => p.brand))];
    const categories = ["ALL", ...new Set(products.map((p) => p.category))];

    const filtered = products.filter(
      (p) =>
        (selectedBrand === "ALL" || p.brand === selectedBrand) &&
        (selectedCategory === "ALL" || p.category === selectedCategory) &&
        p.price <= selectedPrice
    );

    return (
      <div style={{ padding: "100px 20px" }}>
        <h1>Product Page</h1>

        <select
          value={selectedBrand}
          onChange={(e) => this.setState({ selectedBrand: e.target.value })}
        >
          {brands.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>

        <select
          value={selectedCategory}
          onChange={(e) => this.setState({ selectedCategory: e.target.value })}
        >
          {categories.map((c) => (
            <option key={c}>{c}</option>
          ))}
        </select>

        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={selectedPrice}
          onChange={(e) =>
            this.setState({ selectedPrice: Number(e.target.value) })
          }
          style={{ margin: "0 10px" }}
        />
        <span>Max: Rp {selectedPrice.toLocaleString("id-ID")}</span>

        <div
          style={{ display: "flex", flexWrap: "wrap", gap: 20, marginTop: 20 }}
        >
          {filtered.map((p) => (
            <div
              key={p.id}
              style={{
                border: "1px solid #ddd",
                borderRadius: 8,
                padding: 10,
                width: 220,
              }}
            >
              <h3>{p.product_name}</h3>
              <p>{p.brand}</p>
              <p>Rp {p.price.toLocaleString("id-ID")}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default connect(null, { getProductData })(ProductPage);
