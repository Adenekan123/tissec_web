import React, { ReactNode } from 'react';

interface SectionPosterProps {
  image: string;
  children: ReactNode;
}

export const SectionPoster: React.FC<SectionPosterProps> = ({ image, children }) => {
    // Ensure the image URL is sanitized if it comes from an untrusted source.
    // This example does not implement sanitization, but it's something to be aware of.
    const backgroundImageStyle = {
        "--image-url": `url('${image}')`,
        backgroundSize: 'cover',
        backgroundPosition: 'left',
    };

    return (
        <section className="p-4 md:p-0">
            <div style={backgroundImageStyle} className="pb-24 w-full bg-cover bg-left relative bg-[image:var(--image-url)] ">
                <div className="md:flex flex-row justify-end">
                    {children}
                </div>
            </div>
        </section>
    );
};
