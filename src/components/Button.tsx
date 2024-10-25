import Link from "next/link";

interface ButtonProps {
  url: string;
  id: string;
  message: string;
}

const Button: React.FC<ButtonProps> = ({ url, id, message }) => {
  return (
    <Link
      href={{
        pathname: url,
        query: {
          id: id
        },
      }}
    >
      <button className="Button-button">{message}</button>
    </Link>
  );
};

export default Button;
