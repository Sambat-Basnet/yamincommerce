import React from "react";
import styles from "./contact.module.css";
import { Map, Marker, Popup, TileLayer } from "react-leaflet";
import image from "../assets/walter.jpg";

const Contact = () => {
  const position = [27.700005, 85.338427];
  return (
    <>
      <main className={styles.content}>
        <div className={styles.upper}>
          <img src={image} alt="my face" />
        </div>
        <div className={styles.lower}>
          <div className={styles.lowerContent}>
            <form>
              <div className={styles.textPart}>
                <h1>Get in touch with Me</h1>
                <p>
                  No, you clearly don't know who you're talking to, so let me
                  clue you in. I am not in danger, Skyler. I AM the danger! A
                  guy opens his door and gets shot and you think that of me? No.
                  I am the one who knocks!
                </p>
                <h3>yaminc@sambat.com</h3>
                <h3>9842129930</h3>
              </div>
              <div className={styles.firstSec}>
                <section>
                  <input type="text" placeholder="Name" />
                  <input type="text" placeholder="Email" />
                </section>

                <textarea
                  className={styles.textArea}
                  cols="30"
                  rows="10"
                  placeholder="Message"
                ></textarea>
                <button>Send</button>
              </div>
            </form>
          </div>
          <div className={styles.map}>
            <Map center={position} zoom={17}>
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              />
              <Marker position={position} color={"red"}>
                <Popup>
                  Yam Inc.
                  <br />
                  Baneshwor,Kathmandu
                </Popup>
              </Marker>
            </Map>
          </div>
        </div>
      </main>
    </>
  );
};

export default Contact;
