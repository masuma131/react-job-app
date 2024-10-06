// Card component: A reusable component to wrap content with a background color, padding, and shadow.
const Card = ({ children, bg = 'bg-gray-100' }) => {
    // Apply dynamic background color (default: 'bg-gray-100') and other styling.
    return <div className={`${bg} p-6 rounded-lg shadow-md`}>{children}</div>;
  };
  export default Card;