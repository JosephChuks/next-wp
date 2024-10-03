"use client"
import Adsense from "@/components/Adsense";
import settings from "@/settings.json";
import TitleBar from "@/components/TitleBar";
const Error = ({error, reset}) => {
  return (
    <main className="main">
      <TitleBar
        title="Error!"
        day={new Date().getDate().toString().padStart(2, "0")}
        year={new Date().toLocaleDateString("en-US", {
          month: "long",
          year: "2-digit",
        })}
      />
      <div className="detail">
        <div className="description">
          <section class="section">
            <div class="section__content" style={{ textAlign: "center" }}>
              <div>
                <h3 class="fw-bold mb-4 text-center">
                {error.message}
                </h3>
                <button className="btn btn--primary text-white" onClick={() => reset()}>Try Again</button>
              </div>
            </div>
            {settings.googleAdsenseId && settings.googleAdsenseId !== "" && <Adsense id="googleadstwo" slot={settings.squareAd} />}
          </section>
        </div>
      </div>
    </main>
  );
};

export default Error;
