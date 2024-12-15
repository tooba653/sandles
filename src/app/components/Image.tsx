import Image from 'next/image';

interface ImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

const CustomImage = ({ src, alt, width, height }: ImageProps) => {
  return (
    <div className="flex justify-center my-6">
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className="rounded-lg shadow-lg" 
        layout="intrinsic" 
      />
    </div>
  );
};

export default CustomImage;
