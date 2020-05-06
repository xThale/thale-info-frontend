import {AuthConfig, BackendConfig, Configuration, CssValues, MediaConfig, ThemeConfig} from "./Config";

const mediaConfig: MediaConfig = {
    xxsmall: 0,
    xsmall: 400,
    small: 576,
    medium: 768,
    large: 992,
    xlarge: 1200
}

const cssValues: CssValues = {
    navBarHeight: 35
}


const themeConfig : ThemeConfig = {
    lighter: "#A75DB7",
    light: "#8C389E",
    normal: "#7E1E93",
    dark: "#650E77",
    darker: "#4E025E",

    headerBarTextColor: "#C59FCE",

    title: "#650E77", // Same as dark
    text: "black",

    navigationActiveButtonColor: "#e7c8f7",

    fontFamily: "Roboto"
};

const authConfig : AuthConfig = {
    googleClientId: "544855491648-77v54qbigd0l0un8dd7ioam0nrs68h7c.apps.googleusercontent.com"
};

const backendConfig : BackendConfig = {
    backendServerUrl: "http://localhost:8080/",
    loginUrl: "auth/login",
    deckUrl: "deck"
};

export const DevConfig : Configuration = {
    theme: themeConfig,
    backend: backendConfig,
    auth: authConfig,
    media: mediaConfig,
    css: cssValues
};