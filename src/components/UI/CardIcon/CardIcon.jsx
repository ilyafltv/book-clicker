import classes from "./CardIcon.module.scss";

export default function CardIcon({ image, ...props }) {
  return (
    <div
      {...props}
      className={`${classes.cardIcon} ${classes[props.className]}`}
      key={props.key}
    >
      <img src={image} />
    </div>
  );
}
