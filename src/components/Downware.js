import "../App.css";
import Towhom from "./Image/towhom.png";
import Comrades from "./Image/comrades.png";

function App() {
    return (
        <div className="downware">
            <div className="row">
            <div className="col-6 comrades mt-5">
                <img src={Comrades} height={250} width={450}/>
            </div>

            <div className="col-6 comrades-side">
               <div className="whodo">
                   <img src={Towhom} height={150} width={540} />
               </div>
               <div className="box-example">
                Choose your gifting person, may it be your new<br />employee, best friend, colleague, father or mother!We<br />have it all that gives everyone an Unboxing experience!
               </div>
               <div>
                   <button className="box-ex">Book Now <span className="bi bi-arrow-right-short"></span></button>
               </div>
            </div>   
            </div>
        </div>
    );
}

export default App;