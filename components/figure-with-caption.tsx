import Image from 'next/image';

const FigureWithCaption = ({ src, alt, caption, width, height }) => {
  return (
    <figure>
      <Image src={src} alt={alt} width={width} height={height} />
      {caption && <figcaption>{caption}</figcaption>}
    </figure>
  );
};

export default FigureWithCaption;
