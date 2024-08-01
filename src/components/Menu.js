import React from "react";
import { Badge, Button, ListGroup } from "react-bootstrap";

import categories from "../data/categories";
import products from "../data/products";

const Menu = () => {
  const categoriesList = categories.map((category, idx) => {
    const products_ = products.filter((product) => product.category === category.name);

    // check if category's products have xl_price attribute
    const hasXLPrice = products_.some((product) => product.xl_price);

    return (
      <div style={{ marginTop: "2rem" }} key={idx}>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }}>
          <h2 style={{ margin: 0, padding: 0, backgroundColor: "", fontWeight: 600, flex: 100 }}>{category.label}</h2>
          {hasXLPrice && (
            <Badge bg="" style={{ backgroundColor: "#a14000", width: "fit-content", marginRight: "2rem", fontWeight: 700 }}>
              XLarge
            </Badge>
          )}
        </div>
        <ListGroup as="ul" style={{ marginRight: "1rem", marginTop: "1rem" }}>
          {products_.map((product, idx) => {
            return (
              <ListGroup.Item as="li" key={idx} className="d-flex justify-content-between align-items-center">
                <div className="" style={{ marginRight: "0.05rem", flex: 100 }}>
                  <div className="fw-bold">{product.name}</div>
                  {product.description}
                </div>
                <Badge bg="" style={{ backgroundColor: "#8800ff" }} pill>
                  {product.price.toFixed(2)} €
                </Badge>
                {product.xl_price && (
                  <Badge bg="" style={{ backgroundColor: "#43007d", marginLeft: "5px" }} pill>
                    {product?.xl_price?.toFixed(2)} €
                  </Badge>
                )}
              </ListGroup.Item>
            );
          })}
        </ListGroup>
      </div>
    );
  });

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div className="d-flex" style={{ flexDirection: "column", alignItems: "center" }}>
        <img className="mt-4" width="70%" style={{ maxWidth: "350px" }} src={process.env.PUBLIC_URL + "/logo.jpg"} alt="logo" />
        <Button variant="success" style={{ margin: "1rem" }} as="a" href="tel:+302160039090">
          📞 ΠΑΡΑΓΓΕΛΙΑ
        </Button>
        <h3 style={{ width: "80%", textAlign: "center" }}>
          Delivery καθημερινά απο τις <b>08:00</b> έως τις <b>16:00</b>.
        </h3>
        <h1 style={{ fontWeight: 600 }} className="mt-2">
          Τιμοκατάλογος
        </h1>
      </div>
      <div style={{ marginLeft: "1rem", marginBottom: "1rem" }}>{categoriesList}</div>
      <div style={{ display: "flex", flexDirection: "column", width: "100%", alignItems: "center" }}>
        <span style={{ fontWeight: 500 }}>Αγορανομικός υπεύθυνος:</span>
        <span style={{ fontWeight: 800 }}>Κωνσταντίνος Μάρης</span>
      </div>
    </div>
  );
};

export default Menu;
