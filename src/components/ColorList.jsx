import { nanoid } from "nanoid";
import SingleColor from "./SingleColor";

const ColorList = (props) => {
  return (
    <section className="colors">
      {props.colors.map((color, index) => {
        return <SingleColor key={nanoid()} color={color} index={index} />;
      })}
    </section>
  );
};
export default ColorList;
