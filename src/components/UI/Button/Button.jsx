import classes from "./button.module.scss";

export default function Button({ className, ...props }) {
  return (
    <button
      className={`${classes["btnDefault"]} ${classes[className]}`}
      {...props}
    >
      {props.children}
    </button>
  );
}
