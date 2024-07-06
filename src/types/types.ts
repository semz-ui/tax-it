export type FeaturedData =
    {
        id: number,
        title: string,
        description: string,
        icon: string,
    }[]

export type GetStartedData = {
    id: number,
    title: string,
    description: string,
}[]
export type SingleGetStartedData = {
    id: number,
    title: string,
    description: string,
}

export type SingleFeaturedData =
    {
        id: number,
        title: string,
        description: string,
        icon: string,
    }

export interface UserContextState {
    userType: 'individual' | 'business';
    setUserType: (type: 'individual' | 'business') => void;
}