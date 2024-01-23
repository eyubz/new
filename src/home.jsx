import Header, { Content } from "./header";
import Footer from "./footer";
function Home() {
  return (
    <div className="App">
      <main className="App-header">
        <Header/>
        <hr className="bold-line"/>
        <Content/>
        <Footer/>
      </main>
    </div>
  );
}

export default Home;
