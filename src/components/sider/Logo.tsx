
import "./sider.css";


const Logo = ({ src }: { src: string }) => {
  return (
    <div className="logo-container">
      <img src={src} alt="Logo" className="logo-img" />
    </div>
  );
};

export default Logo;