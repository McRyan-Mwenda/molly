import { useState } from "react";
import PageTitle from "../assets/title";
import testimonials from "../assets/testimonials.json";

const Home = () => {
  PageTitle("Home");

  const length = testimonials.length;
  const [index, setIndex] = useState(0);

  const handlePrevious = () => {
    const newIndex = index - 1;
    setIndex(newIndex < 0 ? length - 1 : newIndex);
  };

  const handleNext = () => {
    const newIndex = index + 1;
    setIndex(newIndex >= length ? 0 : newIndex);
  };

  return (
    <div className="page">
      <div className="mx-36 flex justify-between items-center my-20">
        <div
          style={{
            width: "425px",
          }}
        >
          <h1
            className="text-emerald-600"
            style={{
              fontSize: "48px",
            }}
          >
            We help you grow and do more
          </h1>
          <br />
          <p>
            We don't just deliver, we also pick, store, pack and offer payment
            processing.
          </p>
          <br />
          <p>
            We power you to sell more, move goods efficiently and affordably.
          </p>
          <br />
          <a
            href=""
            className="px-4 py-2 border rounded-md bg-emerald-500 hover:bg-emerald-600 nav-link text-zinc-50 hover:text-white"
          >
            Book a demo
          </a>
        </div>
        <div className="shadow-md iframe-container">
          <iframe
            width="575"
            height="350"
            src="https://www.youtube.com/embed/VBHr0faDCoQ"
            title="Bebe Rexha &amp; Snoop Dogg - Satellite (Official Music Video)"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <h4 className="text-emerald-600 text-2xl font-semibold text-center mb-20">
        Unlocking opportunities for businesses
      </h4>
      <div className="flex justify-evenly items-center mx-36 mb-20">
        <div className="shadow-md rounded-md w-full bg-emerald-50">
          <img
            src="https://images.pexels.com/photos/6694543/pexels-photo-6694543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="business app thumbnail"
            className="rounded-t-md"
          />
          <div className="p-4">
            <span className="text-gray-600">
              Your business management solution
            </span>
            <br />
            <br />
            <p className="text-2xl text-emerald-600 font-semibold">
              We pick, store, pack & deliver.
            </p>
            <br />
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              fugit!
            </p>
            <br />
            <a href="" className="font-semibold hover:text-emerald-600">
              Learn more{" "}
              <i className="bi bi-arrow-right-short font-semibold"></i>
            </a>
          </div>
        </div>
        <div className="mx-4"></div>
        <div className="shadow-md rounded-md w-fit bg-emerald-50">
          <img
            src="https://images.pexels.com/photos/8475145/pexels-photo-8475145.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="payment solution thumbnail"
            className="rounded-t-md"
          />
          <div className="p-4">
            <span className="text-gray-600">
              Your everywhere-everytime payment solution
            </span>
            <br />
            <br />
            <p className="text-2xl text-emerald-600 font-semibold">
              We pick, pack & deliver.
            </p>
            <br />
            <p className="text-lg">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi,
              fugit!
            </p>
            <br />
            <a href="" className="font-semibold hover:text-emerald-600">
              Learn more{" "}
              <i className="bi bi-arrow-right-short font-semibold"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="py-8 bg-gradient-to-t from-emerald-50 to-white w-full"></div>
      <div className="w-full px-36 bg-emerald-50">
        <h4 className="text-2xl font-semibold text-center mb-8 text-emerald-600">
          How Do We Make Your Team Life Easier?
        </h4>
        <div className="flex items-center justify-between">
          <div className="text-center mx-4 border bg-emerald-100 shadow-md p-4 rounded-md">
            <i
              class="bi bi-gem"
              style={{
                fontSize: "50px",
              }}
            ></i>
            <br />
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="text-center mx-4 border bg-emerald-100 shadow-md p-4 rounded-md">
            <i
              class="bi bi-bar-chart-line"
              style={{
                fontSize: "50px",
              }}
            ></i>
            <br />
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="text-center mx-4 border bg-emerald-100 shadow-md p-4 rounded-md">
            <i
              class="bi bi-bezier2"
              style={{
                fontSize: "50px",
              }}
            ></i>
            <br />
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
          <div className="text-center mx-4 border bg-emerald-100 shadow-md p-4 rounded-md">
            <i
              class="bi bi-cpu"
              style={{
                fontSize: "50px",
              }}
            ></i>
            <br />
            <p className="text-xl">Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
      </div>
      <div className="py-12 bg-gradient-to-b from-emerald-50 to-white w-full mb-16"></div>
      <div className="mb-16 w-full">
        <div className="mx-auto w-fit">
          <iframe
            width="850"
            height="531"
            src="https://www.youtube.com/embed/boDqR_lXPYA"
            title="If only Naruto was animated like this"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="py-8 bg-gradient-to-t from-emerald-50 to-white w-full"></div>
      <div className="w-full px-36 bg-emerald-50">
        <h4 className="text-2xl font-semibold text-center mb-8 text-emerald-600">
          Testimonies from our beloved customers
        </h4>
        <div className="carousel flex justify-between items-center">
          <button onClick={handlePrevious}>
            <i
              className="slider-arrow bi bi-arrow-left-circle-fill cursor-pointer text-emerald-500 hover:text-emerald-600"
              style={{
                fontSize: "40px",
              }}
            ></i>
          </button>
          <div
            className="border border-gray-200 shadow-md rounded-md py-4 px-8 bg-emerald-100"
            style={{
              width: "70%",
            }}
          >
            <div className="flex items-center mb-2">
              <img
                className="rounded-full"
                style={{
                  width: "10%",
                }}
                src={testimonials[index].image}
                alt="customer image"
              />
              <p className="font-semibold mx-4">
                Name: {testimonials[index].name}
              </p>
            </div>
            <p className="mb-2">Message: {testimonials[index].message}</p>
            <p className="font-thin italic text-gray-600">
              Work: {testimonials[index].work}
            </p>
          </div>
          <button onClick={handleNext}>
            <i
              className="slider-arrow bi bi-arrow-right-circle-fill cursor-pointer text-emerald-500 hover:text-emerald-600"
              style={{
                fontSize: "40px",
              }}
            ></i>
          </button>
        </div>
      </div>
      <div className="py-12 bg-gradient-to-b from-emerald-50 to-white w-full mb-16"></div>
      <div className="mb-16 text-center mx-36">
        <h4 className="text-2xl text-emerald-600 font-semibold mb-8">
          Start doing more with Finance Fluent
        </h4>
        <p className="px-4">
          We bring together everything that’s required for e-commerce and
          consumer brands to ship goods to consumers across Africa. It’s our
          mission to make trade easier.
        </p>
        <br />
        <br />
        <a
          href=""
          className="px-4 py-2 border rounded-md bg-emerald-500 hover:bg-emerald-600 nav-link text-zinc-50 hover:text-white"
        >
          Go to app
        </a>
      </div>
    </div>
  );
};

export default Home;
