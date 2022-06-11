import Services from "./Services/Services";
import About from "./About/About";
import Link from "./Link/Link";
import Quantity from "./Quantity/Quantity";
import Buttons from "../Buttons/Buttons/Buttons";

function Setting(prop: {step: number, setStep: Function}) {
  return (
    <section>
        <Services />
        <About />
        <Link />
        <Quantity />
        <Buttons step={prop.step} setStep={prop.setStep}/>
    </section>
  );
}

export default Setting;