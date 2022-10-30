const BUTTON_TYPE_CLASSES = {
  google: 'google-sign-in',
  inverted: 'inverted',
}

const Button = ({ children, buttonType, ...otherProps }) => (
  <button
    className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`}
    {...otherProps}
  >
    {children}
    <style jsx>{`
      .button-container {
        min-width: 165px;
        width: auto;
        height: 50px;
        letter-spacing: 0.5px;
        line-height: 50px;
        padding: 0 35px 0 35px;
        font-size: 15px;
        background-color: black;
        color: white;
        text-transform: uppercase;
        font-family: 'Open Sans';
        font-weight: bolder;
        border: none;
        cursor: pointer;
        display: flex;
        justify-content: center;
      }
      .button-container:hover {
        background-color: white;
        color: black;
        border: 1px solid black;
      }

      .button-container.inverted {
        background-color: white;
        color: black;
        border: 1px solid black;
      }
      .button-container.inverted:hover {
        background-color: black;
        color: white;
        border: none;
      }

      .button-container.google-sign-in {
        background-color: #4285f4;
        color: white;
      }
      .button-container.google-sign-in:hover {
        background-color: #357ae8;
        border: none;
      }
    `}</style>
  </button>
)

export default Button
