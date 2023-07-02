import "./styles.css";

export default function App() {
  const coaches = ["jan", "klaus", "sven"];

  return <Greeting name="klaus" harEsmi={coaches} />;
}


////mishe in func greeting ro bebarim be ywk file dge va importesh konim inja
function Greeting({ name, coaches }) {
  return <h1>Hello {coaches.includes(name) ? "Coach !" : name}</h1>;
}
