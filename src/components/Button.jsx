const Button = ({ styles, text, onClick, disable }) => (
  <button
    type="button"
    className={`m-[10px] h-[auto] w-[200px] cursor-pointer rounded-lg bg-[#ff0038] p-[10px] text-center font-montserrat text-[16px] font-bold leading-[1.2] text-white outline-none hover:opacity-70 active:opacity-100 ${styles} `}
    onClick={onClick}
  >
    {text}
  </button>
)

export default Button
