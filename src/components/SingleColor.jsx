import { toast } from "react-toastify";

const SingleColor = (props) => {
  const { hex, weight } = props.color;
  const handleClick = () => {
    copyToClipboard(hex);
  };

  async function copyToClipboard(text) {
    try {
      await navigator.clipboard.writeText(`#${text}`);
      toast.success("Color copied to clipboard");
    } catch (error) {
      toast.error("Failed to copy");
    }
  }

  return (
    <article
      className={props.index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={handleClick}
    >
      <p className="percent-value">{weight}%</p>
      <p className="color-value">#{hex}</p>
    </article>
  );
};
export default SingleColor;
