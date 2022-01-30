import Image from 'next/image';

const Article = ({ image, title, text}) => (
    <article>
        <Image src={image} />
        <h1>{title}</h1>
        <p>{text}</p>
    </article>
);

export default Article;