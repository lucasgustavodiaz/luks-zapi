const Button = ({ styles, text, onClick, disable, img }) => (
  <button
    className={`m-[10px] flex h-[auto] w-[200px] cursor-pointer items-center justify-center rounded-lg bg-[#ff0038] p-[10px] text-center font-montserrat text-[16px] font-bold leading-[1.2] text-white outline-none hover:opacity-70 active:opacity-100 ${styles} ${
      disable ? `cursor-not-allowed bg-gray-500 hover:opacity-100` : null
    } `}
    onClick={onClick}
  >
    {img ? <img src={img} alt="" className="ml-[10px] h-[15px] w-[15px]" /> : null}
    {text}
  </button>
)

export default Button
