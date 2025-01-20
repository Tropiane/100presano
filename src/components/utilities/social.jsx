import { useEffect } from "react";

function Social(){

    useEffect(() => {

        const script = document.createElement("script");
        script.src = "https://www.instagram.com/embed.js";
        script.async = true;
        document.body.appendChild(script);
    
        return () => {
          document.body.removeChild(script);
        };
      }, []);
    
      return (
        <div className="socialMedia">

        <blockquote
          className="instagram-media"
          data-instgrm-permalink="https://www.instagram.com/cpnutricion/"
          data-instgrm-version="14"
          style={{
            background: "#FFF",
            border: 0,
            borderRadius: "3px",
            boxShadow: "0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)",
            margin: "1px",
            maxWidth: "430px",
            minWidth: "326px",
            padding: 0,
            width: "90%",
          }}
        >
          <a
            href="https://www.instagram.com/p/CSfUCQWFI6_/?utm_source=ig_embed&amp;utm_campaign=loading"
            style={{
              background: "#FFFFFF",
              lineHeight: 0,
              padding: "0 0",
              textAlign: "center",
              textDecoration: "none",
              width: "100%",
            }}
            target="_blank"
            rel="noopener noreferrer"
          >
            Ver esta publicación en Instagram
          </a>
        </blockquote>
        </div>
      );
}

export default Social