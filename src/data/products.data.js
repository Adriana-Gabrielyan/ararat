const PRODUCTS_DATA = [
    {
        id: 1,
        image:
            "https://shop.araratbrandy.com/storage/products/6919/5fa910307fbe2_ararat_akhtamar_packshot_arm_50cl-copy.png",
        logo: "https://shop.araratbrandy.com/storage/logos/16056880945174063.svg",
        price: 2500,
        category_id: 1,
        name: "Ararat 1",
        description:
            "ARARAT Apricot, based on 6-year-old ARARAT brandy and apricot flavor, has rich and intense aroma with soft and fresh palate. The undertones of ripe fruits tinged with notes of liquorice-vanilla linger in the smooth flavor of the drink and carry-on with a sweet finish of fresh apricots.",
        featured: true,
    },
    {
        id: 2,
        image: "https://shop.araratbrandy.com/storage/products/6799/5f5f86e6d3007_ARARAT_SC2_AIO-1.png",
        logo: "https://shop.araratbrandy.com/storage/logos/16056880477173997.svg",
        price: 11250,
        category_id: 2,
        name: "Ararat 2",
        description:
            "ARARAT Apricot, based on 6-year-old ARARAT brandy and apricot flavor, has rich and intense aroma with soft and fresh palate. The undertones of ripe fruits tinged with notes of liquorice-vanilla linger in the smooth flavor of the drink and carry-on with a sweet finish of fresh apricots.",
        featured: false,
    },
    {
        id: 3,
        image: "https://shop.araratbrandy.com/storage/products/6775/5f58a050d960d_Erebuni-30-1.png",
        logo: "https://shop.araratbrandy.com/storage/logos/16056891508864010.png",
        price: 6530,
        category_id: 3,
        name: "Ararat 3",
        description:
            "ARARAT Apricot, based on 6-year-old ARARAT brandy and apricot flavor, has rich and intense aroma with soft and fresh palate. The undertones of ripe fruits tinged with notes of liquorice-vanilla linger in the smooth flavor of the drink and carry-on with a sweet finish of fresh apricots.",
        featured: false,
    },
    {
        id: 4,
        image: "https://shop.araratbrandy.com/storage/products/6803/5f607627262e7_01_packshot_75cl-copy.png",
        logo: "https://shop.araratbrandy.com/storage/logos/16057046987206513.svg",
        price: 7800,
        category_id: 4,
        name: "Ararat 4",
        description:
            "ARARAT Apricot, based on 6-year-old ARARAT brandy and apricot flavor, has rich and intense aroma with soft and fresh palate. The undertones of ripe fruits tinged with notes of liquorice-vanilla linger in the smooth flavor of the drink and carry-on with a sweet finish of fresh apricots.",
        featured: false,
    },
    {
        id: 5,
        image: "https://shop.araratbrandy.com/storage/products/6926/5fa9175845313_23.1-ARARAT-paper-bag_big.jpg",
        price: 35600,
        category_id: 5,
        name: "Ararat 5",
        description:
            "ARARAT Apricot, based on 6-year-old ARARAT brandy and apricot flavor, has rich and intense aroma with soft and fresh palate. The undertones of ripe fruits tinged with notes of liquorice-vanilla linger in the smooth flavor of the drink and carry-on with a sweet finish of fresh apricots.",
        featured: false,
    },
    {
        id: 6,
        image:
            "https://shop.araratbrandy.com/storage/products/6808/5f60aa551a5c2_Mini_3-in-1_Pack_3-4_ENG-2.png",
        logo: "https://shop.araratbrandy.com/storage/logos/16056881304307993.svg",
        price: 1500,
        category_id: 3,
        name: "Ararat 6",
        description:
            "ARARAT Apricot, based on 6-year-old ARARAT brandy and apricot flavor, has rich and intense aroma with soft and fresh palate. The undertones of ripe fruits tinged with notes of liquorice-vanilla linger in the smooth flavor of the drink and carry-on with a sweet finish of fresh apricots.",
        featured: false,
    },
    {
        id: 7,
        image:
            "https://shop.araratbrandy.com/storage/products/6919/5fa910307fbe2_ararat_akhtamar_packshot_arm_50cl-copy.png",
        logo: "https://shop.araratbrandy.com/storage/logos/16056880945174063.svg",
        price: 56000,
        category_id: 1,
        name: "Ararat 1",
        description:
            "ARARAT Apricot, based on 6-year-old ARARAT brandy and apricot flavor, has rich and intense aroma with soft and fresh palate. The undertones of ripe fruits tinged with notes of liquorice-vanilla linger in the smooth flavor of the drink and carry-on with a sweet finish of fresh apricots.",
        featured: true,
    },
    {
        id: 8,
        image: "https://shop.araratbrandy.com/storage/products/6799/5f5f86e6d3007_ARARAT_SC2_AIO-1.png",
        logo: "https://shop.araratbrandy.com/storage/logos/16056880477173997.svg",
        price: 29500,
        category_id: 2,
        name: "Ararat 2",
        description:
            "ARARAT Apricot, based on 6-year-old ARARAT brandy and apricot flavor, has rich and intense aroma with soft and fresh palate. The undertones of ripe fruits tinged with notes of liquorice-vanilla linger in the smooth flavor of the drink and carry-on with a sweet finish of fresh apricots.",
        featured: false,
    },
    {
        id: 9,
        image: "https://shop.araratbrandy.com/storage/products/6775/5f58a050d960d_Erebuni-30-1.png",
        logo: "https://shop.araratbrandy.com/storage/logos/16056891508864010.png",
        price: 48000,
        category_id: 3,
        name: "Ararat 3",
        description:
            "ARARAT Apricot, based on 6-year-old ARARAT brandy and apricot flavor, has rich and intense aroma with soft and fresh palate. The undertones of ripe fruits tinged with notes of liquorice-vanilla linger in the smooth flavor of the drink and carry-on with a sweet finish of fresh apricots.",
        featured: false,
    },
    {
        id: 10,
        image: "https://shop.araratbrandy.com/storage/products/6803/5f607627262e7_01_packshot_75cl-copy.png",
        logo: "https://shop.araratbrandy.com/storage/logos/16057046987206513.svg",
        price: 72000,
        category_id: 4,
        name: "Ararat 4",
        description:
            "ARARAT Apricot, based on 6-year-old ARARAT brandy and apricot flavor, has rich and intense aroma with soft and fresh palate. The undertones of ripe fruits tinged with notes of liquorice-vanilla linger in the smooth flavor of the drink and carry-on with a sweet finish of fresh apricots.",
        featured: false,
    },
    {
        id: 11,
        image: "https://shop.araratbrandy.com/storage/products/6860/5f759b8d5c718_23.9.jpg",
        price: 81000,
        category_id: 5,
        name: "Ararat 5",
        description:
            "ARARAT Apricot, based on 6-year-old ARARAT brandy and apricot flavor, has rich and intense aroma with soft and fresh palate. The undertones of ripe fruits tinged with notes of liquorice-vanilla linger in the smooth flavor of the drink and carry-on with a sweet finish of fresh apricots.",
        featured: false,
    },
    {
        id: 12,
        image:
            "https://shop.araratbrandy.com/storage/products/6858/5f7596d070b58_23.5-Set-of-ARARAT-pins-2.jpg",
        price: 16500,
        category_id: 5,
        name: "Ararat 6",
        description:
            "ARARAT Apricot, based on 6-year-old ARARAT brandy and apricot flavor, has rich and intense aroma with soft and fresh palate. The undertones of ripe fruits tinged with notes of liquorice-vanilla linger in the smooth flavor of the drink and carry-on with a sweet finish of fresh apricots.",
        featured: false,
    },
];

export default PRODUCTS_DATA;
