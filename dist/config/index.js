"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PRODUCT_CATEGORIES = void 0;
exports.PRODUCT_CATEGORIES = [
    {
        label: "UI Kits",
        /*the will an internal ID that we can use it as the value the CONST is going to important for
            typescript, so this is not just any string which is will be by default but
            typeScript knows it's literally that is ui under-scor kits which why we have CONST here.*/
        value: "ui_kits",
        featured: [
            {
                name: "Editor picks",
                href: "#",
                imageSrc: "/nav/ui-kits/mixed.jpg",
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/nav/ui-kits/blue.jpg",
            },
            {
                name: "Bestsellers",
                href: "#",
                imageSrc: "/nav/ui-kits/purple.jpg",
            },
        ],
    },
    {
        label: "Icons",
        /*the will an internal ID that we can use it as the value the CONST is going to important for
            typescript, so this is not just any string which is will be by default but
            typeScript knows it's literally that is ui under-scor kits which why we have CONST here.*/
        value: "icons",
        featured: [
            {
                name: "Favorite Icons Picks",
                href: "#",
                imageSrc: "/nav/icons/picks.jpg",
            },
            {
                name: "New Arrivals",
                href: "#",
                imageSrc: "/nav/icons/new.jpg",
            },
            {
                name: "Bestsellers Icons",
                href: "#",
                imageSrc: "/nav/icons/bestsellers.jpg",
            },
        ],
    },
];
