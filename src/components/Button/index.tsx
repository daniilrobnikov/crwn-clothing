import { FC, ButtonHTMLAttributes } from 'react'

export enum BUTTON_TYPE_CLASSES {
  google = 'google-sign-in',
  inverted = 'inverted',
}

export type ButtonProps = {
  buttonType?: keyof typeof BUTTON_TYPE_CLASSES
  children: React.ReactNode
  className?: string
  isLoading?: boolean
} & ButtonHTMLAttributes<HTMLButtonElement>

const Button: FC<ButtonProps> = ({
  children,
  buttonType,
  isLoading,
  className,
  ...otherProps
}) => (
  <button
    className={`button-container ${
      buttonType && BUTTON_TYPE_CLASSES[buttonType]
    } ${className}`}
    {...otherProps}
    disabled={isLoading}
  >
    {isLoading ? <div className='spinner-container' /> : <>{children}</>}
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
        align-items: center;
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
      .button-container:disabled .spinner-container {
        display: inline-block;
        width: 30px;
        height: 30px;
        border: 3px solid rgba(195, 195, 195, 0.6);
        border-radius: 50%;
        border-top-color: #636767;
        animation: spin 1s ease-in-out infinite;
      }
      @keyframes spin {
        to {
          transform: rotate(360deg);
        }
      }
    `}</style>
  </button>
)

export default Button
