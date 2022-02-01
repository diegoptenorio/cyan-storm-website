import { v1 as uuidv1 } from 'uuid';

import Tonguemeleon from '../assets/img/articles/tonguemeleon_0.svg';

const Articles = [
    {
        id: uuidv1(),
        image: Tonguemeleon,
        title: 'Tonguemeleon is available on Google Play',
        text: 'Tonguemelon is a casual mobile game about a chameleon trying to eat some insects flying over the lake. Attention because some bugs give special abilities.'
    }
];

export default Articles;