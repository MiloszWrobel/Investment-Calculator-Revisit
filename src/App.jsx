import Header from "./components/Header";
import UserInput from "./components/UserInput";
function App() {
  return (
    <>
      <Header />
      <main>
        <section id="user-input">
          <h2 className="center">Enter Investment details</h2>
          <div className="input-grid">
            <UserInput text="Initial Investment" id="initial-investment" />
            <UserInput text="Annual Investment" id="annual-investment" />
            <UserInput text="Expected Return" id="expected-return" />
            <UserInput text="Duration" id="duration" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
