const Button = ({ styles, text, onClick }) => (
  <button
    type="button"
    className={`font-montserrat font-bold m-[10px] p-[10px] leading-5 text-[16px] h-[auto] text-white rounded-lg w-[200px] cursor-pointer bg-[#ff0038] text-center hover:opacity-70 active:opacity-100 outline-none ${styles} `}
    onClick={onClick}
  >
    {text}
  </button>
)

export default Button
