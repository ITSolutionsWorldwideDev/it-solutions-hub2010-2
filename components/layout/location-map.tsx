export default async function LocationMap() {
  const mapSrc =
    "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2433.5289514228773!2d4.482805076926155!3d51.890982479691176!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c5cfd553bb1c9f%3A0xb340df3dc06d9ad0!2sMandenmakerstraat%20100C%2C%203194%20DG%20Hoogvliet%20Rotterdam%2C%20Netherlands!5e0!3m2!1sen!2s!4v1700000000000!5m2!1sen!2s";

  return (
    <div className="max-w-[1100px] mx-auto px-4 py-12">
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
  );
}
