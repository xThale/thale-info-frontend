
/**
 * Config determining the width for media queries
 */
interface MediaConfig {
    xxsmall: number
    xsmall: number
    small: number
    medium: number
    large: number
    xlarge: number
}

const mediaConfig: MediaConfig = {
    xxsmall: 0,
    xsmall: 400,
    small: 576,
    medium: 768,
    large: 992,
    xlarge: 1200
}

/**
 * Config for css widths and heights
 */
interface CssValues {
    navBarHeight: number
}

const cssValues: CssValues = {
    navBarHeight: 35
}

/**
 * Config for the website theme
 */
interface ThemeConfig {
    lighter: string
    light: string
    normal: string
    dark: string
    darker: string

    navBarTextColor: string
    title: string
    text: string

    fontFamily: string
}

const themeConfig : ThemeConfig = {
    lighter: "#A75DB7",
    light: "#8C389E",
    normal: "#7E1E93",
    dark: "#650E77",
    darker: "#4E025E",

    navBarTextColor: "#C59FCE",
    title: "#650E77", // Same as dark
    text: "black",

    fontFamily: "Roboto"
};

/**
 * Config for auth
 */
interface AuthConfig {
    googleClientId: string
}

const authConfig : AuthConfig = {
    googleClientId: "544855491648-77v54qbigd0l0un8dd7ioam0nrs68h7c.apps.googleusercontent.com"
};


/**
 * Config regarding the backend
 */
interface BackendConfig {
    backendServerUrl : string
    loginUrl: string
}

const backendConfig : BackendConfig = {
    backendServerUrl: "http://localhost:8080/",
    loginUrl: "auth/login"
};


/**
 * The whole config
 */
interface Config {
    theme: ThemeConfig,
    backend: BackendConfig,
    auth: AuthConfig,
    media: MediaConfig,
    css: CssValues
}
const Config : Config = {
    theme: themeConfig,
    backend: backendConfig,
    auth: authConfig,
    media: mediaConfig,
    css: cssValues
};

export default Config