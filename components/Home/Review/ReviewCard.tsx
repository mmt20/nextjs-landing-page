import Image from "next/image";
import React from "react";
import { BsQuote } from "react-icons/bs";

interface IProps {
  image: string;
  name: string;
  role: string;
}
const ReviewCard = ({ image, name, role }: IProps) => {
  return (
    <div>
      <BsQuote className="w-14 h-14 text-pink-500" />
      <p className="text-center text-gray-800 dark:text-gray-200 text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem laboriosam dicta nulla ratione numquam quia
        dignissimos pariatur, eum aut optio amet perferendis tempora adipisci. Praesentium delectus ipsam pariatur
        ratione odit officiis quod voluptatem nulla aperiam?
      </p>
      <div className="mt-6">
        <Image src={image} alt={name} width={100} height={100} className="object-center mx-auto rounded-full" />
        <h1 className="text-lg font-bold text-center mt-4">{name}</h1>
        <h1 className="text-center text-gray-500">{role}</h1>
      </div>
    </div>
  );
};

export default ReviewCard;
