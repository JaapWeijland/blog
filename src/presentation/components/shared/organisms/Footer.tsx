export interface FooterProps {}

export const Footer = ({}: FooterProps) => {
    return (
        <div className="flex flex-col gap-8 text-neutral-400 text-center max-w-2xl mx-auto leading-loose">
            <p>
                Thank you for visiting my blog. If you have any questions,
                remarks, or other reason to contact me, please do so via{' '}
                <a href="mailto:info@weijland.it">info@weijland.it</a>.
            </p>
            <p>Built by Jaap Weijland.</p>
        </div>
    );
};
