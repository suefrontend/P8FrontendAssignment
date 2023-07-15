import type { NextPage } from "next";
import Header from "../components/Header";
import Main from "../components/Main";

const Home: NextPage = () => {
  return (
    <div className="wrapper">
      <Header />
      <main className="main">
        <Main />
      </main>
    </div>
  );
};

export default Home;
