// components/Gallery.tsx

import React from 'react';
import styles from "./gallery.module.css";
import Image from 'next/image';

interface GalleryItemProps {
    imageSrc: string;
    title: string;
}

const GalleryItem: React.FC<GalleryItemProps> = ({ imageSrc, title }) => (
    <div className={styles.galleryItem}>
        <Image src={imageSrc} alt='' width={417} height={339} />
        <h3 className={styles.galleryItemTitle}>{title}</h3>
    </div>
);

interface GalleryProps {
    galleryContent: GalleryItemProps[];
}

const Gallery: React.FC<GalleryProps> = ({ galleryContent }) => (
    <div className={styles.gallerySection}>
        <h2 className={styles.galleryTitle}>Gallery</h2>
        <div className={styles.gallery}>
            {galleryContent.map((item, index) => (
                <GalleryItem key={index} imageSrc={item.imageSrc} title={item.title} />
            ))}
        </div>
    </div>
);

export default Gallery;
