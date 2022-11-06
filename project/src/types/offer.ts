export type OfferType = {
    id:number;
    title:string;
    type:string;
    price:number;
    rating:number;
    images:string[];
    description?:string;
    location:{
        city:string;
        latitude?:number;
        longitude?:number;
        address:string;
    };
    isPremium:boolean;
    maxAdults:number;
    host:{
        name:string;
        isPro:boolean;
        avatar?:string;
    };
    amenities?:string[];
}