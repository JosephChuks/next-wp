import Adsense from "@/components/Adsense";
import settings from "@/settings.json";


const RightSidebar = async () => {
  const res = await fetch(`${settings.api}/posts?page=1`);
  const data = await res.json();

  return (
    <>
      {settings.googleAdsenseId && settings.googleAdsenseId !== "" &&
        <>
          <div className="right-sidebar__widget">
            <div className="right-sidebar__content">
              <div className="right-sidebar__title">ADVERTISEMENT</div>
              {settings.googleAdsenseId && settings.googleAdsenseId !== "" && <Adsense id="googleadthree" slot={settings.verticalAd} />}
            </div>
          </div>
        </>}
      <div className="right-sidebar__widget">
        <div className="right-sidebar__content">
          <div className="right-sidebar__title">RECOMMENDED</div>
          {data.map((item) => (
            <div className="articles_sidebar" key={item.id}>
              <a href={`/${item.slug}`} key={item.id}>
                    <div
                      dangerouslySetInnerHTML={{
                        __html: item.title.rendered,
                      }}
                      className="articles__title"
                    />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default RightSidebar;
