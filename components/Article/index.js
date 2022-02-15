import Image from 'next/image';

const Article = props => {
    const { children, image, title } = props;

    return (
        <article className="bg-white z-0 relative md:-mt-[30px] mb-[50px] border-y-[6px] border-t-cyan border-b-white rounded-lg">
            {image && <Image src={image} className="min-h-screen" />}
            <div className="pb-[80px] pt-[30px] md:px-[100px] px-[25px]">
                <h1 className="font-bold text-[28px] text-center pb-[30px]">{title}</h1>
                <p className="text-[20px] text-grey">{children}</p>
            </div>
        </article>
    )
};

export default Article;