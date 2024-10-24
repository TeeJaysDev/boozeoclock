import Link from "next/link";

interface ButtonProps {
  url: string;
  message: string;
}

const Button: React.FC<ButtonProps> = ({ url, message }) => {
  return (
    <Link href={url}>
      <button className="Button-button">{message}</button>
    </Link>
  );
};

export default Button;