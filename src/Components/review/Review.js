// import { Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// import "swiper/css/navigation";
// import { Navigation } from "swiper/modules";

// const testimonialImages = [
//     "/reviews1.jpg", // هذه هي الصورة التي أرسلتها
//     "/logo512.png"
// ];

// export default function TestimonialsImagesSlider() {
//     return (
//         <div className="w-full max-w-5xl px-4 mx-auto py-10">
//             <h2 className="text-3xl font-semibold text-center mb-8">Student Reviews</h2>
//             <Swiper
//                 modules={[Navigation]}
//                 navigation
//                 spaceBetween={20}
//                 slidesPerView={1}
//                 loop={true}
//             >
//                 {testimonialImages.map((img, index) => (
//                     <SwiperSlide key={index}>
//                         <div className="w-full flex justify-center">
//                             <img
//                                 src={img}
//                                 alt={`Review ${index + 1}`}
//                                 className="
//                   w-[90%] sm:w-[80%] md:w-[70%] lg:w-[60%]
//                   max-h-[500px]
//                   object-contain
//                   rounded-xl shadow-lg
//                   transition duration-300 ease-in-out
//                 "
//                             />
//                         </div>
//                     </SwiperSlide>
//                 ))}
//             </Swiper>
//         </div>
//     );
// }
