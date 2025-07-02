import React from "react";
import { Helmet } from "react-helmet-async";
import { useTranslation } from "react-i18next";
import PropTypes from "prop-types";

const MetaTags = ({ page = "", syncTitle = "", syncDescription = "", syncKeywords = "", canonicalUrl = "" }) => {
    const { t, i18n } = useTranslation();

    const localizedTitle = t(`${page}.title`, { defaultValue: "" });
    const localizedDescription = t(`${page}.description`, { defaultValue: "" });
    const localizedKeywords = t(`${page}.keywords`, { defaultValue: "" });

    const title = syncTitle || localizedTitle || "Default Site Title";
    const description = syncDescription || localizedDescription || "Default site description.";
    const keywords = syncKeywords || localizedKeywords || "ремонт, бытовая техника, холодильники, стиральные машины";

    const lang = i18n.language || "en";

    return (
        <Helmet>
            <html lang={lang} />
            <title>{title}</title>
            <meta name="description" content={description} />
            {keywords && <meta name="keywords" content={keywords} />}

            {/* Open Graph */}
            <meta property="og:title" content={title} />
            <meta property="og:description" content={description} />
            <meta property="og:type" content="website" />
            {canonicalUrl && <meta property="og:url" content={canonicalUrl} />}

            {/* Twitter */}
            <meta name="twitter:title" content={title} />
            <meta name="twitter:description" content={description} />
            <meta name="twitter:card" content="summary_large_image" />

            {/* Canonical */}
            {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
        </Helmet>
    );
};

MetaTags.propTypes = {
    page: PropTypes.string,
    syncTitle: PropTypes.string,
    syncDescription: PropTypes.string,
    syncKeywords: PropTypes.string,
    canonicalUrl: PropTypes.string,
};

MetaTags.defaultProps = {
    page: "",
    syncTitle: "",
    syncDescription: "",
    syncKeywords: "",
    canonicalUrl: "",
};

export default MetaTags;
