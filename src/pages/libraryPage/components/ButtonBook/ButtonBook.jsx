import classes from "./buttonBook.module.scss";
import { motion } from "framer-motion";

export default function ButtonBook({ onClick }) {
  return (
    <motion.button
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={onClick}
      className={classes["btn-book"]}
    >
      Клик
    </motion.button>
  );
}
