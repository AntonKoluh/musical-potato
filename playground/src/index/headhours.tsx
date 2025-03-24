function Header1() {
  return (
    <div className="bg-[var(--header-hours-bg)] w-full hidden md:inline">
      <div className="flex flex-1 flex-row justify-between px-[40px] py-[5px] items-center h-[42px]">
        <div className="text-[var(--header-hours-text-folor)] font-bold font-[var(--header-hours-font)] text-[15px]">
          <p>Working Hours: 08AM - 08 PM</p>
        </div>
        <div className="flex flex-row align-center items-center justify-center gap-[15px]">
          <p className="text-[var(--header-hours-text-folor)] font-bold font-[var(--header-hours-font)] text-[15px]">Email: happypaw@email.com</p>
          <p className="text-[var(--header-hours-text-folor)] font-bold font-[var(--header-hours-font)] text-[15px]">Phone: +1 (234) 567 89 00</p>
        </div>
      </div>
    </div>
)}


export default Header1