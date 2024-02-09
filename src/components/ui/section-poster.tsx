import { ReactNode } from "react"

export const SectionPoster = ({ image, children }: { image: string, children: ReactNode }) => {
    return (
        <section className="p-4 md:p-0">
            <div className={`md:bg-[url('${image}')] bg-cover pb-24 w-full relative`}>
                <div className="md:flex flex-row justify-end">
                    {children}
                </div>
            </div>
        </section>

    )
}