import Image from 'next/image';

const Article = ({ image, title, text}) => (
    <article className='bg-white z-0 relative -mt-[30px] border-y-[6px] border-t-cyan border-b-white rounded-lg'>
        <Image src={image} />
        <div className="bg-white w-fit mx-auto pt-[30px] px-[40px]">
            <h1 className="font-bold text-[28px]">{title}</h1>
        </div>
        <div className="pb-[80px] pt-[30px] px-[100px]">
            <p className="text-[20px] text-grey">{text}</p>
        </div>
    </article>
);

export default Article;