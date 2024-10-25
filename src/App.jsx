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
            <UserInput text="Initial Investment" id="initialInvestment" />
            <UserInput text="Annual Investment" id="annualInvestment" />
            <UserInput text="Expected Return" id="expectedReturn" />
            <UserInput text="Duration" id="duration" />
          </div>
        </section>
      </main>
    </>
  );
}

export default App;
