import Card from "./components/Card";

export default function App() {
  const fruits = [
    {
      id: 1337,
      name: "🍌 Banane",
      color: "yellow",
    },
    {
      id: 1336,
      name: "🍌 Himbeer",
      color: "yellow",
    },
    {
      id: 1338,
      name: "🍌 Kirsche",
      color: "Red",
    },
    {
      id: 13,
      name: "🍌 Orange",
      color: "yellow",
    },
    {
      id: 137,
      name: "🍌 Banana",
      color: "yellow",
    },
  ];

  return (
    <div className="app">
      {fruits.map((fruit) => (
        <Card name={fruit.name} color={fruit.color} key={fruit.id} />
      ))}
    </div>
  );
}
