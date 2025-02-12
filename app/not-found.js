import Adsense from "@/components/Adsense";
import TitleBar from "@/components/TitleBar";
import Link from "next/link";
import settings from "@/settings.json";

const NotFoundPage = () => {
  return (
    <main className="main">
      <TitleBar
        title="Not Found"
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
                  The link you followed is broken. Page not found!
                </h3>
                <Link href="/" class="btn btn--primary text-white">
                  Go to homepage
                </Link>
              </div>
            </div>
            {settings.googleAdsenseId && settings.googleAdsenseId !== "" && <Adsense id="googleadstwo" slot={settings.squareAd} />}
          </section>
        </div>
      </div>
    </main>
  );
};

export default NotFoundPage;
