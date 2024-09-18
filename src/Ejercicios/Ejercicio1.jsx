import React from "react";

export default function Ejercicio1() {
  return (
    <body>
      <div className="border-2  rounded-lg border-[#4dff00]">
        <div className="border-2  rounded-lg border-[#f90505]">
          <h1>Victoria's Journal</h1>
          <div className="border-2  rounded-lg border-[#f9be05]">
            <h2>So fresh and so clean</h2>
          </div>
        </div>
        <section className="border-2 rounded-lg border-[#055ef9]">
          <h2>
            <a className="border-2 rounded-lg border-[#f905d4]">04/09/08:</a>{" "}
            Spatulas
          </h2>
          <p>
            <img
              src="http://www.cs.washington.edu/education/courses/190m/09sp/labs/2-journal/images/spatula.gif"
              alt="Much-needed spatula"
            />
          </p>

          <p>
            Yesterday I went to the store and got some much-needed{" "}
            <a href="http://www.youtube.com/watch?v=2XbCWmY0eqY">spatulas</a>!
            (What better way to say I love myself than to buy myself a spatula?)
          </p>
        </section>
        <section className="border-2 rounded-lg border-[#055ef9]">
          <h2>
            <a className="border-2 rounded-lg border-[#f905d4]">04/08/08:</a>
            Cookie Monster Cupcakes
          </h2>
          <p>
            <img
              src="http://www.cs.washington.edu/education/courses/190m/09sp/labs/2-journal/images/cookiemonster.jpg"
              alt="Cookie Monster: in cupcake form!"
            />
          </p>

          <p>
            My favorite cartoon character is Cookie Monster, and my favorite
            dessert is cupcakes, so Cookie Monster cupcakes are the best of both
            worlds.
          </p>

          <p>
            Did you know? Cookie Monster once said,{" "}
            <q>
              Sometimes me think what is love, and then me think love is what
              last cookie is for. Me give up the last cookie for you.
            </q>{" "}
            I wonder if the same applies for cupcakes? (If so, I don't think I
            can ever love ANYONE!)
          </p>
        </section>
      </div>
      <p className="grid grid-cols-1 md:grid-cols-2">
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
