import About from "./content/About";
import Contact from "./content/Contact";
import HomeCv from "./content/HomeCv";
import Project from "./content/Project";
import Skills from "./content/Skills";

interface IProps {
  hideLeftPart: boolean;
  setHideLeftPart: (value: boolean) => void;
}
const RightPart = (props: IProps) => {
  const { hideLeftPart, setHideLeftPart } = props;
  return (
    <div className={hideLeftPart ? "arlo_tm_rightpart opened" : "arlo_tm_rightpart"}>
      <div className="rightpart_inner">
        <HomeCv />
        <About />
        <Skills />
        <Project />
        <Contact />
      </div>
    </div>
  );
};

export default RightPart;
