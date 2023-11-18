"use client";

import { Container, Title } from "@/common/ui";
import Image, { StaticImageData } from "next/image";

import ReviewsBG from "./static/reviews.jpg";
import Avatar1 from "./static/avatar1.jpg";
import Avatar2 from "./static/avatar2.jpg";
import Avatar3 from "./static/avatar3.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import CardReview from "./CardReview";

function Reviews() {
    return (
        <section id="reviews" className="min-h-screen relative bg-black">
            <Container>
                <div className="relative z-10 py-16 md:py-20 flex flex-col gap-14 sm:gap-16 md:gap-20 lg:gap-32">
                    <Title className="text-white text-center pt-4">
                        Відгуки моїх клієнтів &#10084;&#65039;
                    </Title>
                    <div className="sm:px-10 justify-self-stretch">
                        <Swiper
                            modules={[Autoplay]}
                            slidesPerView={1}
                            spaceBetween={15}
                            autoHeight={true}
                            loop={true}
                            speed={1200}
                            autoplay={{
                                delay: 4000,
                            }}
                            breakpoints={{
                                640: {
                                    slidesPerView: 2,
                                },
                                1024: {
                                    slidesPerView: 3,
                                    spaceBetween: 30
                                },
                            }}>
                            {reviews.map((i) => {
                                return (
                                    <SwiperSlide
                                        className="rounded-3xl"
                                        key={i.id}>
                                        <CardReview
                                            avatar={i.avatar}
                                            altAvatar={i.altAvatar}
                                            name={i.name}
                                            ocupation={i.ocupation}
                                            text={i.text}
                                        />
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </Container>
            <Image
                src={ReviewsBG}
                alt={"Reviews background"}
                fill
                className="object-cover opacity-70"
            />
        </section>
    );
}

export default Reviews;

export type ReviewType = {
    id: number;
    avatar: StaticImageData;
    altAvatar: string;
    name: string;
    ocupation: string;
    text: string;
};

const reviews: ReviewType[] = [
    {
        id: 1,
        avatar: Avatar1,
        altAvatar: "Avatar",
        name: "Світлана Левін",
        ocupation: "Проджект менеджер",
        text: "Я думаю, що якщо ви щось робите, і це виходить досить добре, то вам слід піти зробити щось інше чудове, а не зациклюватися на цьому надто довго.",
    },
    {
        id: 2,
        avatar: Avatar2,
        altAvatar: "Avatar",
        name: "Богдан Кучерів",
        ocupation: "Розробник Java",
        text: "Основним елементом супрематизму в живописі, як і в архітектурі, є його звільнення від усіх соціальних чи матеріалістичних тенденцій. Через супрематизм мистецтво набуває свого чистого і незабрудненого вигляду.",
    },
    {
        id: 3,
        avatar: Avatar3,
        altAvatar: "Avatar",
        name: "Жанна Приймаченко",
        ocupation: "Стоматолог",
        text: "Я думаю, що якщо ви щось робите, і це виходить досить добре, то вам слід піти зробити щось інше чудове, а не зациклюватися на цьому надто довго.",
    },
];