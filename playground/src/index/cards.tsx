function Cards() {
  return (
    <section className="py-[60px]">
      <div className="flex flex-col justify-center items-center px-[24px] w-full sm:flex-row">
        <div className="bg-[url('/img/best-quality-background.webp')] bg-cover bg-center h-cover w-cover flex flex-col py-[35px] px-[31px] h-[267px] justify-enter items-center mx-[15px] flex-1 w-74">
          <p className="text-[14px] font-bold text-(--header-hours-text-folor) "> BUTCHERS, ROYAL CANIN, PEDIGREE</p>
          <h3 className="mt-[20px] text-[30px] font-(family-name:--secondary-font) font-bold text-(--main-text-color)">Best-Quality</h3>
          <p className="mt-[-15px] text-[30px] font-(family-name:--secondary-font) font-bold text-(--main-text-color)">Food for Pets</p>
          <div className="btn btn--orange mt-[35px]">
            <a href="#pricing">Buy Now</a>
          </div>
        </div>
        <div className="bg-[url('/img/get-off-background.webp')] bg-cover bg-center h-cover w-cover flex flex-col py-[35px] px-[31px] mt-[50px] justify-center items-center gap-[46px] h-[267px] mx-[15px] flex-1 w-74 sm:mt-0">
          <h3 className="font-bold text-center text-[28px] font-(family-name:--secondary-font)">
            Get <span className="text-(--header-hours-text-folor) font-bold">10%</span> Off for Cats & Dogs
            Stuff
          </h3>
          <div className="btn btn--orange text-center">
            <a href="#pricing">See products</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Cards;
