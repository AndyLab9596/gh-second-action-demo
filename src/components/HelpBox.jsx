import './HelpBox.css';
// eslint-disable-next-line react/prop-types
function HelpBox({ title, text }) {
  return (
    <article className="help-box">
      <h3>{title}</h3>
      <p>{text}</p>
    </article>
  );
}

export default HelpBox;
