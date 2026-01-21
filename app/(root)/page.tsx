import Link from "next/link";

import { auth } from "@/auth";
import QuestionCard from "@/components/cards/QuestionCard";
import HomeFilter from "@/components/filters/HomeFilter";
import LocalSearch from "@/components/search/LocalSearch";
import { Button } from "@/components/ui/button";
import ROUTES from "@/constants/routes";

interface SearchParams {
  searchParams: Promise<{ [key: string]: string }>;
}

const filteredQuestions = [
  {
    _id: "1",
    title: "Как правильно типизировать useState с объектом в TypeScript?",
    tags: [
      { _id: "t1", name: "typescript" },
      { _id: "t2", name: "react" },
      { _id: "t3", name: "next.js" },
    ],
    author: {
      _id: "u1",
      name: "Алексей Петров",
      image: "https://avatarko.ru/img/kartinka/33/multfilm_lyagushka_32117.jpg", // или URL аватарки
    },
    views: 1247,
    answers: 5,
    upvotes: 42,
    createdAt: new Date("2025-12-22T13:25:00Z"),
  },
  {
    _id: "2",
    title: "Почему мой Tailwind класс не применяется после деплоя на Vercel?",
    tags: [
      { _id: "t4", name: "tailwindcss" },
      { _id: "t5", name: "vercel" },
    ],
    author: {
      _id: "u2",
      name: "Мария Иванова",
      image: "/avatars/maria.jpg",
    },
    views: 892,
    answers: 8,
    upvotes: 38,
    createdAt: new Date(),
  },
  {
    _id: "3",
    title: "Лучший способ оптимизировать изображения в Next.js 14 с App Router",
    tags: [
      { _id: "t6", name: "next.js" },
      { _id: "t7", name: "performance" },
      { _id: "t8", name: "image-optimization" },
    ],
    author: {
      _id: "u3",
      name: "Дмитрий Сидоров",
      image: "/avatars/dmitry.jpg",
    },
    views: 2156,
    answers: 12,
    upvotes: 89,
    createdAt: new Date("2025-12-10T09:15:00Z"),
  },
  {
    _id: "4",
    title:
      "Как реализовать серверные действия (server actions) с валидацией Zod?",
    tags: [
      { _id: "t9", name: "next.js" },
      { _id: "t10", name: "zod" },
      { _id: "t11", name: "server-actions" },
    ],
    author: {
      _id: "u4",
      name: "Ольга Кузнецова",
      image: "/avatars/olga.jpg",
    },
    views: 567,
    answers: 3,
    upvotes: 27,
    createdAt: new Date("2025-12-21T18:45:00Z"),
  },
];

const Home = async ({ searchParams }: SearchParams) => {
  const session = await auth();

  const { query = "" } = await searchParams;

  return (
    <>
      <section className="flex w-full flex-col-reverse sm:flex-row justify-between gap-4 sm:items-center">
        <h1 className="h1-bold text-dark100_light900">All Questions</h1>
        <Button
          className="primary-gradient min-h-11.5 px-4 py-3 text-light-900! cursor-pointer"
          asChild
        >
          <Link href={ROUTES.ASK_QUESTION}>Ask a question</Link>
        </Button>
      </section>
      <section className="mt-11">
        <LocalSearch
          route="/"
          imgSrc="/icons/search.svg"
          placeholder="Search questions..."
          otherClasses="flex-1"
        />
      </section>
      <HomeFilter />
      <div className="mt-10 flex w-full flex-col gap-6">
        {filteredQuestions.map((question) => (
          <QuestionCard key={question._id} question={question} />
        ))}
      </div>
    </>
  );
};

export default Home;
