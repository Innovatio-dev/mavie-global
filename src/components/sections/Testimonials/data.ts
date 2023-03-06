interface Testimonial {
    phrase: string;
    name: string;
    image: string;
}

export const TestimonialsData: Testimonial[] = [
    {
        name: 'Domen Vidergar, MaVie VP of Sales',
        phrase: '<strong>Honoured</strong> to be part of MaVie and excited for what\'s to come!',
        image: '/assets/images/speakers/David_Videgar.png'
    },
    {
        name: 'Michal Prazenica, MaVie CEO',
        phrase: '<strong>One for all, all for one.</strong> We are on a beautiful journey.',
        image: '/assets/images/speakers/Michal_prazenica.png'
    },
    {
        name: 'Shukhrat Shadibekov, Ultron CEO',
        phrase: '<strong>Together,</strong> we’ll keep pushing boundaries and making a positive impact on the world.',
        image: '/assets/images/speakers/Shukhrat_shadibekov.png'
    }
]
