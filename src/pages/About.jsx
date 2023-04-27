import PageTitle from "../assets/title";

const About = () => {
  PageTitle("About");

  return (
    <div className="page">
      <div className="mx-36 mb-20">
        <div className="flex justify-between items-center py-10">
          <h3
            className="font-semibold text-emerald-600"
            style={{
              fontSize: "40px",
            }}
          >
            Easier trade for Africa
          </h3>
          <div className="flex justify-end items-center w-fit">
            <img
              className="rounded-md"
              style={{
                width: "30%",
              }}
              src="https://images.pexels.com/photos/8555673/pexels-photo-8555673.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="thumbnail"
            />
            <div className="mx-4"></div>
            <img
              className="rounded-md"
              style={{
                width: "30%",
              }}
              src="https://images.pexels.com/photos/7821518/pexels-photo-7821518.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="thumbnail"
            />
          </div>
        </div>
        <div className="flex justify-between items-center py-10">
          <div className="flex justify-start items-center w-fit">
            <img
              className="rounded-md"
              style={{
                width: "40%",
              }}
              src="https://images.pexels.com/photos/5686109/pexels-photo-5686109.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="thumbnail"
            />
            <div className="mx-4"></div>
            <img
              className="rounded-md"
              style={{
                width: "40%",
              }}
              src="https://images.pexels.com/photos/5673488/pexels-photo-5673488.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="thumbnail"
            />
          </div>
          <p className="text-lg text-emerald-600">
            We make trading in Africa easier and more beneficial to more people
          </p>
        </div>
      </div>
      <div className="pt-12 bg-gradient-to-t from-emerald-50 to-white w-full"></div>
      <div className="px-36 py-12 bg-emerald-50">
        <div className="flex justify-center items-center py-4">
          <div>
            <h4 className="text-xl font-semibold text-emerald-600">
              Our Vision
            </h4>
            <p>Empower people and businesses by making it easier to trade.</p>
          </div>
          <div className="mx-8"></div>
          <img
            className="rounded-md"
            style={{
              width: "40%",
            }}
            src="https://images.pexels.com/photos/1181360/pexels-photo-1181360.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="thumbnail"
          />
        </div>
        <div className="flex justify-center items-center py-4">
          <img
            className="rounded-md"
            style={{
              width: "40%",
            }}
            src="https://images.pexels.com/photos/3184344/pexels-photo-3184344.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="thumbnail"
          />
          <div className="mx-8"></div>
          <div className="text-end">
            <h4 className="text-xl font-semibold text-emerald-600">
              Our Mission
            </h4>
            <p>Power Africa’s growth by making it easier to trade.</p>
          </div>
        </div>
      </div>
      <div className="pb-12 mb-20 bg-gradient-to-b from-emerald-50 to-white w-full"></div>
      <div className="mx-36 mb-12 text-center">
        <h4 className="font-semibold text-emerald-600 text-3xl mb-8">
          The Founding Team
        </h4>
        <div className="flex justify-between items-center">
          <div
            style={{
              width: "20%",
            }}
          >
            <img
              src="https://images.pexels.com/photos/7648469/pexels-photo-7648469.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="thumbnail"
              className="rounded-md mb-2"
            />
            <p className="font-semibold text-lg">John Doe</p>
          </div>
          <div className="mx-4"></div>
          <div
            style={{
              width: "20%",
            }}
          >
            <img
              src="https://images.pexels.com/photos/5668778/pexels-photo-5668778.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="thumbnail"
              className="rounded-md mb-2"
            />
            <p className="font-semibold text-lg">Jim Jones</p>
          </div>
          <div className="mx-4"></div>
          <div
            style={{
              width: "20%",
            }}
          >
            <img
              src="https://images.pexels.com/photos/9304668/pexels-photo-9304668.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="thumbnail"
              className="rounded-md mb-2"
            />
            <p className="font-semibold text-lg">Mike Tyson</p>
          </div>
          <div className="mx-4"></div>
          <div
            style={{
              width: "20%",
            }}
          >
            <img
              src="https://images.pexels.com/photos/7647958/pexels-photo-7647958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt="thumbnail"
              className="rounded-md mb-2"
            />
            <p className="font-semibold text-lg">Jane Ice</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
