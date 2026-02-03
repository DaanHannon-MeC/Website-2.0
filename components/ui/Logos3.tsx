import AutoScroll from "embla-carousel-auto-scroll";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "./carousel";

interface Logo {
  id: string;
  description: string;
  image: string;
  className?: string;
}

interface Logos3Props {
  heading?: string;
  logos?: Logo[];
  className?: string;
}

const Logos3 = ({
  heading,
  logos = [],
  className = "",
}: Logos3Props) => {
  return (
    <section className={`py-24 bg-brand-cream ${className}`}>
      {heading && (
        <div className="container flex flex-col items-center text-center mb-16">
          <h2 className="text-2xl font-bold text-pretty lg:text-4xl font-serif italic text-brand-black">
            {heading}
          </h2>
        </div>
      )}
      <div className="relative mx-auto flex items-center justify-center">
        <Carousel
          opts={{ loop: true }}
          plugins={[AutoScroll({ playOnInit: true, speed: 1 })]}
        >
          <CarouselContent className="ml-0">
            {logos.map((logo) => (
              <CarouselItem
                key={logo.id}
                className="flex basis-1/2 justify-center pl-0 sm:basis-1/3 md:basis-1/5 lg:basis-1/6"
              >
                <div className="mx-4 md:mx-10 flex shrink-0 items-center justify-center">
                  <img
                    src={logo.image}
                    alt={`${logo.description} - Client logo, professionele videoproductie door Zeget'is videograaf Mechelen`}
                    title={`${logo.description} - Zeget'is portfolio client`}
                    className={logo.className || "h-8 md:h-12 w-auto object-contain filter grayscale opacity-60 hover:opacity-100 hover:grayscale-0 transition-all"}
                  />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-brand-cream to-transparent z-10 pointer-events-none"></div>
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-brand-cream to-transparent z-10 pointer-events-none"></div>
      </div>
    </section>
  );
};

export { Logos3 };
