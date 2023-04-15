"use client";
import Image from "next/image";
import { FC } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

interface pageProps {}

// type Inputs = {
//   word: string;
//   exampleRequired: string;
// };

const schema = z.object({
  word: z.string().min(1, { message: "必須" }),
});

type Input = z.infer<typeof schema>;

const Home: FC<pageProps> = ({}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Input>({ resolver: zodResolver(schema) });
  const onSubmit: SubmitHandler<Input> = (data) => console.log(data);
  return (
    <>
      <section className="container flex items-center justify-center">
        <div className="max-w-[50rem] mx-auto p-5">
          <Image
            src={"/hero.svg"}
            alt="hero"
            width={500}
            height={500}
          />
        </div>
      </section>
      <section className="container">
        <div className="flex flex-col md:flex-row gap-2 flex-1">
          <div className="w-full md:w-1/2 flex flex-col items-center justify-center bg-gray-200">
            <p>word</p>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="flex flex-col md:flex-row items-center justify-center">
                <div>
                  <input
                    type="text"
                    {...register("word")}
                  />
                  <p className="text-red-400">{errors.word ? "error" : "ok"}</p>
                </div>
                <div className="flex">
                  <button
                    className="w-full border border-black px-4 py-2 rounded-sm"
                    type="submit"
                  >
                    generate
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap">
                <p>group1</p>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="group1"
                    />
                    <span>option1</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="group1"
                    />
                    <span>option2</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="group1"
                    />
                    <span>option3</span>
                  </label>
                </div>
              </div>
              <div className="flex flex-wrap">
                <p>group2</p>
                <div>
                  <label>
                    <input
                      type="checkbox"
                      name="group2"
                    />
                    <span>option1</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="group2"
                    />
                    <span>option2</span>
                  </label>
                  <label>
                    <input
                      type="checkbox"
                      name="group2"
                    />
                    <span>option3</span>
                  </label>
                </div>
              </div>
            </form>
          </div>
          <div className="w-full md:w-1/2">
            <p>examples</p>
            <button>hide japanese</button>
            <ul>
              <li>I'm looking forward to the weekend.（週末が楽しみです。）</li>
              <li>The weather is quite nice today.（今日は天気がとても良いです。）</li>
              <li>Can you recommend a good restaurant?（良いレストランをおすすめできますか？）</li>
            </ul>
            <textarea
              className="w-full"
              rows={5}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
