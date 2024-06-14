const MostRead = () => {
  return (
    <div className="mt-6 lg:mt-12 grid lg:grid-cols-2 lg:gap-12 work-sans-font pb-[150px]">

            <section className="mx-5 lg:mx-0 lg:h-[600px] lg:w-full card-img-div p-[74px]">
                <img className="w-full lg:h-full" src="https://i.ibb.co/cF5qPjq/tim-alex-x-G5-VJW-7-Bio-unsplash.jpg" alt="" />
            </section>

            <section className="mx-5 lg:mx-0 playfair-display-font mt-5 text-center lg:mt-[200px]">

                <h1 className="lg:text-[40px]  font-bold">The Chronicles of <br /> NARNDA</h1>
                <p className="lg:text-xl font-bold py-5">By : F. Scott Fitzgerald </p>
                

                <div className="space-y-2">

                    <div className="">
                        <p className=" font-bold">Publisher: Scribner</p>
                    </div>

                    <div className="">
                        <p className=" font-bold">Year of Publishing: 1925</p>
                    </div>
                </div>

                

            </section>
        </div>
  );
};

export default MostRead;
