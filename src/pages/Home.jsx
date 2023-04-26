import PageTitle from "../assets/title";

const Home = () => {
  PageTitle("Home");

  return (
    <div className="page">
      <div className="mx-36 flex justify-between items-center my-28">
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
        <iframe
          width="575"
          height="350"
          className="shadow-md"
          src="https://www.youtube.com/embed/VBHr0faDCoQ"
          title="Bebe Rexha &amp; Snoop Dogg - Satellite (Official Music Video)"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowfullscreen
        ></iframe>
      </div>
      <div className="items-center mx-36">
        <h4 className="text-emerald-600 text-2xl font-semibold text-center">
          Unlocking opportunities for businesses
        </h4>
        
      </div>
    </div>
  );
};

export default Home;
