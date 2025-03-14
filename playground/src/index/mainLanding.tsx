function MainLanding() {
  return (
    <section className="bg-[url('/img/landing-background.png')] bg-cover bg-center h-screen w-full">
      <div className="pt-[110px] pb-[150px] text-(--main-text-color) gap-[60px] flex flex-col justify-start px-[24px]">
        <h1 className ="text-5xl font-(family-name:--secondary-font) font-cursive font-bold md:text-[70px] lg:text-[82px]">Everything Your Pet Needs</h1>
        <p className="text-[19px] font-(family-name:--header-hours-font)">Pet supplies, foodm and products from the best manufacturers</p>
        <div className="flex flex-col w-41 gap-[30px] justify-center items-center sm:flex-row sm:gap-[15px] sm:w-100">
          <div className="btn btn--orange">
            <a href="#about">About Us</a>
          </div>
          <div className="btn btn--empty">
            <a href="#categories">Categories</a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              version="1.1"
              x="0px"
              y="0px"
              viewBox="0 0 100 100"
              enable-background="new 0 0 100 100"
              style={{ maxWidth: "100%" }}
              height="100%"
            >
              <g fill="currentColor">
                <polygon
                  points="76.389,53.202 76.389,63.601 89.991,50.003 76.39,36.401 76.389,46.8 10.011,46.8 10.011,53.201  "
                  fill="currentColor"
                ></polygon>
              </g>
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
}

export default MainLanding;
