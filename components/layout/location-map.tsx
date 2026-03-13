export default async function LocationMap() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.5289514228773!2d4.482805076926155!3d51.890982479691176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5cfd553bb1c9f%3A0xb340df3dc06d9ad0!2sMandenmakerstraat%20100C%2C%203194%20DG%20Hoogvliet%20Rotterdam%2C%20Netherlands!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s";

  const mapSrc2 =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3319.60474911396!2d72.82266457705654!3d33.693297236596095!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfa3ba05016db9%3A0x6037cedb42a424f1!2sSeventeen%20Square!5e0!3m2!1sen!2s!4v1773384858441!5m2!1sen!2s";

  return (
    <>
      <div className="max-w-[1100px] mx-auto px-4 py-12">
      <div className="w-full py-2 ml-4 sm:ml-0">
        <h2 className="text-2xl font-bold mb-4">Our Office</h2>
      </div>
        <div className="w-full h-80">
          <iframe
            title="Location Map"
            src={mapSrc}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            //   allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
      <div className="max-w-[1100px] mx-auto px-4 py-12">
      <div className="w-full py-2 ml-4 sm:ml-0">
        <h2 className="text-2xl font-bold mb-4">Our Partner Office</h2>
      </div>
        <div className="w-full h-80">
          <iframe
            title="Location Map"
            src={mapSrc2}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            //   allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </>
  );
}
