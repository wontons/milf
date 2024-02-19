/// <reference types="react-scripts" />

interface AxiosResponse<T> {
    status: number;
    data: T;
}

interface Player { 
    id: number;
    place: string;
    name: string;
    points: number;
    is_tour_member: boolean;
}

// interface Player {
//     first_name: string;
//     last_name: string;
//     pdga_number: number;
//     membership_status: string;
//     membership_expiration_date: string;
//     classification: string;
//     city: string;
//     state_prov: string;
//     country: string;
//     rating: number;
//     rating_effective_date: string;
//     official_status: string;
//     official_expiration_date: string;
//     last_modified: string;
// }

interface PlayerStats {
    first_name: string;
    last_name: string;
    pdga_number: string;
    rating: number;
    year: string;
    class: string;
    gender: string;
    division_name: string;
    division_code: string;
    country: string;
    state_prov: string;
    tournaments: number;
    rating_rounds_used: number;
    points: number;
    prize: number;
    last_modified: string;
}

interface IEvent {
    title: string;
    tier: string;
    date: string;
    location: string;
    td: string;
    url: string;
}

interface Course {
    course_id: number;
    course_node_nid: number;
    course_name: string;
    course_type: string;
    course_description: string;
    distance: number;
    latitude: string;
    longitude: string;
    location_type: string;
    city: string;
    street: string;
    street2: string;
    state_province: string;
    postal_code: string;
    state_province_name: string;
    country: string;
    holes: number;
    directions: string;
    basket_types: string;
    tee_types: string;
    total_length_of_course: number;
    total_length_of_alternate: number;
    number_of_holes_less_than_300: number;
    number_of_holes_between_300_and_400: number;
    number_of_holes_greater_than_400: number;
    camping: string;
    facilities: string;
    fees: string;
    handicap: string;
    private: string;
    signage: string;
    contact_name: string;
    contact_pdga_number: number;
    contact_home_phone: string;
    course_foliage: number;
    course_elevation: number;
    legacy_course_courseid: number;
    year_established: string;
    external_link_1_url: string;
    external_link_1_title: string;
    created: string;
    update: string;
}

interface PlayerSearchFormState {
    pdga_number: string
    first_name: string
    last_name: string
    _class: string
    city: string
    state_prov: string
    country: string
}

interface DiscGamePageResponse {
    letter: string
    disc_names: list[string]
    last_modified: string
}