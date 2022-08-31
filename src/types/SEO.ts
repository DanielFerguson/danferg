interface OpenGraph {
    type: string;
}

export default interface SEO {
    title: string;
    description: string;
    imageUrl: string;
    openGraph: OpenGraph;
    jsonLd?: Object;
}