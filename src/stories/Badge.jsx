import React from "react";
import PropTypes from "prop-types";
import "./badge.css";

/**
componente que se imprimira
 */

export const Badge = ({ backgroundColor, size, texto, label, ...args }) => (
  <>
    {texto ? (
      <>
        {texto.map((elemento) => (
          <span className={`tip--${size}`} style={backgroundColor && { backgroundColor }} {...args}>
            {elemento}
          </span>
        ))}
      </>
    ) : (
      <span className={`tip--${size}`} style={backgroundColor && { backgroundColor }} {...args}>
        {label}
      </span>
    )}
  </>
);

Badge.propTypes = {
  backgroundColor: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  label: PropTypes.oneOf(["Deporte", "Arte", "Música"]),
};

Badge.defaultProps = {
  backgroundColor: "lightgreen",
  size: "small",
  label: "Deporte",
};
