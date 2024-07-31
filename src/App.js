import { Badge, ListGroup } from "react-bootstrap";

const categories = [
  {
    name: "cold_coffees",
    label: "Κρύοι καφέδες",
  },
  {
    name: "hot_coffees",
    label: "Ζεστοί καφέδες",
  },
  {
    name: "sandwiches",
    label: "Σάντουιτς",
  },
  {
    name: "salads",
    label: "Σαλάτες",
  },
  {
    name: "desserts",
    label: "Γλυκά",
  },
];

const products = [
  {
    category: "cold_coffees",
    name: "Freddo Espresso",
    description: "Κρύος espresso χτυπημένος με πάγο",
    price: 2.2,
  },
  {
    category: "cold_coffees",
    name: "Freddo Cappuccino",
    description: "Κρύος espresso με αφρό γάλακτος",
    price: 2.4,
  },
  {
    category: "cold_coffees",
    name: "Iced Latte",
    description: "Κρύος espresso με γάλα",
    price: 2.6,
  },
  {
    category: "cold_coffees",
    name: "Freddo Cappuccino Latte",
    description: "Κρύος espresso με γάλα και αφρό γάλακτος",
    price: 2.6,
  },
  {
    category: "cold_coffees",
    name: "Iced Espresso",
    description: "Κρύος espresso",
    price: 2.2,
  },
  {
    category: "cold_coffees",
    name: "Frappe",
    description: "Κρύος espresso χτυπημένος με πάγο και γάλα",
    price: 2.0,
  },
  {
    category: "hot_coffees",
    name: "Espresso Double",
  },
];

function App() {
  const categoriesList = categories.map((category, idx) => {
    const products_ = products.filter((product) => product.category === category.name);
    return (
      <div key={idx}>
        <h2 style={{ fontWeight: 600 }}>{category.label}</h2>
        <ListGroup as="ul" style={{ marginRight: "1rem", marginTop: "1rem" }}>
          {products_.map((product, idx) => {
            return (
              <ListGroup.Item as="li" key={idx} className="d-flex justify-content-between align-items-center">
                <div className="" style={{ marginRight: "0.05rem" }}>
                  <div className="fw-bold">{product.name}</div>
                  {product.description}
                </div>
                <Badge bg="primary" pill>
                  {product.price.toFixed(2)} €
                </Badge>
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
        <img className="mt-4" width="70%" style={{ maxWidth: "350px" }} src="/logo.jpg" alt="logo" />
        <h1 style={{ fontWeight: 600 }} className="mt-2">
          Τιμοκατάλογος
        </h1>
      </div>
      <div style={{ marginLeft: "1rem", marginTop: "1rem" }}>{categoriesList}</div>
    </div>
  );
}

export default App;
