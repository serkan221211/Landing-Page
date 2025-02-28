declare global {
    namespace JSX {
      interface IntrinsicElements {
        'swiper-container': React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement> & SwiperProps,
          HTMLElement
        >;
        'swiper-slide': React.DetailedHTMLProps<
          React.HTMLAttributes<HTMLElement> & SwiperSlideProps,
          HTMLElement
        >;
      }
    }
  }