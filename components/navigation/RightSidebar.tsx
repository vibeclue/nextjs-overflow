import Image from "next/image";
import Link from "next/link";

import ROUTES from "@/constants/routes";

import TagCard from "../cards/TagCard";

const hotQuestions = [
  {
    _id: "1",
    title: "Как стать лучшим в JS?",
  },
  {
    _id: "2",
    title: "Как оптимизировать производительность React-приложения?",
  },
  {
    _id: "3",
    title: "Что такое замыкания в JavaScript и как их использовать?",
  },
  {
    _id: "4",
    title: "Как работать с асинхронным кодом в Node.js?",
  },
  {
    _id: "5",
    title: "Лучшие практики для написания чистого кода в TypeScript?",
  },
  {
    _id: "6",
    title: "Как интегрировать API в Next.js приложение?",
  },
];

const popularTags = [
  {
    _id: "1",
    name: "javaScript",
    questions: 1500,
  },
  {
    _id: "2",
    name: "typeScript",
    questions: 1200,
  },
  {
    _id: "3",
    name: "react",
    questions: 1800,
  },
  {
    _id: "4",
    name: "next.js",
    questions: 900,
  },
  {
    _id: "5",
    name: "node.js",
    questions: 1100,
  },
  {
    _id: "6",
    name: "HTML",
    questions: 800,
  },
  {
    _id: "7",
    name: "CSS",
    questions: 950,
  },
  {
    _id: "8",
    name: "python",
    questions: 2000,
  },
  {
    _id: "9",
    name: "java",
    questions: 1700,
  },
  {
    _id: "10",
    name: "C++",
    questions: 1300,
  },
];

const RightSidebar = () => {
  return (
    <section
      className="pt-36 custom-scrollbar background-light900_dark200 light-border sticky right-0 top-0 
                        flex h-screen w-[350px] flex-col gap-6 overflow-y-auto border-l 
                        p-6 shadow-light-300 dark:shadow-none max-xl:hidden"
    >
      <div>
        <h3 className="h3-bold text-dark200_light900">Top Questions</h3>
        <div className="mt-7 flex w-full flex-col gap-[30px]">
          {hotQuestions.map(({ _id, title }) => (
            <Link
              key={_id}
              href={ROUTES.PROFILE(_id)}
              className="flex cursor-pointer items-center justify-between gap-7"
            >
              <p className="body-medium text-dark500_light700">{title}</p>
              <Image
                src="/icons/chevron-right.svg"
                alt="chevron"
                width={20}
                height={20}
                className="invert-colors"
              />
            </Link>
          ))}
        </div>
      </div>

      <div className="mt-16">
        <h3 className="h3-bold text-dark200_light900">Popular Tags</h3>

        <div className="mt-7 flex flex-col gap-4">
          {popularTags.map(({ _id, name, questions }) => (
            <TagCard
              key={_id}
              _id={_id}
              name={name}
              questions={questions}
              showCount
              compact
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default RightSidebar;
