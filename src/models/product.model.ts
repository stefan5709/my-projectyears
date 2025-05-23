export type Product = {
    id: string;
    name: string;
    price: number;
    rating: number;
    image: ProductImage;
    createdAt: Date;
};

export type ProductImage = {
    id: string;
    description: string;
    createdAt: Date;
    isMain: boolean;
    url: string;
}

export type DetailedProduct = {
    id: string;
    name: string;
    description: string;
    rating: number;
    reviews: number;
    images: ProductImage[];
    createdAt: Date;
    variants: ProductVariant[];
};

type ProductVariant = {
    id: string;
    sku: string;
    size: string;
    price: number;
    inStock: boolean;
    isEnabled: boolean;
    createdAt: Date;
}

export type ProductVariantResponse = {
    id: string;
    skuCode: string;
    size: string;
    price: number;
    inStock: boolean;
    isEnabled: boolean;
    createdAt: Date;
}