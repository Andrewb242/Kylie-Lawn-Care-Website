import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Pages/Home";
import Gallery from "./Pages/Gallery";
import Service from "./Pages/Service";
import Contact from "./Pages/Contact";
import Footer from "./Components/Footer";

function App() {
  const queryParams = new URLSearchParams(window.location.search);
  const page = queryParams.get("page") || "home";

  let Content;
  switch (page) {
    case "gallery":
      Content = Gallery;
      break;
    case "service":
      Content = Service;
      break;
    case "contact":
      Content = Contact;
      break;
    default:
      Content = Home;
  }

  return (
    <>
      <Navbar page={page} />
      <main>
        <Content />
      </main>
      <Footer />
    </>
  );
}

export default App;
