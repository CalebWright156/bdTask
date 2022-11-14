import Images from '../src/images'
// This was the mock database I was referring to. It is an array of objects that uses template literals to get the images needed for the project card image props
export const ProjectData = [
    {
        title: 'School Portal',
        image: `${Images.BarkerPortal}`,
        alt: 'School Portal',
        text: 'Modern web portal for students, teachers and parents',
        color: '#090d31',
    },
    {
        title: 'Red Seal',
        image: `${Images.RedSeal}`,
        alt: 'Red Seal',
        text: 'Product website',
        color: '#900423',
    },
    {
        title: 'Moxion',
        image: `${Images.Moxion}`,
        alt: 'Moxion website',
        text: 'Sales website for NZ based SaaS product',
        color: '#e4032e',
    },
    {
        title: 'Vehicle Fleet Management Systen',
        image: `${Images.ToyotaFleet}`,
        alt: 'Toyota Platform',
        text: 'Fleet management platform',
        color: '#030405',
    },
    {
        title: 'Barker College',
        image: `${Images.BarkerCollege}`,
        alt: 'Barker College Website',
        text: 'Fresh new school website as part of a rebrand',
        color: '#900423',
    },
    {
        title: 'Recruitment System',
        image: `${Images.CreativeStore}`,
        alt: 'Recruitment System',
        text: 'Cloud based system to manage full time and contract based placements',
        color: '#333333',
    },
]

