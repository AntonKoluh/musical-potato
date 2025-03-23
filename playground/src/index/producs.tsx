import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

function Products() {
  return (
    <section className="flex-col justify-center items-center text-center">
      <div className="flex-col justify-center items-center px-[15px]">
        <h2 className="text-[30px] px-[15px] font-bold font-(family-name:--secondary-font)">
          Any Products for Any Pets
        </h2>
        <img
          className="mx-auto mt-[20px] h-[32px] w-auto"
          src="/img/products-bone.svg"
          alt="bone separator"
          width="200"
        />
        <p className="mt-[20px] text-[19px] font-(family-name:--header-hours-font)">
          Best picks for your beloved companions only in Pets R Us
        </p>
      </div>
      <Carousel className="mx-auto w-[70vw] mt-[45px]">
        <CarouselContent className="mx-auto">
          <CarouselItem className="mx-auto md:basis-1/2 lg:basis-1/3">
            <div className="mx-auto px-[20px] py-[33px] border-[1px]">
              <img
                src="/img/products_carusel/products-carusel-cat.webp"
                alt="Cat"
                className="mx-auto w-[70px] h-[70px] rounded-full"
              />
              <p className="mt-[20px] font-bold text-[22px] font-(family-name:--header-hours-font)">
                For Cats
              </p>
              <ul className="mt-[20px] text-[15px] list-disc">
                <li className="inline mr-4">Dry Food</li>
                <li className="inline mr-4">Wet Food</li>
                <li className="inline mr-4">Treats</li>
                <li className="inline mr-4">Catnip & Grass</li>
                <li className="inline mr-4">Litter Boxes</li>
                <li className="inline mr-4">Bowls & Feeders</li>
                <li className="inline mr-4">Toys</li>
                <li className="inline mr-4">Beds</li>
              </ul>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="mx-auto px-[20px] py-[33px] border-[1px]">
              <img
                src="/img/products_carusel/products-carusel-dog.webp"
                alt="Dog"
                className="mx-auto w-[70px] h-[70px] rounded-full"
              />
              <p className="mt-[20px] font-bold text-[22px] font-(family-name:--header-hours-font)">
                For Dogs
              </p>
              <ul className="mt-[20px] text-[15px] list-disc">
                <li className="inline mr-4">Dry & Canned Food</li>
                <li className="inline mr-4">Jerky</li>
                <li className="inline mr-4">Chewy Treats</li>
                <li className="inline mr-4">Bowls</li>
                <li className="inline mr-4">Toys</li>
                <li className="inline mr-4">Collars and Leashes</li>
                <li className="inline mr-4">Clothes</li>
              </ul>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="mx-auto px-[20px] py-[33px] border-[1px]">
              <img
                src="/img/products_carusel/products-carusel-parrot.webp"
                alt="Parrot"
                className="mx-auto w-[70px] h-[70px] rounded-full"
              />
              <p className="mt-[20px] font-bold text-[22px] font-(family-name:--header-hours-font)">
                For Parrots
              </p>
              <ul className="mt-[20px] text-[15px] list-disc">
                <li className="inline mr-4">Food</li>
                <li className="inline mr-4">Treats</li>
                <li className="inline mr-4">Cages & Stands</li>
                <li className="inline mr-4">Vitamins</li>
                <li className="inline mr-4">Bowls & Feeders</li>
                <li className="inline mr-4">Litter & Nesting</li>
                <li className="inline mr-4">Odor Control</li>
              </ul>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="mx-auto px-[20px] py-[33px] border-[1px]">
              <img
                src="/img/products_carusel/products-carusel-rabbit.webp"
                alt="Rabbit"
                className="mx-auto w-[70px] h-[70px] rounded-full"
              />
              <p className="mt-[20px] font-bold text-[22px] font-(family-name:--header-hours-font)">
                For Rabbits
              </p>
              <ul className="mt-[20px] text-[15px] flex flex-wrap">
                <li className="inline mr-4">Food</li>
                <li className="inline mr-4">Treats</li>
                <li className="inline mr-4">Hay</li>
                <li className="inline mr-4">Cages</li>
                <li className="inline mr-4">Bedding</li>
                <li className="inline mr-4">Harnesses</li>
                <li className="inline mr-4">Toys</li>
                <li className="inline mr-4">Odor Removers</li>
              </ul>
            </div>
          </CarouselItem>
          <CarouselItem className="md:basis-1/2 lg:basis-1/3">
            <div className="mx-auto px-[20px] py-[33px] border-[1px]">
              <img
                src="/img/products_carusel/products-carusel-fish.webp"
                alt="Fish"
                className="mx-auto w-[70px] h-[70px] rounded-full"
              />
              <p className="mt-[20px] font-bold text-[22px] font-(family-name:--header-hours-font)">
                For Fishes
              </p>
              <ul className="mt-[20px] text-[15px] flex flex-wrap">
                <li className="inline mr-4">Food</li>
                <li className="inline mr-4">Feeders</li>
                <li className="inline mr-4">Aquariums</li>
                <li className="inline mr-4">Filters</li>
                <li className="inline mr-4">Cleaning</li>
                <li className="inline mr-4">Water Care</li>
                <li className="inline mr-4">Decor</li>
              </ul>
            </div>
          </CarouselItem>
          <CarouselItem className="mx-auto md:basis-1/2 lg:basis-1/3">
          <div className="mx-auto px-[20px] py-[33px] border-[1px] w-[100%]">
        <img
          src="/img/products_carusel/products-carusel-hamster.webp"
          alt="Hamster"
          className="mx-auto w-[70px] h-[70px] rounded-full"
        />
        <p className="mt-[20px] font-bold text-[22px] font-(family-name:--header-hours-font)">
                For Hamsters
              </p>
        <ul className="mt-[20px] text-[15px] w-[100%] flex flex-wrap">
          <li className="inline mr-4">Food</li>
          <li className="inline mr-4">Chewy Treats</li>
          <li className="inline mr-4">Litter</li>
          <li className="inline mr-4">Furniture</li>
          <li className="inline mr-4">Bowls</li>
          <li className="inline mr-4">Toys</li>
          <li className="inline mr-4">Beds</li>
        </ul>
      </div>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </section>
  );
}

export default Products;
