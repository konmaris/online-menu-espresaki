import React from "react";
import { Alert, Badge, Button, Image, ListGroup } from "react-bootstrap";

import categories from "../data/categories";
import products from "../data/products";
import { Link } from "react-router-dom";

const Menu = () => {
  const categoriesList = categories.map((category, idx) => {
    const products_ = products.filter(
      (product) => product.category === category.name
    );

    // check if category's products have xl_price attribute
    const hasXLPrice = products_.some((product) => product.xl_price);

    return (
      <div style={{ marginTop: "2rem" }} key={idx}>
        <div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <h2
              style={{
                margin: 0,
                padding: 0,
                backgroundColor: "",
                fontWeight: 600,
                flex: 100,
              }}
            >
              {category.label}
            </h2>

            {hasXLPrice && (
              <Badge
                bg=""
                style={{
                  backgroundColor: "#a14000",
                  width: "fit-content",
                  marginRight: "2rem",
                  fontWeight: 700,
                }}
              >
                XLarge
              </Badge>
            )}
          </div>
          <h3
            style={{
              textAlign: "justify",
              fontSize: 14,
              marginTop: "0.3rem",
              width: "90%",
            }}
          >
            {category.description}
          </h3>
        </div>
        <ListGroup as="ul" style={{ marginRight: "1rem", marginTop: "1rem" }}>
          {products_.map((product, idx) => {
            return (
              <ListGroup.Item
                as="li"
                key={idx}
                className="d-flex justify-content-between align-items-center"
              >
                <div className="" style={{ marginRight: "0.05rem", flex: 100 }}>
                  <div style={{ width: "95%" }} className="fw-bold">
                    {product.name}
                  </div>
                  {product.category !== "single_origin" && (
                    <p
                      style={{ margin: 0, textAlign: "justify", width: "90%" }}
                    >
                      {product.description}
                    </p>
                  )}
                  {product.category === "single_origin" && (
                    <div
                      style={{ margin: 0, textAlign: "justify", width: "90%" }}
                    >
                      {
                        // split description product by "," and map each element to a new paragraph
                        product.description.split(",").map((desc, idx) => (
                          <p key={idx} style={{ margin: 0 }}>
                            {
                              //split each attribute by ":" and map each element to a new paragraph

                              <span key={idx} style={{ margin: 0 }}>
                                {
                                  <span style={{ fontWeight: 500 }}>
                                    {desc.split(":")[0]}
                                  </span>
                                }
                                : {desc.split(":")[1]}
                              </span>
                            }
                          </p>
                        ))
                      }
                    </div>
                  )}
                </div>
                {product.price > 0 ? (
                  <Badge bg="" style={{ backgroundColor: "#8800ff" }} pill>
                    {product.price.toFixed(2)} €
                  </Badge>
                ) : (
                  <Badge bg="" style={{ backgroundColor: "#8800ff" }} pill>
                    FREE
                  </Badge>
                )}
                {product.xl_price && (
                  <Badge
                    bg=""
                    style={{ backgroundColor: "#43007d", marginLeft: "5px" }}
                    pill
                  >
                    {product.xl_price.toFixed(2)} €
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
      <div
        className="d-flex"
        style={{ flexDirection: "column", alignItems: "center" }}
      >
        <img
          className="mt-4"
          width="70%"
          style={{ maxWidth: "350px" }}
          src={process.env.PUBLIC_URL + "/logo.jpg"}
          alt="logo"
        />

        <Button
          variant="outline-success"
          style={{ margin: "1rem" }}
          as="a"
          href="tel:+302160039090"
        >
          📞 Παραγγελία
        </Button>
        {/* <h3 style={{ width: "80%", textAlign: "center" }}>
          Delivery καθημερινά απο τις <b>08:00</b> έως τις <b>16:00</b>.
        </h3> */}
        <span style={{ fontSize: 64 }}>🛵</span>
        <Alert
          className="mt-3"
          style={{ textAlign: "center" }}
          variant="success"
        >
          <Alert.Heading>
            Delivery καθημερινά από τις <b>07:00</b> έως τις <b>18:30</b> και τη
            Κυριακή από τις <b>08:00</b> έως τις <b>19:00</b>.
          </Alert.Heading>
        </Alert>
        {/* <h1 style={{ fontWeight: 600 }} className="mt-2">
          Τιμοκατάλογος
        </h1> */}
      </div>
      <div style={{ marginLeft: "1rem", marginBottom: "1rem" }}>
        {categoriesList}
      </div>
      <div style={{ display: "flex", width: "100%", justifyContent: "center" }}>
        <a
          href="https://www.e-food.gr/delivery/athina/espresaki-coffee-roasters-6370420"
          style={{
            maxWidth: "150px",
            width: "25%",
            height: "25%",
            padding: 0,
            margin: 0,
          }}
        >
          <img
            width="100%"
            src={process.env.PUBLIC_URL + "/efood-logo.jpg"}
            alt="efood-logo"
          />
        </a>
        <a
          href="https://wolt.com/en/grc/athens/restaurant/espresaki-coffee-roasters"
          style={{
            maxWidth: "150px",
            width: "25%",
            height: "25%",
            padding: 0,
            margin: 0,
          }}
        >
          <img
            width="100%"
            src={process.env.PUBLIC_URL + "/wolt-logo.jpg"}
            alt="wolt-logo"
          />
        </a>
        <a
          href="https://box.gr/delivery/ano-patisia/espresaki-coffee-roasters"
          style={{
            maxWidth: "150px",
            width: "25%",
            height: "25%",
            padding: 0,
            margin: 0,
          }}
        >
          <img
            width="100%"
            src={process.env.PUBLIC_URL + "/box-logo.jpg"}
            alt="box-logo"
          />
        </a>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
        }}
      >
        <span
          style={{
            fontWeight: 600,
            fontSize: 14,
            textAlign: "center  ",
            width: "90%",
          }}
        >
          Oι τιμές του παρόντος τιμοκαταλόγου συμπεριλαμβάνουν τον Φ.Π.Α. σε
          κάθε προϊόν και ενδέχεται να αλλάξουν ανά πάσα στιγμή χωρίς
          προειδοποίηση.
        </span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          width: "100%",
          alignItems: "center",
          marginTop: "1rem",
          marginBottom: "1rem",
        }}
      >
        <span style={{ fontWeight: 600 }}>
          📍 Στεφάνου Βυζαντίου 11, Άγιος Λουκάς
        </span>
        <span style={{ fontWeight: 600, marginBottom: "0.5rem" }}>
          Αθήνα, 111 44
        </span>
        <span style={{ fontWeight: 800 }}>☎️ Τηλ. καταστήματος:</span>
        <span style={{ fontWeight: 500 }}>+30 21 600 390 90</span>
      </div>
    </div>
  );
};

export default Menu;
