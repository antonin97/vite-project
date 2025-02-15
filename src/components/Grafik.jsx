
export default function Grafik(site) {
  const {name, phone } = site
  return (
    <div className="grafik-container">
      <div className="grafik-location">
        <a
      
          href="https://www.google.com/maps/place/Mount+Fuji/@35.3606237,138.7098535,14z/data=!3m1!4b1!4m6!3m5!1s0x6019629a42fdc899:0xa6a1fcc916f3a4df!8m2!3d35.3606255!4d138.7273634!16zL20vMGNrczA?entry=ttu"
          target="_blank"
          rel="noopener noreferrer"
          className="grafik-map-link"
        >
          View on Google Maps
        </a>
      </div>

      <h1 className="grafik-title">{name}</h1>
      <p className="grafik-date">{phone.number}</p>
      <p className="grafik-description">
        Mount Fuji is the tallest mountain in Japan, standing at 3,776 meters (12,380 feet). Mount Fuji is the single most popular tourist site in Japan, for both Japanese and foreign tourists.
      </p>
    </div>
  );
};
