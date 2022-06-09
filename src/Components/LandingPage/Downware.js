import "./Landing.css";
import Towhom from "./Image/towhom.png";
import whodoyou from "./Image/Clients.jpg";
import Meeting from "./Image/Meeting.png";

function App() {
  return (
    <div className="downware">
      <div className="row">
        <div className="col-6 comrades">
          <img src={whodoyou} alt="whodoyou" />
          <div className="Upon">
            <img src={Meeting} alt="Meeting" />
          </div>
          <div style={{ marginTop: "330px" }}>
            <a href="#">
              <span
                style={{
                  backgroundColor: "#DDF2FF",
                  padding: "5px",
                  borderRadius: "3px",
                }}
                className="bi bi-arrow-left"
              ></span>
            </a>
            <a href="#">
              <span
                style={{
                  backgroundColor: "#DDF2FF",
                  padding: "5px",
                  borderRadius: "3px",
                  marginLeft: "8px",
                }}
                className="bi bi-arrow-right"
              ></span>
            </a>
          </div>
        </div>

        <div className="col-6 comrades-side">
          <div className="whodo">
            <img src={Towhom} height={150} width={540} />
          </div>
          <div className="box-example">
            <p style={{ marginBottom: "1px" }}>
              Choose your gifting person, may it be your new
            </p>
            <p style={{ marginBottom: "1px" }}>
              employee, best friend, colleague, father or mother! We
            </p>
            <p>have it all that gives everyone an Unboxing experience!</p>
          </div>
          <div>
            <a href="#" className="box-ex">
              Explore <span className="bi bi-arrow-right-short"></span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
