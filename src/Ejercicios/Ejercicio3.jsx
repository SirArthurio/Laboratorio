import React from "react";

export default function Ejercicio3() {
  return (
    <body className="bg-[url('http://www.cs.washington.edu/education/courses/190m/09sp/labs/2-journal/images/background.gif')] min-h-screen p-4">
      <div className="border-2  p-4 rounded-lg border-[#4dff00] bg-white">
        <div className="border-2 m-4  p-4 rounded-lg border-[#f90505] bg-white">
          <h1 className="text-end text-2xl">Victoria's Journal</h1>
          <div className="border-2  rounded-lg border-[#f9be05]">
            <h2 className="text-end">So fresh and so clean</h2>
          </div>
        </div>
        <section className="border-2 m-4 p-4 rounded-lg border-[#055ef9] bg-[#E8FBFB]">
          <div className="grid grid-cols-1 md:grid-cols-2">
            <section className="text-justify m-2">
              <h2 className="m-2">
                <a className="border-2 m-2 border-[#f905d4]">04/09/08:</a>
                Spatulas
              </h2>
              <p>
                Yesterday I went to the store and got some much-needed{" "}
                <a href="http://www.youtube.com/watch?v=2XbCWmY0eqY">
                  spatulas
                </a>
                ! (What better way to say I love myself than to buy myself a
                spatula?)
              </p>
            </section>
            <section className="flex justify-center">
              <p>
                <img
                  src="http://www.cs.washington.edu/education/courses/190m/09sp/labs/2-journal/images/spatula.gif"
                  alt="Much-needed spatula"
                />
              </p>
            </section>
          </div>
        </section>
        <section className="border-2 m-4 p-4 rounded-lg border-[#055ef9] bg-[#E8FBFB]">
          <h2 className=" m-2">
            <a className="border-2 m-2 border-lg border-[#f905d4]">04/08/08:</a>
            Cookie Monster Cupcakes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2">
            <section className="text-justify m-2">
              <p>
                My favorite cartoon character is Cookie Monster, and my favorite
                dessert is cupcakes, so Cookie Monster cupcakes are the best of
                both worlds.
              </p>

              <p>
                Did you know? Cookie Monster once said,{" "}
                <q>
                  Sometimes me think what is love, and then me think love is
                  what last cookie is for. Me give up the last cookie for you.
                </q>{" "}
                I wonder if the same applies for cupcakes? (If so, I don't think
                I can ever love ANYONE!)
              </p>
            </section>
            <section className="m-2 ">
              <p className="flex justify-center">
                <img
                  src="http://www.cs.washington.edu/education/courses/190m/09sp/labs/2-journal/images/cookiemonster.jpg"
                  alt="Cookie Monster: in cupcake form!"
                />
              </p>
            </section>
          </div>
        </section>
      </div>
      <p className="grid grid-cols-1 md:grid-cols-2 m-2 p-2">
        <a href="http://validator.w3.org/check/referer">
          <img src="http://www.w3.org/Icons/valid-xhtml11" alt="Valid XHTML" />
        </a>
        <a href="http://jigsaw.w3.org/css-validator/check/referer">
          <img
            src="http://jigsaw.w3.org/css-validator/images/vcss"
            alt="Valid CSS"
          />
        </a>
      </p>
    </body>
  );
}
