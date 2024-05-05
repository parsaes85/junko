import React from "react";

function MapLocation() {
  return (
    <div className="mb-16">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d6936.911895884967!2d52.52263873815538!3d29.61949799028141!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3fb2127944663db5%3A0x47971e0ccd364474!2sZeytoon%20Fars%20Shopping%20Center%E2%80%8C!5e0!3m2!1sen!2s!4v1714899372249!5m2!1sen!2s"
        width="100%"
        height="500"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default MapLocation;
