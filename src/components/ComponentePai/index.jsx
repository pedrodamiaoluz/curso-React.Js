import * as S from "./styles";
import { Swiper, SwiperSlide } from "swiper/react";
import { Images } from "../../assets/images";

export default function ComponentePai() {
  const ArraySlide = [
    {
      id: 0,
      url: Images.ImgGalera,
      textAlt: "Imagem da Galera",
    },
    {
      id: 1,
      url: Images.ImgGalera,
      textAlt: "Imagem da Galera",
    },
    {
      id: 2,
      url: Images.ImgGalera,
      textAlt: "Imagem da Galera",
    },
  ];

  return (
    <>
      <S.Container>
        <Swiper
          slidesPerView={1}
          navigation
          pagination
          scrollbar={{ draggable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {ArraySlide.map((item) => {
            return (
              <SwiperSlide>
                <S.Images src={item.url} />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </S.Container>
    </>
  );
}
