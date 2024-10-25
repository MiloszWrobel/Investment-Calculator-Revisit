import Header from "./components/Header";
import UserInput from "./components/UserInput";
function App() {
  return (
    <>
      <Header />
      <main>
        <section id="user-input">
          <h2 className="center">Enter Investment details</h2>
          <UserInput />
        </section>
      </main>
    </>
  );
}

export default App;
