import logo from '../assets/basic_logo_no_circle.png';

export interface Event {
    name: string;
    td: string;
    presenter: string | null;
    sponsor: string | null;
    location: string;
    tier: string;
    date: string;
    registration_date: string;
    dgs_link: string;
    pdga_link: string;
    logo_src: string | null;
}

export const events: Event[] = [
    {
        name: "Spring Fling",
        td: "Terrell Feakes",
        presenter: "Direct Discs",
        sponsor: null,
        location: "Kilcona Lakes, Winnipeg",
        tier: "C",
        date: "Saturday, April 29, 2023",
        registration_date: "March 6, 2023",
        dgs_link: "www.discgolfscene.com/tournaments/2nd_Annual_Spring_Fling_at_Kilcona_Lakes_Presented_by_Direct_Discs_2023",
        pdga_link: "www.pdga.com/tour/event/68202",
        logo_src: logo,
    },
    {
        name: "Pembina Valley Open",
        td: "Eric Giesbrecht",
        presenter: null,
        sponsor: null,
        location: "Stanley Park, Thornhill",
        tier: "C",
        date: "Sat-Sun, June 3-4, 2023",
        registration_date: "March 11, 2023",
        dgs_link: "https://www.discgolfscene.com/tournaments/2023_Pembina_Valley_Open_2023",
        pdga_link: "www.pdga.com/tour/events",
        logo_src: logo,
    },
    {
        name: "Manitoba Provincials",
        td: "Marshall Toews",
        presenter: null,
        sponsor: null,
        location: "Labarriere Park, Winnipeg",
        tier: "C",
        date: "Sat-Sun, July 15-16, 2023",
        registration_date: "Coming Soon, 2023",
        dgs_link: "https://www.discgolfscene.com/tournaments/2023_Pembina_Valley_Open_2023",
        pdga_link: "www.pdga.com/tour/event/66135",
        logo_src: logo,
    }
]