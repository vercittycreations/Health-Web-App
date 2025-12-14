export default function PrimaryButton({ children, onClick, type = "button" }) {
  return (
    <button
      type={type}
      onClick={onClick}
      className="bg-primary text-white px-6 py-3 rounded-lg font-medium
                 hover:bg-secondary transition-all duration-300
                 shadow-md hover:shadow-lg"
    >
      {children}
    </button>
  )
}
