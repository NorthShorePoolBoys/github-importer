import { Link } from "react-router-dom";

interface FinalCTAProps {
  title?: string;
  description?: string;
}

const FinalCTA = ({
  title = "Your pool deserves professional care",
  description = "Join homeowners across Peabody, Danvers, Beverly, and the North Shore who trust North Shore Pool Boys.",
}: FinalCTAProps) => (
  <section className="final-cta">
    <div className="wrap">
      <h2>{title}</h2>
      <p>{description}</p>
      <div className="final-cta__btns">
        <a href="tel:9788825932" className="btn btn--teal btn--lg">Call (978) 882-5932</a>
        <Link to="/contact" className="btn btn--outline btn--lg">Get a Free Quote</Link>
      </div>
    </div>
  </section>
);

export default FinalCTA;
